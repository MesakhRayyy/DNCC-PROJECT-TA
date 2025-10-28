// Login page functionality
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const toast = document.getElementById("toast");
  const params = new URLSearchParams(window.location.search);
  const returnToParam = params.get("returnTo");

  // Show toast message
  function showToast(message, type = "info") {
    const toastItem = document.createElement("div");
    toastItem.className = `toast-item ${type}`;
    toastItem.textContent = message;
    toast.appendChild(toastItem);

    // Trigger animation
    requestAnimationFrame(() => {
      toastItem.classList.add("visible");
    });

    // Remove after 3 seconds
    setTimeout(() => {
      toastItem.classList.remove("visible");
      setTimeout(() => toastItem.remove(), 300);
    }, 3000);
  }

  // Validate email format
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Validate phone number (basic Indonesian format)
  function isValidPhone(phone) {
    return /^08[1-9][0-9]{7,10}$/.test(phone);
  }

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Get form values
    const name = document.getElementById("login-name").value.trim();
    const email = document.getElementById("login-email").value.trim();
    const phone = document.getElementById("login-phone").value.trim();

    // Reset errors
    document.getElementById("err-login-name").textContent = "";
    document.getElementById("err-login-email").textContent = "";
    document.getElementById("err-login-phone").textContent = "";

    // Validate name
    if (!name) {
      document.getElementById("err-login-name").textContent =
        "Nama tidak boleh kosong";
      isValid = false;
    } else if (name.length < 3) {
      document.getElementById("err-login-name").textContent =
        "Nama minimal 3 karakter";
      isValid = false;
    }

    // Validate email
    if (!email) {
      document.getElementById("err-login-email").textContent =
        "Email tidak boleh kosong";
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById("err-login-email").textContent =
        "Format email tidak valid";
      isValid = false;
    }

    // Validate phone
    if (!phone) {
      document.getElementById("err-login-phone").textContent =
        "Nomor telepon tidak boleh kosong";
      isValid = false;
    } else if (!isValidPhone(phone)) {
      document.getElementById("err-login-phone").textContent =
        "Format nomor telepon tidak valid";
      isValid = false;
    }

    if (isValid) {
      // Store user info in localStorage
      const userInfo = { name, email, phone };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      // Show success message
      showToast("Login berhasil", "success");

      // Redirect to returnTo (if provided) or main page after short delay
      setTimeout(() => {
        const dest = returnToParam
          ? decodeURIComponent(returnToParam)
          : "index.html";
        try {
          const url = new URL(dest, window.location.origin);
          if (url.origin === window.location.origin)
            window.location.href = url.pathname + url.search + url.hash;
          else window.location.href = "index.html";
        } catch (e) {
          window.location.href = "index.html";
        }
      }, 1000);
    }
  });
});
