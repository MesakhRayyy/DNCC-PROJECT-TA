const express = require("express");
const path = require("path");
const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();

const DB_PATH = path.join(__dirname, "data.db");
const app = express();
const PORT = process.env.PORT || 3000;

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// simple basic auth for admin
function requireAdmin(req, res, next) {
  const auth = req.headers.authorization;
  const adminPass = process.env.ADMIN_PASSWORD || "admin123";
  if (!auth) {
    return res.status(401).send({ error: "Authorization required" });
  }
  const parts = auth.split(" ");
  if (parts[0] !== "Basic")
    return res.status(401).send({ error: "Invalid auth" });
  const creds = Buffer.from(parts[1], "base64").toString("utf8");
  const [user, pass] = creds.split(":");
  if (user !== "admin" || pass !== adminPass)
    return res.status(403).send({ error: "Forbidden" });
  next();
}

app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Log requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// init DB
const db = new sqlite3.Database(DB_PATH);
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, desc TEXT, img TEXT)`
  );
  db.run(
    `CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, address TEXT, phone TEXT, total INTEGER, created_at TEXT)`
  );
  db.run(
    `CREATE TABLE IF NOT EXISTS order_items (id INTEGER PRIMARY KEY AUTOINCREMENT, order_id INTEGER, product_id INTEGER, qty INTEGER, price INTEGER)`
  );

  db.get("SELECT COUNT(1) as c FROM products", (err, row) => {
    if (err) return console.error(err);
    if (row.c === 0) {
      const stmt = db.prepare(
        "INSERT INTO products (id,name,price,desc,img) VALUES (?,?,?,?,?)"
      );
      const sample = [
        [
          1,
          "Kemeja Pantai",
          125000,
          "Kemeja santai, bahan ringan, cocok untuk musim panas.",
          "https://via.placeholder.com/400x300?text=Kemeja+Pantai",
        ],
        [
          2,
          "Celana Pendek",
          90000,
          "Celana pendek nyaman, mudah dicuci.",
          "https://via.placeholder.com/400x300?text=Celana+Pendek",
        ],
        [
          3,
          "Sandal Gunung",
          175000,
          "Sandal untuk aktivitas outdoor, nyaman dan tahan lama.",
          "https://via.placeholder.com/400x300?text=Sandal+Gunung",
        ],
        [
          4,
          "Tas Punggung",
          245000,
          "Tas punggung 20L, banyak kompartemen.",
          "https://via.placeholder.com/400x300?text=Tas+Punggung",
        ],
        [
          5,
          "Topi Baseball",
          65000,
          "Topi gaya kasual, ukuran one-size.",
          "https://via.placeholder.com/400x300?text=Topi+Baseball",
        ],
      ];
      sample.forEach((s) => stmt.run(s));
      stmt.finalize();
      console.log("Inserted sample products");
    }
  });
});

app.get("/api/products", (req, res) => {
  db.all("SELECT * FROM products", (err, rows) => {
    if (err) return res.status(500).send({ error: err.message });
    res.json(rows);
  });
});

app.post("/api/orders", (req, res) => {
  const { name, address, phone, items, total } = req.body;
  if (
    !name ||
    !address ||
    !phone ||
    !Array.isArray(items) ||
    items.length === 0
  )
    return res.status(400).send({ error: "Invalid payload" });
  const created_at = new Date().toISOString();
  db.run(
    "INSERT INTO orders (name,address,phone,total,created_at) VALUES (?,?,?,?,?)",
    [name, address, phone, total, created_at],
    function (err) {
      if (err) return res.status(500).send({ error: err.message });
      const orderId = this.lastID;
      const stmt = db.prepare(
        "INSERT INTO order_items (order_id,product_id,qty,price) VALUES (?,?,?,?)"
      );
      items.forEach((it) => stmt.run(orderId, it.productId, it.qty, it.price));
      stmt.finalize(() => {
        res.status(201).send({ id: orderId });
      });
    }
  );
});

app.get("/api/orders", requireAdmin, (req, res) => {
  db.all("SELECT * FROM orders ORDER BY id DESC", (err, orders) => {
    if (err) return res.status(500).send({ error: err.message });
    // fetch items per order
    const out = [];
    let remaining = orders.length;
    if (remaining === 0) return res.json([]);
    orders.forEach((o) => {
      db.all(
        "SELECT * FROM order_items WHERE order_id=?",
        [o.id],
        (err, items) => {
          if (err) return res.status(500).send({ error: err.message });
          out.push(Object.assign({}, o, { items }));
          remaining -= 1;
          if (remaining === 0) res.json(out);
        }
      );
    });
  });
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});
