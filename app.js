// Frontend JS: connects to backend API, adds validation and toast notifications
let products = [
  {
    id: "kemeja-001",
    name: "Kemeja Pantai",
    desc: "Kemeja santai motif tropical premium untuk gaya kasual yang nyaman dan stylish.",
    specs: {
      material: {
        utama: {
          jenis: "Rayon Premium",
          komposisi: "100% Rayon",
          gramasi: "130 GSM",
          karakteristik: [
            "Ultra-lightweight",
            "Breathable fiber",
            "Moisture-wicking",
            "Natural drape",
          ],
          treatment: ["Bio-polishing finish", "Enzyme-washed", "Pre-shrunk"],
        },
        aksesoris: {
          kancing: {
            bahan: "Genuine cowhide leather",
            finishing: "Natural tan",
            jahitan: "Cross-stitched reinforced",
          },
          benang: {
            tipe: "High-strength polyester",
            ketahanan: "Color-fast treatment",
            elastisitas: "Low stretch",
          },
        },
        sertifikasi: {
          eco: "Oeko-Tex® Standard 100",
          produksi: "ISO 14001:2015",
          sustainability: "Global Recycle Standard",
        },
      },
      ukuran: {
        tersedia: ["S", "M", "L", "XL"],
        panduan: {
          S: {
            lebarDada: "104cm",
            panjang: "68cm",
            lebarBahu: "44cm",
            panjangLengan: "24cm",
          },
          M: {
            lebarDada: "108cm",
            panjang: "70cm",
            lebarBahu: "46cm",
            panjangLengan: "25cm",
          },
          L: {
            lebarDada: "112cm",
            panjang: "72cm",
            lebarBahu: "48cm",
            panjangLengan: "26cm",
          },
          XL: {
            lebarDada: "116cm",
            panjang: "74cm",
            lebarBahu: "50cm",
            panjangLengan: "27cm",
          },
        },
        fit: "Regular fit with relaxed cut",
      },
      desain: {
        motif: {
          nama: "Tropical Paradise Series",
          inspirasi: "Indonesian coastal flora",
          skala: "Large-scale botanical print",
          placement: "All-over pattern",
        },
        warna: {
          pilihan: ["Putih", "Biru Muda", "Navy"],
          detail: {
            putih: {
              kode: "#FFFFFF",
              tone: "Bright white",
              substrate: "Pre-whitened fabric",
            },
            biruMuda: {
              kode: "#87CEEB",
              tone: "Soft sky blue",
              substrate: "Natural base",
            },
            navy: {
              kode: "#000080",
              tone: "Deep navy",
              substrate: "Natural base",
            },
          },
        },
        printing: {
          teknik: "Advanced Digital Printing",
          resolusi: "720 DPI",
          tinta: "Eco-friendly reactive dyes",
          ketahanan: "Colorfastness grade 4/5",
        },
      },
      konstruksi: {
        jahitan: {
          tipe: "Double stitch reinforced",
          kerapatan: "12 stitches per inch",
          lokasi: {
            krah: "Single-needle stitch",
            badan: "Double-needle stitch",
            kelim: "Blind stitch",
          },
        },
        detail: {
          krah: "Semi-spread collar",
          saku: "Single patch pocket",
          kelim: "Curved hem with side slits",
          manset: "Adjustable cuff buttons",
        },
        penyelesaian: {
          sambungan: "French seam",
          kelim: "Double-fold hem",
          lubangKancing: "Reinforced buttonholes",
        },
      },
      performa: {
        kenyamanan: {
          breathability: "5/5",
          moisture_wicking: "4/5",
          stretch: "3/5",
          weight: "Ultra-light",
        },
        durability: {
          washFastness: "4/5",
          tearStrength: "3/5",
          abrasionResistance: "3/5",
          colorFastness: "4/5",
        },
        proteksi: {
          uvProtection: "UPF 40+",
          moisture: "Quick-dry technology",
          odor: "Anti-bacterial treatment",
        },
      },
      perawatan: {
        mencuci: {
          metode: "Machine wash cold",
          deterjen: "Mild detergent",
          putaran: "Gentle cycle",
          larangan: ["No bleach", "No fabric softener"],
        },
        pengeringan: {
          metode: "Line dry in shade",
          posisi: "Hang on wooden hanger",
          larangan: ["No direct sunlight", "No dryer"],
        },
        penyetrikaan: {
          suhu: "Low temperature",
          teknik: "Iron inside out",
          uap: "Light steam only",
        },
        penyimpanan: {
          metode: "Hang on wooden hanger",
          lokasi: "Cool, dry place",
          tips: ["Avoid plastic covers", "Use cedar hangers"],
        },
      },
      produsen: {
        nama: "CV Tropical Fashion Indonesia",
        fasilitas: {
          produksi: "Bandung, Indonesia",
          kapasitas: "10,000 pcs/month",
          riset: "In-house design studio",
        },
        sertifikasi: ["ISO 9001:2015", "PROPER Biru", "Fair Trade Certified"],
        sustainability: {
          material: "30% recycled rayon",
          energi: "Solar-powered facility",
          waste: "Zero waste program",
        },
        garansi: {
          durasi: "30 hari",
          cakupan: [
            "Cacat produksi",
            "Masalah jahitan",
            "Kualitas printing",
            "Color bleeding",
          ],
          layanan: "Free repair service",
        },
      },
    },
    img: "img/kemeja-pantai.jpg",
    price: 125000,
    stock: 50,
  },
  {
    id: "celana-001",
    name: "Celana Pendek Chino",
    desc: "Celana pendek premium dengan bahan katun twill berkualitas tinggi untuk kenyamanan maksimal.",
    specs: {
      bahan: {
        komposisi: {
          katun: {
            jenis: "Premium Cotton Twill",
            persentase: "98%",
            karakteristik: ["Tenunan halus", "Breathable", "Tahan kusut"],
            gramasi: "280 GSM",
          },
          spandex: {
            jenis: "High-grade Elastane",
            persentase: "2%",
            karakteristik: [
              "4-way stretch",
              "Shape retention",
              "Wrinkle resistant",
            ],
          },
        },
        sertifikasi: {
          bahan: [
            "OEKO-TEX® Standard 100",
            "Better Cotton Initiative",
            "Sustainable Textile Production",
          ],
          pewarnaan: "AZO-free dyes",
        },
      },
      ukuran: {
        tersedia: ["28", "30", "32", "34", "36"],
        panduan: {
          28: {
            lingkarPinggang: "72cm",
            lingkarPaha: "56cm",
            panjang: "40cm",
          },
          30: {
            lingkarPinggang: "76cm",
            lingkarPaha: "58cm",
            panjang: "41cm",
          },
          32: {
            lingkarPinggang: "81cm",
            lingkarPaha: "60cm",
            panjang: "42cm",
          },
          34: {
            lingkarPinggang: "86cm",
            lingkarPaha: "62cm",
            panjang: "43cm",
          },
          36: {
            lingkarPinggang: "91cm",
            lingkarPaha: "64cm",
            panjang: "44cm",
          },
        },
        fit: "Regular fit with slight stretch",
      },
      warna: {
        pilihan: ["Khaki", "Olive", "Navy"],
        karakteristik: {
          khaki: {
            kode: "#D2B48C",
            inspirasi: "Classic British Khaki",
            ketahanan: "Color fastness grade 4/5",
          },
          olive: {
            kode: "#556B2F",
            inspirasi: "Military Olive",
            ketahanan: "Color fastness grade 4/5",
          },
          navy: {
            kode: "#000080",
            inspirasi: "Deep Ocean Blue",
            ketahanan: "Color fastness grade 4/5",
          },
        },
        perawatan: "Cold wash, no bleach",
      },
      konstruksi: {
        jahitan: {
          tipe: "Double needle stitching",
          kerapatan: "12 stitches per inch",
          benang: "Coats Epic Thread",
        },
        kantong: {
          depan: {
            tipe: "Slash pockets with coin pocket",
            kedalaman: "17cm",
            lining: "Cotton poplin",
          },
          belakang: {
            tipe: "Welt pockets",
            kedalaman: "15cm",
            penguat: "Bar tack reinforcement",
          },
        },
        zipper: {
          merk: "YKK Premium",
          tipe: "Antique brass finish",
          size: "#4.5 heavy-duty",
        },
        pinggang: {
          konstruksi: "Curtain waistband",
          penguat: "Inner gripper tape",
          kancing: "Branded tack button",
        },
      },
      fitur: {
        kenyamanan: [
          "Stretch waistband",
          "Breathable fabric",
          "Moisture-wicking",
          "Anti-bacterial treatment",
        ],
        durability: [
          "Reinforced stress points",
          "Anti-rip construction",
          "Colorfast dye process",
          "Quality control tested",
        ],
        praktis: [
          "Quick-dry technology",
          "Easy care fabric",
          "Wrinkle resistant",
          "Travel friendly",
        ],
      },
      perawatan: {
        mencuci: [
          "Cuci dengan air dingin",
          "Gunakan deterjen lembut",
          "Hindari pemutih",
          "Cuci terpisah pertama kali",
        ],
        pengeringan: [
          "Gantung kering",
          "Hindari sinar matahari langsung",
          "Jangan dikeringkan dengan mesin",
        ],
        penyetrikaan: {
          suhu: "Sedang (150°C max)",
          cara: "Setrika bagian dalam",
          tips: "Gunakan uap minimal",
        },
        penyimpanan: [
          "Gantung dengan hanger",
          "Hindari tempat lembab",
          "Gunakan cedar ball untuk proteksi",
        ],
      },
      produsen: {
        nama: "PT Garmen Sejahtera",
        fasilitas: {
          pabrik: "Bandung, Indonesia",
          kapasitas: "50,000 pcs/month",
          sertifikasi: [
            "ISO 9001:2015",
            "Fair Trade Certified",
            "WRAP Gold Certified",
          ],
        },
        sustainability: {
          program: [
            "Zero waste production",
            "Water recycling system",
            "Solar powered facility",
          ],
          community: [
            "Local employment program",
            "Skills development",
            "Fair wage policy",
          ],
        },
        qualityControl: {
          standar: ["AQL 2.5", "ISO 3758:2012"],
          testing: [
            "Shrinkage test",
            "Color fastness test",
            "Seam strength test",
            "Fabric durability test",
          ],
        },
      },
    },
    img: "img/celana-pendek.jpg",
    price: 90000,
    stock: 45,
  },
  {
    id: "laptop-001",
    name: "Laptop ProBook X15",
    desc: "Laptop bisnis performa tinggi dengan desain premium dan baterai tahan lama.",
    specs: {
      performa: {
        processor: {
          model: "Intel Core i7-12700H",
          cores: {
            total: "14 cores",
            performance: "6 P-cores up to 4.7GHz",
            efficient: "8 E-cores up to 3.5GHz",
            threads: "20 threads total",
          },
          speed: {
            base: "2.3GHz base frequency",
            turbo: "4.7GHz max turbo frequency",
            efficientBase: "1.7GHz E-core base",
          },
          cache: {
            smart: "24MB Intel Smart Cache",
            l2: "12MB L2 cache",
            tech: "Intel Cache Allocation Technology",
          },
          features: [
            "Intel Thread Director",
            "Intel Turbo Boost Max 3.0",
            "Intel Speed Shift",
            "Intel vPro Enterprise",
          ],
        },
        ram: {
          kapasitas: "16GB DDR4",
          config: {
            speed: "3200MHz",
            latency: "CL22",
            channels: "Dual Channel",
            modules: "2x 8GB SO-DIMM",
          },
          expandable: {
            maxCapacity: "64GB",
            slots: "2x SO-DIMM slots",
            supported: ["DDR4-3200", "DDR4-2933", "DDR4-2666"],
          },
          features: ["XMP Support", "ECC Support", "Dual Channel Architecture"],
        },
        storage: {
          primary: {
            capacity: "512GB NVMe PCIe Gen4 SSD",
            interface: "PCIe 4.0 x4",
            form: "M.2 2280",
            performance: {
              read: "7000 MB/s sequential",
              write: "5000 MB/s sequential",
              iops: "1M+ random read",
            },
          },
          expandable: {
            slots: [
              "1x M.2 2280 PCIe 4.0 x4",
              "1x M.2 2280/2230 (WWAN/Storage)",
            ],
            supported: ["PCIe 4.0 NVMe", "PCIe 3.0 NVMe", "SATA III M.2"],
          },
          features: [
            "Hardware encryption",
            "TRIM support",
            "S.M.A.R.T monitoring",
          ],
        },
        gpu: {
          integrated: {
            model: "Intel Iris Xe Graphics",
            cores: "96 Execution Units",
            clock: "Up to 1.45 GHz",
            features: [
              "Intel Quick Sync Video",
              "OpenCL 3.0",
              "DirectX 12.1",
              "Variable Rate Shading",
            ],
          },
          memory: {
            type: "Shared system memory",
            allocation: "Dynamic up to 8GB",
            bandwidth: "51.2 GB/s",
          },
          display: {
            maxRes: "8K @ 60Hz",
            multiDisplay: "Up to 4 displays",
            hdr: "HDR10 support",
          },
        },
        benchmarks: {
          pcmark10: {
            overall: "5,965 points",
            productivity: "9,451 points",
            digital: "6,234 points",
          },
          cinebench: {
            single: "1,876 points",
            multi: "14,589 points",
          },
          mark3d: {
            timespy: "1,850 points",
            firestrike: "4,890 points",
          },
        },
        thermal: {
          design: "Advanced Thermal Architecture 2.0",
          tdp: {
            base: "45W",
            boost: "Up to 115W",
            sustained: "65W",
          },
          cooling: {
            fans: "Dual high-capacity fans",
            heatpipes: "Triple copper heat pipes",
            modes: ["Performance", "Balanced", "Quiet"],
          },
        },
      },
      display: {
        panel: {
          tipe: '15.6" IPS Technology',
          resolusi: "1920 x 1080 Full HD",
          rasio: "16:9 aspect ratio",
          refresh: "144Hz refresh rate",
        },
        kualitas: {
          color: {
            gamut: "100% sRGB color space",
            depth: "8-bit (16.7M colors)",
            delta: "Delta E < 2",
            accuracy: "Factory calibrated",
          },
          brightness: {
            typical: "300 nits",
            peak: "400 nits HDR",
            contrast: "1000:1 static",
            black: "0.2 nits black level",
          },
        },
        proteksi: {
          eyecare: {
            bluelight: "TÜV Rheinland certified",
            flicker: "DC dimming",
            modes: ["Reading Mode", "Night Light", "Eye Comfort"],
          },
          surface: {
            coating: "Anti-glare matte finish",
            hardness: "3H surface hardness",
            treatment: "Anti-fingerprint",
          },
        },
        teknologi: {
          adaptive: "AMD FreeSync support",
          hdr: "HDR10 certified",
          scaling: "Smart Resolution Upscaling",
          features: [
            "Dynamic Contrast",
            "Black Frame Insertion",
            "Local Dimming Zones",
          ],
        },
      },
      konektivitas: {
        wireless: {
          wifi: {
            standar: "Wi-Fi 6E (802.11ax)",
            band: ["2.4GHz", "5GHz", "6GHz"],
            features: ["MU-MIMO", "160MHz channels", "WPA3 security"],
            speed: "Up to 2.4 Gbps",
          },
          bluetooth: {
            version: "Bluetooth 5.2",
            range: "Up to 30m",
            profiles: ["A2DP", "AVRCP", "HFP", "HSP"],
            features: ["LE Audio", "Dual Mode", "Adaptive Frequency Hopping"],
          },
        },
        ports: {
          thunderbolt: {
            count: "2x Thunderbolt 4",
            specs: {
              speed: "40 Gbps",
              power: "Up to 100W PD",
              display: "8K @ 60Hz",
            },
            features: ["DisplayPort 1.4", "PCIe 3.0 x4", "USB4 compatible"],
          },
          usb: {
            count: "2x USB 3.2 Gen 2",
            specs: {
              speed: "10 Gbps",
              power: "Up to 7.5W",
            },
            features: [
              "Always-On charging",
              "USB-C compatible",
              "Quick Charge 4+",
            ],
          },
          video: {
            hdmi: {
              version: "HDMI 2.0b",
              resolution: "4K @ 60Hz",
              features: ["HDCP 2.2", "HDR support", "CEC"],
            },
          },
          audio: {
            jack: "3.5mm combo audio",
            features: [
              "Hi-Res Audio certified",
              "DTS:X Ultra",
              "Smart Amp technology",
            ],
          },
        },
        security: {
          physical: [
            "Kensington lock slot",
            "Firmware TPM 2.0",
            "Camera privacy shutter",
          ],
          wireless: ["Intel vPro", "Wi-Fi 6 security", "Bluetooth encryption"],
        },
      },
      baterai: {
        spesifikasi: {
          tipe: "6-cell Li-ion Polymer",
          kapasitas: "65Wh rated capacity",
          teknologi: "Smart Battery 5.0",
          siklus: "Up to 1000 charge cycles",
        },
        performa: {
          durasi: {
            normal: "Up to 12 hours web browsing",
            ekstensif: "Up to 8 hours heavy use",
            standby: "Up to 30 days",
          },
          konsumsi: {
            idle: "3.5W - 5W",
            normal: "15W - 25W",
            peak: "Up to 115W",
          },
        },
        charging: {
          adapter: {
            daya: "65W USB-C Power Delivery",
            input: "100-240V, 50/60Hz universal",
            output: "20V/3.25A, 15V/3A, 9V/3A, 5V/3A",
          },
          fitur: {
            fastCharge: "0-50% in 30 minutes",
            powerBank: "5V/1.5A USB-A reverse charging",
            protection: [
              "Overcharge protection",
              "Temperature monitoring",
              "Current limitation",
            ],
          },
          compatibility: [
            "USB-PD 3.0",
            "Thunderbolt 4 charging",
            "Quick Charge 4+",
          ],
        },
        manajemen: {
          mode: ["Battery saver", "Balanced", "Best performance"],
          fitur: [
            "Adaptive battery optimization",
            "Charge threshold setting",
            "Battery health monitoring",
          ],
        },
      },
      sistem: {
        os: {
          nama: "Windows 11 Pro 64-bit",
          lisensi: "Genuine Microsoft License",
          bahasa: ["Multi-language support", "Windows Display Languages"],
          update: "Windows Update for Business",
        },
        security: {
          hardware: {
            tpm: "TPM 2.0 chip",
            fingerprint: "Match-in-Sensor™ fingerprint reader",
            camera: "IR Camera with Windows Hello",
            secure_boot: "UEFI Secure Boot",
          },
          software: {
            antivirus: "Windows Defender ATP",
            firewall: "Windows Advanced Firewall",
            encryption: "BitLocker Drive Encryption",
          },
          enterprise: {
            management: "Microsoft Endpoint Manager",
            protection: "Windows Information Protection",
            recovery: "Advanced System Recovery",
          },
        },
        productivity: {
          office: "Microsoft 365 Apps ready",
          backup: "OneDrive for Business",
          collaboration: "Microsoft Teams optimized",
        },
      },
      fisik: {
        dimensi: {
          pxlxt: "359 x 233 x 19.9 mm",
          footprint: "83,647 mm² desk space",
          volume: "1.67 liters",
        },
        berat: {
          unit: "1.7 kg",
          charger: "280g",
          total: "1.98 kg travel weight",
        },
        material: {
          chassis: {
            bahan: "Aircraft-grade aluminum alloy",
            finish: "Sandblasted anodized surface",
            coating: "Fingerprint-resistant",
          },
          display: {
            cover: "Aluminum lid",
            hinge: "Dual torque hinge system",
            bezel: "Slim 4.9mm side bezels",
          },
        },
        keyboard: {
          tipe: "Premium chiclet keyboard",
          fitur: {
            backlight: "3-level white backlight",
            travel: "1.5mm key travel",
            layout: "Full-size with numpad",
          },
          protection: {
            spill: "Spill-resistant up to 330ml",
            durability: "10 million keystroke lifecycle",
            coating: "UV-cured protective coating",
          },
        },
        touchpad: {
          surface: "Precision glass surface",
          size: "120 x 80 mm active area",
          features: [
            "Windows Precision drivers",
            "Multi-touch gestures",
            "Palm rejection technology",
          ],
        },
        cooling: {
          design: "Ergolift hinge design",
          airflow: "360° wraparound intake",
          noise: "Sub 40dB under load",
        },
      },
      garansi: {
        coverage: {
          durasi: "2 tahun hardware warranty",
          tipe: "International warranty service",
          level: "Premium Support Plus",
        },
        layanan: {
          onsite: "Next business day service",
          pickup: "Free pickup and return",
          remote: "24/7 technical support",
        },
        protection: {
          accidental: "1-year accidental damage",
          battery: "1-year battery warranty",
          screen: "Zero bright dot guarantee",
        },
        tambahan: {
          extension: "Optional up to 5 years",
          coverage: [
            "Parts and labor",
            "Battery replacement program",
            "Data recovery service",
          ],
        },
      },
      produsen: {
        info: {
          nama: "TechPro International",
          origin: "Taiwan",
          didirikan: "1989",
        },
        fasilitas: {
          manufaktur: "ISO 9001:2015 certified",
          rnd: "Global R&D centers",
          service: "Worldwide service network",
        },
        sertifikasi: {
          environment: ["Energy Star 8.0", "EPEAT Gold", "TCO Certified"],
          durability: [
            "MIL-STD-810H tested",
            "IEC 60529 IPX4",
            "ASTM D4169-16",
          ],
          eco: [
            "RoHS compliant",
            "Carbon neutral certified",
            "Sustainable packaging",
          ],
        },
        penghargaan: [
          "IF Design Award 2025",
          "Red Dot Design Award 2025",
          "CES Innovation Award 2025",
        ],
      },
    },
    img: "img/laptop-probook.jpg",
    price: 12499000,
    stock: 10,
  },
  {
    id: "skincare-001",
    name: "Serum Vitamin C Advanced Formula",
    desc: "Serum wajah inovatif dengan 20% Pure L-Ascorbic Acid dan Multi-Molecular Weight Hyaluronic Acid dalam formula stabil dan teruji klinis.",
    specs: {
      kandungan: {
        aktif: {
          "Vitamin C": {
            tipe: "Pure L-Ascorbic Acid (LAA)",
            spesifikasi: {
              konsentrasi: "20% w/v",
              pH: "3.2 ± 0.2",
              stabilitas: "12 months shelf life",
              purity: ">99.9% pharmaceutical grade",
            },
            teknologi: {
              stabilisasi: "Ferulic Complex Technology",
              enkapsulasi: "Liposomal delivery system",
              formulasi: "Oil-free, water-based solution",
            },
            manfaat: [
              "Advanced skin brightening",
              "Potent antioxidant protection",
              "Collagen synthesis boost",
              "Melanin inhibition",
              "Free radical neutralization",
            ],
            riset: {
              uji_klinis: "Dermatologically tested",
              hasil: [
                "27% brighter skin in 4 weeks",
                "32% reduction in dark spots",
                "45% improvement in skin texture",
              ],
            },
          },
          "Hyaluronic Acid": {
            tipe: "Multi-Molecular Weight Complex",
            spesifikasi: {
              konsentrasi: {
                total: "2% pure HA blend",
                low: "0.8% (50-100 kDa)",
                medium: "0.7% (100-500 kDa)",
                high: "0.5% (1000-1800 kDa)",
              },
              source: "Bio-fermentation derived",
              purity: "Pharmaceutical grade",
            },
            teknologi: {
              delivery: "Triple-layer penetration",
              stabilitas: "Cross-linked structure",
              sinergis: "HA-Vitamin C complex",
            },
            manfaat: [
              "Deep hydration to all skin layers",
              "Enhanced moisture retention",
              "Improved skin elasticity",
              "Strengthened skin barrier",
              "Reduced fine lines appearance",
            ],
            riset: {
              clinical_study: "8-week dermatological study",
              results: [
                "91% improved hydration",
                "87% increased elasticity",
                "84% smoother texture",
              ],
            },
          },
          Niacinamide: {
            spesifikasi: {
              tipe: "Pure Vitamin B3",
              konsentrasi: "5% w/v optimal strength",
              grade: "USP grade >99.8% pure",
              solubility: "Water-soluble form",
            },
            teknologi: {
              delivery: "Nano-encapsulation",
              release: "Time-released formula",
              stability: "Light and heat stable",
            },
            manfaat: [
              "Pore size reduction",
              "Sebum regulation",
              "Anti-inflammatory action",
              "Barrier function support",
              "Even skin tone promotion",
            ],
            riset: {
              studies: "Multiple clinical trials",
              results: [
                "35% reduction in pore size",
                "40% decrease in sebum",
                "28% improvement in barrier",
              ],
            },
          },
        },
        basis: {
          carrier: {
            primary: "Pharmaceutical grade water",
            process: "Triple-filtered deionized",
            quality: "Ultra-pure (18.2 MΩ.cm)",
          },
          preservatives: {
            system: "Eco-cert approved blend",
            components: {
              primary: "Phenoxyethanol (0.5%)",
              secondary: "Ethylhexylglycerin (0.1%)",
              natural: "Radish root ferment",
            },
            efficacy: "Broad spectrum protection",
          },
          stabilizers: {
            pH: "Natural buffer system",
            antioxidant: "Ferulic acid complex",
            chelating: "Disodium EDTA (0.1%)",
          },
        },
      },
      formulasi: {
        karakteristik: {
          tekstur: "Ultra-lightweight gel-serum",
          absorption: "Rapid penetration (<30 sec)",
          finish: "Non-sticky, matte finish",
          appearance: "Crystal clear, slight golden tint",
        },
        parameters: {
          pH: "3.5 ± 0.2 (optimal stability)",
          viscosity: "3,000-4,000 cPs",
          density: "1.02-1.04 g/ml",
          osmolality: "290-310 mOsm/kg",
        },
        sensorial: {
          aroma: "Fragrance-free formula",
          feel: "Cooling and refreshing",
          residue: "Non-tacky, no residue",
        },
      },
      kemasan: {
        primary: {
          type: "Advanced airless pump system",
          volume: "30ml precision dosage",
          material: "UV-protected violet glass",
          features: [
            "Zero contamination risk",
            "Full product dispensing",
            "Calibrated 0.3ml per pump",
          ],
        },
        protection: {
          light: "99.9% UV protection",
          oxygen: "Airless technology",
          contamination: "One-way valve system",
        },
        design: {
          aesthetics: "Premium minimalist",
          ergonomics: "Easy one-hand use",
          sustainability: "100% recyclable",
        },
      },
      penyimpanan: {
        conditions: {
          temperature: "15-25°C controlled",
          humidity: "<60% relative humidity",
          light: "Protected from direct light",
        },
        shelf_life: {
          unopened: "24 months from manufacture",
          after_opening: "6 months",
          stability: "Tested at various conditions",
        },
        monitoring: {
          indicators: ["Time-temperature", "Freshness seal"],
          tracking: "Batch-specific QR code",
          guidelines: "Storage instruction card",
        },
      },
      penggunaan: {
        protocol: {
          frequency: ["Morning", "Evening"],
          optimal_time: "After cleansing, before moisturizer",
          amount: "2-3 pumps (approximately 0.6-0.9ml)",
        },
        steps: {
          preparation: "Cleanse and tone skin thoroughly",
          application: "Apply to slightly damp skin",
          technique: "Gentle patting motion",
          wait_time: "60-90 seconds absorption",
          follow_up: "Continue with moisturizer",
        },
        precautions: [
          "Perform 48-hour patch test",
          "Avoid direct eye contact",
          "Start with alternate day use",
          "Use sunscreen during day",
          "Stop if irritation occurs",
        ],
        optimization: {
          layering: {
            before: ["Cleanser", "Toner", "Essence"],
            after: ["Moisturizer", "Sunscreen"],
            avoid: ["Direct acids", "Pure retinol"],
          },
          timing: {
            morning: "Optional, with sunscreen",
            evening: "Recommended primary use",
            frequency: "1-2 times daily",
          },
        },
      },
      regulasi: {
        registration: {
          bpom: "NA18200900123",
          license: "Cosmetic Product Notification",
          market: ["Indonesia", "ASEAN Market"],
        },
        sertifikasi: {
          halal: {
            id: "MUI 00120089121122",
            scope: "Full production process",
            validity: "2 years certification",
          },
          gmp: {
            standard: "ISO 22716:2007 GMP",
            audit: "Annual certification",
            rating: "A+ Classification",
          },
          quality: {
            iso: "ISO 9001:2015 QMS",
            audit: "Semi-annual surveillance",
            scope: "Full operation coverage",
          },
        },
      },
      produsen: {
        company: {
          name: "PT Kosmetik Sehat Indonesia",
          establishment: "Since 1995",
          specialization: "Advanced skincare formulation",
        },
        facilities: {
          manufacturing: {
            location: "Tangerang, Indonesia",
            area: "15,000 sqm facility",
            capacity: "1M units monthly",
          },
          laboratory: {
            location: "Jakarta, Indonesia",
            type: "ISO/IEC 17025 accredited",
            capabilities: [
              "Formula development",
              "Stability testing",
              "Microbiological analysis",
            ],
          },
        },
        certifications: {
          quality: [
            "CPKB (Cara Pembuatan Kosmetik yang Baik)",
            "ISO 9001:2015 QMS",
            "Halal Assurance System",
          ],
          environmental: [
            "ISO 14001:2015 EMS",
            "Green Industry Level 5",
            "Zero Waste to Landfill",
          ],
        },
        infrastructure: {
          production: {
            environment: "ISO Class 7 clean room",
            monitoring: "Real-time particulate control",
            automation: "Semi-automated processes",
          },
          quality: {
            lab: "State-of-the-art testing facility",
            equipment: "Latest analytical instruments",
            systems: "LIMS integration",
          },
          research: {
            center: "Advanced R&D facility",
            collaboration: "University partnerships",
            focus: "Next-gen formulation tech",
          },
        },
      },
    },
    img: "img/serum-vitc.jpg",
    price: 189000,
    stock: 100,
  },
  {
    id: "sandal-001",
    name: "Sandal Gunung Pro X-Terrain",
    desc: "Sandal outdoor profesional dengan teknologi X-Terrain Grip System dan konstruksi material premium untuk performa maksimal di segala medan.",
    specs: {
      material: {
        upper: {
          utama: {
            bahan: {
              tipe: "Military-grade Cordura® Polyester",
              spesifikasi: {
                denier: "1000D high tensile",
                konstruksi: "Ripstop weave pattern",
                ketebalan: "2.5mm reinforced",
                coating: "DWR (Durable Water Repellent)",
              },
              performance: {
                abrasi: "10,000+ Martindale cycles",
                waterproof: "5,000mm hydrostatic head",
                breathability: "3,000g/m²/24h",
                uv_protection: "UPF 50+",
              },
            },
            treatment: {
              primary: "3-layer protective coating",
              layers: [
                "DWR outer layer",
                "Microporous waterproof membrane",
                "Moisture-wicking inner treatment",
              ],
              durability: "Maintains performance after 100 washes",
            },
          },
          tali: {
            konstruksi: {
              material: "Ballistic Nylon 1680D",
              struktur: "Tubular webbing construction",
              lebar: "25mm load-optimized width",
              tensile: "250kg breaking strength",
            },
            hardware: {
              buckle: {
                material: "7075-T6 aircraft aluminum",
                treatment: "Hard-anodized finish",
                mechanism: "Quick-adjust auto-lock",
                testing: "10,000 cycle durability",
              },
              adjustment: {
                system: "Micro-adjustment points",
                range: "15cm total adjustment",
                increment: "2mm precision steps",
              },
            },
            reinforcement: {
              stress_points: "Double-layer reinforcement",
              stitching: "Bar-tack reinforcement",
              edge: "Heat-sealed edges",
            },
          },
        },
        sole: {
          outsole: {
            compound: {
              material: "Carbon-infused rubber compound",
              hardness: "65-70 Shore A optimal grip",
              rebound: "65% energy return",
              wear_rate: "<120mm³ abrasion loss",
            },
            design: {
              pattern: "X-Terrain multi-directional grip",
              depth: "4.5mm lug depth",
              coverage: "85% contact surface",
              channels: "Self-cleaning water dispersion",
            },
            performance: {
              grip_rating: {
                wet: "Class A (EN 13287)",
                dry: "Class A+ (EN 13287)",
                rocky: "Level 4 ASTM F1677",
                muddy: "Level 3 ASTM F1677",
              },
              durability: {
                lifespan: "1000km under normal use",
                warranty: "6-month outsole warranty",
              },
            },
          },
          midsole: {
            technology: {
              material: "Compression-molded EVA",
              density: "55C durometer rating",
              structure: "Dual-density construction",
              cushioning: "Impact Cushioning System 2.0",
            },
            performance: {
              compression: "15% after 1000km use",
              rebound: "55% energy return",
              shock_absorption: "30% impact reduction",
              stability: "Enhanced lateral support",
            },
            features: {
              arch_support: "Anatomically contoured",
              heel_cup: "Deep heel centering",
              transition: "Rockered geometry",
              flexibility: "Flex grooves alignment",
            },
          },
          insole: {
            construction: {
              material: "Dual-layer PU foam",
              top_layer: "Memory foam comfort",
              bottom_layer: "Support foam base",
              thickness: "6mm total stack height",
            },
            technology: {
              moisture: "37.5® moisture management",
              antimicrobial: "Polygiene® treatment",
              ventilation: "Perforated structure",
            },
            features: {
              removable: true,
              washable: "Machine washable 30°C",
              replacement: "Replaceable design",
            },
          },
        },
      },
      sizing: {
        range: {
          available: ["39", "40", "41", "42", "43", "44"],
          development: ["37-38", "45-46"], // Coming soon
        },
        measurements: {
          length: {
            39: { length: "25.0 cm", width: "9.8 cm" },
            40: { length: "25.7 cm", width: "10.0 cm" },
            41: { length: "26.3 cm", width: "10.2 cm" },
            42: { length: "27.0 cm", width: "10.4 cm" },
            43: { length: "27.6 cm", width: "10.6 cm" },
            44: { length: "28.3 cm", width: "10.8 cm" },
          },
          fit_guide: {
            width: "Regular to Wide",
            arch: "Medium to High",
            volume: "Adjustable volume",
          },
        },
        adjustment: {
          system: "Tri-point adjustment",
          zones: ["Forefoot", "Midfoot", "Heel"],
          range: "Up to 2cm per zone",
        },
        recommendations: {
          sizing: "True to size",
          socks: "Compatible with technical socks",
          break_in: "Minimal break-in required",
        },
      },
      aesthetics: {
        colorways: {
          "Phantom Black": {
            upper: "Stealth black webbing",
            accents: "Gunmetal hardware",
            sole: "Dark granite outsole",
          },
          "Tactical Olive": {
            upper: "Military olive webbing",
            accents: "Matte black hardware",
            sole: "Earth tone outsole",
          },
        },
        treatment: {
          colorfastness: {
            uv_rating: "Grade 7-8 (ISO 105-B02)",
            wash_fastness: "Grade 5 (ISO 105-C06)",
            rub_resistance: "Dry: 4-5, Wet: 4 (ISO 105-X12)",
          },
          finish: {
            webbing: "Matte tactical finish",
            hardware: "Anti-glare coating",
            sole: "Semi-gloss with grip texture",
          },
        },
        details: {
          branding: "Subtle tonal logos",
          stitching: "Precision contrast detail",
          reflective: "Strategic 3M™ elements",
        },
      },
      performance: {
        traction: {
          grip_system: {
            technology: "X-Terrain Grip Architecture",
            patterns: [
              "Multi-vector lug geometry",
              "Variable depth treads",
              "Climbing zone at toe",
              "Braking zone at heel",
            ],
            surfaces: {
              wet_rock: {
                rating: "4.8/5",
                certification: "Class A (EN 13287)",
                test_condition: "Wet granite surface",
              },
              dry_rock: {
                rating: "5/5",
                certification: "Class A+ (EN 13287)",
                test_condition: "Sandstone surface",
              },
              mud_trail: {
                rating: "4.2/5",
                certification: "Level 4 ASTM F1677",
                test_condition: "Clay-based mud",
              },
              sand_desert: {
                rating: "4.7/5",
                certification: "Level 4 ASTM F1677",
                test_condition: "Fine grain sand",
              },
            },
          },
          self_cleaning: {
            channels: "Optimized flow geometry",
            efficiency: "95% debris ejection",
            time: "<3 steps to clear",
          },
        },
        durability: {
          testing: {
            distance: {
              trail_test: "500km cumulative",
              impact_test: "10,000 cycles",
              flex_test: "100,000 cycles",
            },
            environmental: {
              uv_exposure: "1000 hours QUV",
              water_immersion: "100 hours continuous",
              temperature: "-20°C to +50°C",
            },
            stress: {
              tensile: "2000N vertical force",
              lateral: "1000N side force",
              torsion: "80° twist resistance",
            },
          },
          lifespan: {
            average: "2000-2500km normal use",
            intensive: "1000-1200km hardcore use",
            casual: "3+ years recreational use",
          },
          maintenance: {
            cleaning: "Machine washable 30°C",
            drying: "Air dry away from heat",
            inspection: "500km check recommended",
          },
        },
      },
      ergonomics: {
        comfort: {
          system: {
            name: "AdaptFit Comfort System",
            components: [
              "Anatomical strap placement",
              "Zero pressure points",
              "Dynamic flex zones",
              "Moisture management",
            ],
          },
          ventilation: {
            design: "Cross-flow air channels",
            coverage: "80% surface ventilation",
            drying: "Under 2 hours to dry",
          },
          biomechanics: {
            gait: "Natural stride support",
            balance: "Center-weighted design",
            energy: "60% energy return",
          },
        },
        protection: {
          safety: {
            features: [
              "Impact protection zones",
              "Anti-twist stability",
              "Toe protection ridge",
              "Heel strike cushioning",
            ],
            standards: {
              slip: "EN ISO 20347:2012",
              impact: "ASTM F2413-18",
              puncture: "EN 12568:2010",
            },
          },
          visibility: {
            reflective: "360° reflective elements",
            placement: "Strategic motion zones",
            area: "15cm² total reflective",
          },
        },
        usability: {
          features: {
            entry: "Single-pull quick entry",
            adjustment: "One-handed strap system",
            cleaning: "Self-draining design",
            transport: "Compact fold design",
          },
          accessibility: {
            handedness: "Ambidextrous design",
            dexterity: "Large pull tabs",
            visual: "High contrast markers",
          },
        },
      },
      warranty: {
        coverage: {
          duration: {
            standard: "2-year limited warranty",
            extended: "Optional 3-year coverage",
            commercial: "1-year intensive use",
          },
          protection: {
            manufacturing: [
              "Material defects",
              "Construction flaws",
              "Component failure",
              "Finish deterioration",
            ],
            specific: {
              sole: {
                separation: "Full coverage",
                wear: "First 1000km",
                grip: "6-month performance",
              },
              straps: {
                integrity: "Full term coverage",
                buckles: "Lifetime warranty",
                adjustment: "Full mechanism coverage",
              },
            },
          },
        },
        service: {
          support: {
            guarantee: "30-day satisfaction guarantee",
            return: "No-questions-asked policy",
            shipping: "Free two-way shipping",
          },
          maintenance: {
            program: "Free annual service check",
            cleaning: "Complimentary deep clean",
            assessment: "Wear pattern analysis",
          },
        },
      },
      manufacturer: {
        company: {
          name: "PT Sepatu Gunung Sejati",
          founded: "1985",
          expertise: "Technical outdoor footwear",
          markets: ["Southeast Asia", "Pacific", "Europe"],
        },
        facilities: {
          production: {
            location: "Bandung, Indonesia",
            capacity: "100,000 pairs annually",
            area: "15,000 sqm facility",
          },
          development: {
            rnd: {
              location: "Singapore Design Center",
              focus: "Innovation & prototyping",
              team: "25+ footwear engineers",
            },
            testing: {
              lab: "Outdoor Performance Lab",
              capabilities: [
                "Material strength testing",
                "Wear simulation",
                "Environmental chamber",
                "Biomechanical analysis",
              ],
            },
          },
        },
        certifications: {
          quality: {
            iso: {
              standard: "ISO 9001:2015",
              scope: "Full production system",
              audit: "Bi-annual certification",
            },
            materials: {
              bluesign: "Bluesign® System Partner",
              oeko_tex: "Standard 100 certified",
            },
          },
          sustainability: {
            environmental: {
              iso: "ISO 14001:2015",
              energy: "ISO 50001:2018",
              water: "AWS Standard 2.0",
            },
            social: {
              fair_trade: "Fair Trade Certified™",
              bsci: "BSCI compliance",
              workplace: "SA8000 certified",
            },
          },
        },
        sustainability: {
          materials: {
            recycled: {
              percentage: "45% recycled content",
              components: [
                "Webbing from PET bottles",
                "EVA with recycled content",
                "Recycled packaging",
              ],
            },
            responsible: {
              leather: "LWG Gold rated",
              synthetics: "Bluesign® approved",
              packaging: "FSC certified",
            },
          },
          initiatives: {
            environmental: {
              carbon: "Carbon neutral operations",
              water: "Zero liquid discharge",
              waste: "Zero waste to landfill",
            },
            social: {
              community: "Local employment program",
              education: "Technical training center",
              healthcare: "Worker wellness program",
            },
          },
          reporting: {
            transparency: "Annual sustainability report",
            metrics: ["Carbon footprint", "Water usage", "Waste reduction"],
            goals: "Science-based targets 2030",
          },
        },
      },
    },
    img: "img/sandal-gunung.jpg",
    price: 175000,
    stock: 30,
  },
  {
    id: "smartphone-001",
    name: "TechPro X12 5G",
    desc: "Smartphone premium dengan teknologi 5G dan kamera profesional.",
    specs: {
      performa: {
        processor: {
          chipset: {
            model: "Snapdragon 8 Gen 3",
            cpu: {
              cores: "1x 3.3 GHz + 3x 3.0 GHz + 4x 2.5 GHz",
              architecture: "ARMv9, 4nm process",
              features: ["AI Engine", "Elite Gaming"],
            },
            gpu: {
              model: "Adreno 750",
              features: ["Ray tracing", "Variable rate shading"],
            },
          },
          cooling: {
            system: "Vapor Chamber Cooling",
            material: "Graphene sheets",
            sensors: "12 temperature sensors",
          },
        },
        memory: {
          ram: {
            size: "12GB LPDDR5X",
            speed: "8400 MHz",
            channels: "Quad-channel",
            expansion: "7GB virtual RAM",
          },
          storage: {
            capacity: "256GB UFS 4.0",
            speed: "Read 2900MB/s, Write 1200MB/s",
            features: ["F2FS filesystem", "Host Performance Booster"],
          },
        },
      },
      display: {
        panel: {
          type: "LTPO4 AMOLED",
          size: '6.7" diagonal',
          resolution: "3200 x 1440 pixels",
          density: "526 ppi",
        },
        features: {
          refresh: "1-120Hz adaptive",
          touch: "1000Hz touch sampling",
          brightness: {
            peak: "2400 nits peak",
            typical: "1200 nits",
            hdr: "HDR10+ certified",
          },
          protection: {
            glass: "Gorilla Glass Victus 2",
            coating: "Oleophobic coating",
            features: ["Anti-fingerprint", "Anti-reflective"],
          },
        },
        color: {
          gamut: "100% DCI-P3",
          depth: "10-bit (1.07B colors)",
          accuracy: "JNCD < 0.4",
          modes: ["Natural", "Vivid", "Pro", "Cinema"],
        },
      },
      kamera: {
        primary: {
          sensor: {
            model: "Sony IMX989 1-inch type",
            resolution: "50MP",
            size: "1/1.12-inch",
            pixel: "1.6μm native, 3.2μm binned",
          },
          lens: {
            aperture: "f/1.8",
            fov: "23mm equivalent",
            stabilization: "OIS + EIS",
          },
          features: [
            "All-pixel Omnidirectional PDAF",
            "Laser AF",
            "HDR10+ video",
            "8K@24fps recording",
          ],
        },
        ultrawide: {
          sensor: "48MP IMX858",
          lens: "f/2.2, 13mm equivalent",
          fov: "120° field of view",
        },
        telephoto: {
          sensor: "48MP IMX858",
          lens: "f/2.8, 120mm equivalent",
          zoom: "5x optical, 120x Space Zoom",
        },
        selfie: {
          sensor: "32MP IMX709",
          features: ["Autofocus", "4K video", "Night mode"],
        },
        software: {
          modes: ["Pro mode", "Night mode 2.0", "Portrait mode", "8K video"],
          ai: [
            "Scene optimization",
            "Real-time object tracking",
            "Neural processing",
          ],
        },
      },
      baterai: {
        specs: {
          capacity: "5000mAh dual-cell",
          type: "Li-Polymer",
          technology: "Smart charging 2.0",
        },
        charging: {
          wired: "120W HyperCharge",
          wireless: "50W wireless charging",
          reverse: "10W reverse wireless",
        },
        durasi: {
          standar: "Up to 2 days",
          gaming: "8 hours continuous",
          video: "22 hours playback",
        },
        protection: [
          "Charge cycle optimization",
          "Temperature monitoring",
          "Smart charging control",
        ],
      },
      konektivitas: {
        cellular: {
          "5g": ["Sub-6GHz", "mmWave", "SA/NSA"],
          "4g": "LTE Cat.20",
          dual_sim: "Dual 5G standby",
        },
        wireless: {
          wifi: "Wi-Fi 7, 2x2 MIMO",
          bluetooth: "Bluetooth 5.3",
          nfc: "Yes, with eSE",
        },
        positioning: ["GPS (L1+L5)", "GLONASS", "BeiDou", "Galileo"],
        ports: {
          usb: "USB-C 3.2 Gen 2",
          features: ["DisplayPort 1.4", "PD 3.0"],
        },
      },
      security: {
        biometric: {
          fingerprint: "Under-display ultrasonic",
          facial: "3D face recognition",
        },
        hardware: {
          tee: "Trusted Execution Environment",
          secure: "Security chip 2.0",
        },
      },
      konstruksi: {
        material: {
          frame: "Aluminum alloy grade 7000",
          back: "Gorilla Glass Victus 2",
          finish: "Nano-ceramic coating",
        },
        durability: {
          rating: "IP68 water/dust",
          test: "1.5m water for 30 mins",
        },
        dimensi: {
          size: "163.7 x 74.9 x 8.2 mm",
          weight: "198g",
        },
      },
      software: {
        os: {
          version: "Android 14",
          ui: "TechUI 15.0",
          updates: "3 years OS, 4 years security",
        },
        features: {
          ai: ["AI Assistant", "Smart Scenes"],
          privacy: ["Privacy Dashboard", "Permissions manager"],
          productivity: ["Desktop Mode", "Multi-window 3.0"],
        },
      },
      sensors: [
        "Accelerometer",
        "Gyroscope",
        "Proximity",
        "Compass",
        "Color temperature",
        "Barometer",
      ],
      box_contents: [
        "TechPro X12 5G",
        "120W GaN charger",
        "USB-C cable",
        "SIM ejector",
        "Clear case",
        "User guide",
      ],
    },
    img: "img/smartphone-x12.jpg",
    price: 12999000,
    stock: 15,
  },
  {
    id: "smartwatch-001",
    name: "SmartWatch X2 Pro",
    desc: "Smartwatch dengan fitur lengkap untuk gaya hidup aktif dan sehat.",
    specs: {
      display: {
        panel: {
          type: '1.4" AMOLED',
          resolution: "454 x 454 pixels",
          density: "326 PPI",
          technology: "LTPO 2.0",
        },
        performance: {
          refresh: "1-60Hz adaptive",
          touch: "360Hz touch sampling",
          brightness: {
            peak: "700 nits",
            auto: "Ambient light sensor",
            modes: ["Auto", "Manual", "Ultra-dim"],
          },
        },
        protection: {
          glass: "Corning Gorilla Glass 3",
          coating: {
            oleophobic: "Anti-fingerprint",
            antiglare: "Reduced reflections",
          },
          bezel: "Ceramic bezel ring",
        },
        features: {
          aod: {
            type: "Always-on display",
            customization: ["Watch faces", "Complications"],
            power: "Ultra-low power mode",
          },
          color: {
            gamut: "DCI-P3 wide color",
            depth: "16M colors",
            modes: ["Vivid", "Natural", "Custom"],
          },
        },
      },
      performa: {
        processor: {
          chip: "Qualcomm SW5100",
          architecture: {
            cores: "Dual-core 1.2 GHz",
            gpu: "Adreno 5xx series",
            coprocessor: "Ultra-low power AON",
          },
          features: [
            "14nm process",
            "Advanced power management",
            "ML acceleration",
          ],
        },
        memory: {
          ram: {
            size: "1GB LPDDR4",
            features: ["Low power states", "Quick wake"],
          },
          storage: {
            capacity: "8GB eMMC",
            available: "~4GB user available",
            expansion: "No expandable storage",
          },
        },
        os: {
          system: "WearOS 3.0",
          features: ["Google Services", "Play Store access", "Voice commands"],
          updates: "Guaranteed 2 years OS updates",
        },
        optimization: {
          power: ["Dynamic frequency", "Core switching"],
          performance: ["App preloading", "Memory compression"],
          thermal: ["Active thermal management", "Throttling protection"],
        },
      },
      sensor: {
        kesehatan: {
          jantung: {
            teknologi: "3rd Gen PPG sensor",
            fitur: [
              "24/7 heart rate monitoring",
              "Heart rate variability",
              "Irregular rhythm notification",
              "High/Low alerts",
            ],
            akurasi: "98.5% vs medical grade",
          },
          oksigen: {
            teknologi: "Multi-wavelength SpO2",
            pengukuran: [
              "On-demand SpO2",
              "Background monitoring",
              "Sleep oxygen tracking",
            ],
            range: "70-100% with ±2% accuracy",
          },
          tidur: {
            tracking: [
              "Sleep stages",
              "REM cycle analysis",
              "Breathing quality",
              "Sleep score",
            ],
            metrics: {
              stages: ["Deep", "Light", "REM", "Awake"],
              quality: ["Duration", "Consistency", "Depth"],
              insight: "AI-powered sleep analysis",
            },
          },
          stress: {
            measurement: "HRV-based stress monitoring",
            features: [
              "Real-time stress levels",
              "Guided breathing",
              "Stress history",
              "Recovery time",
            ],
          },
        },
        aktivitas: {
          motion: {
            accelerometer: "6-axis high-precision",
            gyroscope: "3-axis with gaming-grade accuracy",
            compass: "Digital compass with calibration",
            altimeter: "Barometric altimeter",
          },
          environmental: {
            light: "Ambient light sensor",
            temperature: "Skin temperature sensor",
            pressure: "Air pressure sensor",
          },
          precision: {
            step: "99.8% step count accuracy",
            distance: "GPS-calibrated measurement",
            elevation: "±0.5m altitude accuracy",
          },
        },
        olahraga: {
          modes: {
            count: "100+ workout modes",
            automatic: "Auto-detection for 8 activities",
            custom: "Create custom workout types",
          },
          tracking: {
            basic: ["Steps & Distance", "Calories burned", "Active minutes"],
            advanced: {
              running: [
                "Pace monitoring",
                "Cadence tracking",
                "Running power",
                "Ground contact time",
              ],
              swimming: [
                "Stroke recognition",
                "SWOLF score",
                "Lap counting",
                "Pool length setting",
              ],
              cycling: [
                "Speed tracking",
                "Distance covered",
                "Elevation gain",
                "Route recording",
              ],
            },
            metrics: {
              performance: [
                "VO2 Max estimation",
                "Training load",
                "Recovery time",
                "Fitness age",
              ],
              analysis: [
                "Training effect",
                "Performance condition",
                "Training status",
              ],
            },
          },
          features: {
            coaching: [
              "Real-time voice coaching",
              "Pace alerts",
              "Heart rate zones",
              "Interval training",
            ],
            safety: ["Incident detection", "SOS alerts", "Location sharing"],
          },
        },
      },
      konektivitas: {
        wireless: {
          bluetooth: {
            version: "Bluetooth 5.2",
            features: [
              "Low Energy (BLE)",
              "Multi-point connection",
              "Audio LE",
              "Range up to 10m",
            ],
            protocols: ["A2DP", "AVRCP", "HFP", "SPP"],
          },
          wifi: {
            standards: ["Wi-Fi 6 (802.11ax)", "802.11 b/g/n"],
            features: [
              "Dual-band 2.4GHz/5GHz",
              "Direct connectivity",
              "Network time sync",
            ],
            security: "WPA3 compatible",
          },
        },
        location: {
          systems: {
            gps: "Dual-frequency GPS",
            glonass: "GLONASS support",
            galileo: "Galileo positioning",
            beidou: "BeiDou navigation",
          },
          features: [
            "Quick positioning",
            "Route tracking",
            "Location sharing",
            "Emergency location",
          ],
          accuracy: "Up to 1-meter precision",
        },
        payment: {
          nfc: {
            chip: "Secure element NFC",
            services: ["Google Pay", "Samsung Pay", "Contactless payments"],
            security: "Tokenization support",
          },
          protocols: ["ISO 14443", "EMV", "MIFARE"],
        },
      },
      baterai: {
        capacity: "454mAh Li-ion",
        durability: {
          normal: "Up to 14 days typical use",
          gps: "Up to 40 hours GPS mode",
          power_save: "Up to 30 days",
        },
        charging: {
          type: "Magnetic fast charging",
          speed: "0-100% in 90 minutes",
          wireless: "Qi compatible",
        },
        management: [
          "Adaptive battery modes",
          "Smart power saving",
          "Battery health monitoring",
        ],
      },
      ketahanan: {
        rating: {
          water: "5ATM / IP68",
          dust: "IP6X certified",
          temperature: "Operating: -10°C to 45°C",
        },
        build: {
          case: "Aerospace-grade aluminum",
          glass: "Corning Gorilla Glass DX+",
          buttons: "Premium stainless steel",
          strap: {
            material: "High-grade silicone",
            features: [
              "Quick release mechanism",
              "Hypoallergenic",
              "Sweat resistant",
            ],
          },
        },
        testing: [
          "MIL-STD-810G certified",
          "Drop tested from 1.5m",
          "Temperature cycle tested",
        ],
      },
      kompatibilitas: {
        os: {
          android: {
            version: "Android 8.0 or later",
            features: "Full functionality",
          },
          ios: {
            version: "iOS 13.0 or later",
            limitations: "Some features may be limited",
          },
        },
        features: {
          notifications: [
            "Call management",
            "Quick message replies",
            "Email preview",
            "Calendar alerts",
          ],
          control: [
            "Music playback control",
            "Camera shutter",
            "Find my phone",
            "Smart home control",
          ],
          voice: {
            assistant: [
              "Google Assistant",
              "Offline voice commands",
              "Voice-to-text",
            ],
            call: ["Built-in speaker", "Noise cancellation", "Quick responses"],
          },
        },
      },
      garansi: {
        durasi: "1 tahun",
        coverage: [
          "Manufacturing defects",
          "Battery replacement",
          "Software support",
        ],
      },
      produsen: {
        nama: "SmartTech Electronics Co.",
        origin: "South Korea",
        sertifikasi: ["CE", "FCC", "RoHS"],
      },
    },
    img: "img/smartwatch-x2.jpg",
    price: 899000,
    stock: 25,
  },
];
let cart = {};
// Auto-close duration (ms) for checkout complete panel — change this value to tune timing
// Increased slightly so the completion animation is more visible on slower devices/browsers
const AUTO_CLOSE_MS = 3500;

// DOM refs
const productGrid = document.getElementById("product-grid");
const cartBtn = document.getElementById("cart-btn");
const cartEl = document.getElementById("cart");
const closeCartBtn = document.getElementById("close-cart");
const cartItemsEl = document.getElementById("cart-items");
const cartCountEl = document.getElementById("cart-count");
const cartTotalEl = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const checkoutModal = document.getElementById("checkout-modal");
const closeCheckout = document.getElementById("close-checkout");
const checkoutForm = document.getElementById("checkout-form");
const checkoutMsg = document.getElementById("checkout-msg");
const searchInput = document.getElementById("search");
const toastEl = document.getElementById("toast");
const loginBtn = document.getElementById("login-btn");

document.getElementById("year").textContent = new Date().getFullYear();
loadCart();
fetchProducts();
renderCart();

// If this is checkout page, populate checkout on load
(function initCheckoutPage() {
  const path = window.location.pathname || "";
  const filename = path.split("/").pop() || "index.html";
  if (filename === "checkout.html") {
    populateCheckout();
    // Add address preview update listeners
    ["cust-name", "cust-phone", "cust-address"].forEach((id) => {
      document
        .getElementById(id)
        ?.addEventListener("input", updateAddressPreview);
    });
    // Add edit address button listener
    document.getElementById("edit-address")?.addEventListener("click", () => {
      document.getElementById("cust-address").focus();
    });
  }
})();

// --- lightweight auth UI: show 'Masuk' or 'Halo, {name}' and handle logout ---
function updateAuthUI() {
  try {
    const raw = localStorage.getItem("userInfo");
    const u = raw ? JSON.parse(raw) : null;
    if (!loginBtn) return;
    if (u && u.name) {
      const shortName = u.name.split(" ")[0];
      loginBtn.textContent = `Halo, ${shortName}`;
      loginBtn.classList.add("btn-profile");
      loginBtn.onclick = () => {
        // quick menu: confirm logout
        const ok = confirm("Keluar dari akun?");
        if (ok) {
          localStorage.removeItem("userInfo");
          showToast("Berhasil logout", "success");
          updateAuthUI();
        }
      };
    } else {
      loginBtn.textContent = "Masuk";
      loginBtn.classList.remove("btn-profile");
      loginBtn.onclick = () => {
        window.location.href = "login.html";
      };
    }
  } catch (e) {
    console.warn("Auth UI update failed", e);
  }
}
updateAuthUI();
// If this is the products page (index), require login and redirect to login.html when no userInfo
(function requireLoginRedirect() {
  try {
    const path = window.location.pathname || "";
    const filename = path.split("/").pop() || "index.html";
    const isIndex =
      filename === "" || filename === "index.html" || filename === "/";
    if (isIndex) {
      const u = JSON.parse(localStorage.getItem("userInfo") || "null");
      if (!u) {
        // include returnTo so user can be navigated back after login
        const returnTo = encodeURIComponent(
          window.location.pathname + window.location.search
        );
        window.location.href = `login.html?returnTo=${returnTo}`;
      }
    }
  } catch (e) {
    console.warn("requireLoginRedirect error", e);
  }
})();

// Events
cartBtn.addEventListener("click", () => cartEl.classList.add("open"));
closeCartBtn.addEventListener("click", () => cartEl.classList.remove("open"));
checkoutBtn.addEventListener("click", () => {
  if (Object.keys(cart).length === 0) {
    showToast("Keranjang kosong", "error");
    return;
  }
  // redirect to checkout.html
  window.location.href = "checkout.html";
});

closeCheckout.addEventListener("click", () => {
  checkoutModal.classList.remove("open");
  checkoutModal.setAttribute("aria-hidden", "true");
  clearCheckoutErrors();
  document.body.classList.remove("modal-open");
});

// cancel button in modal
document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "cancel-checkout") {
    checkoutModal.classList.remove("open");
    checkoutModal.setAttribute("aria-hidden", "true");
    clearCheckoutErrors();
    document.body.classList.remove("modal-open");
  }
});
searchInput.addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase().trim();
  const filtered = products.filter(
    (p) => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
  );
  renderProducts(filtered);
});

// Open google maps with the provided location or address
document.getElementById("open-maps")?.addEventListener("click", () => {
  const loc = document.getElementById("cust-location").value.trim();
  const addr = document.getElementById("cust-address").value.trim();
  const q = encodeURIComponent(loc || addr || "Indonesia");
  window.open(`https://www.google.com/maps/search/?api=1&query=${q}`, "_blank");
});

// show/hide bank selection when payment method is 'bank'
document.querySelectorAll('input[name="payment"]')?.forEach((r) =>
  r.addEventListener("change", (e) => {
    const val = e.target.value;
    const bankSel = document.getElementById("bank-select");
    if (bankSel) bankSel.style.display = val === "bank" ? "block" : "none";
  })
);

checkoutForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearCheckoutErrors();
  if (Object.keys(cart).length === 0) {
    showToast("Keranjang kosong", "error");
    return;
  }

  const nameEl = document.getElementById("cust-name");
  const addrEl = document.getElementById("cust-address");
  const phoneEl = document.getElementById("cust-phone");
  const name = nameEl.value.trim();
  const address = addrEl.value.trim();
  const phone = phoneEl.value.trim();

  let hasError = false;
  if (name.length < 3) {
    document.getElementById("err-name").textContent =
      "Nama harus minimal 3 karakter";
    hasError = true;
  }
  if (address.length < 5) {
    document.getElementById("err-address").textContent =
      "Alamat terlalu singkat";
    hasError = true;
  }
  if (!/^\+?[0-9 \-]{6,15}$/.test(phone)) {
    document.getElementById("err-phone").textContent =
      "Nomor telepon tidak valid";
    hasError = true;
  }
  if (hasError) return;

  const payload = {
    name,
    address,
    phone,
    location: document.getElementById("cust-location")?.value || "",
    payment:
      (document.querySelector('input[name="payment"]:checked') || {}).value ||
      "",
    bank: document.getElementById("bank")?.value || null,
    items: Object.values(cart).map((i) => ({
      productId: i.product.id,
      qty: i.qty,
      price: i.product.price,
    })),
    total: calcTotal(),
  };

  // disable submit while sending
  const submitBtn = document.getElementById("submit-order");
  submitBtn.disabled = true;
  try {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Gagal menyimpan order");
    const data = await res.json();
    // show confirmation panel (success) — pass order payload so summary can be shown
    showCheckoutComplete({ id: data.id, offline: false, order: payload });
    // then clear cart and reset form
    cart = {};
    saveCart();
    renderCart();
    checkoutForm.reset();
    showToast("Pesanan terkirim! ID: " + data.id, "success");
  } catch (err) {
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const order = { id: Date.now(), ...payload };
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
    // show offline-saved confirmation with order summary
    showCheckoutComplete({ id: order.id, offline: true, order });
    cart = {};
    saveCart();
    renderCart();
    checkoutForm.reset();
    showToast("Offline: pesanan disimpan secara lokal", "warning");
  } finally {
    submitBtn.disabled = false;
  }
});

// Populate checkout summary from cart
function populateCheckout() {
  const itemsEl = document.getElementById("checkout-items");
  const subtotalEl = document.getElementById("checkout-subtotal");
  itemsEl.innerHTML = "";
  const ids = Object.keys(cart);
  if (ids.length === 0) {
    itemsEl.innerHTML = '<div class="small">Keranjang kosong</div>';
    subtotalEl.textContent = "0";
    document.getElementById("submit-order").disabled = true;
    return;
  }

  ids.forEach((id) => {
    const it = cart[id];
    const div = document.createElement("div");
    div.className = "item";
    div.dataset.id = id;
    div.innerHTML = `
      <div class="name">${it.product.name}</div>
      <div class="qty-controls">
        <button class="qty-dec" data-id="${id}" aria-label="Kurangi">-</button>
        <div class="qty-value">${it.qty}</div>
        <button class="qty-inc" data-id="${id}" aria-label="Tambahkan">+</button>
      </div>
      <div class="line-price">Rp ${formatCurrency(
        it.product.price * it.qty
      )}</div>
    `;
    itemsEl.appendChild(div);
  });

  // single delegation handler to handle qty changes
  itemsEl.onclick = function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;
    const id = btn.dataset.id;
    if (!id) return;
    if (btn.classList.contains("qty-inc")) {
      adjustCartQty(id, 1);
    } else if (btn.classList.contains("qty-dec")) {
      adjustCartQty(id, -1);
    }
  };

  subtotalEl.textContent = formatCurrency(calcTotal());
  // update address preview (if form has values)
  const name = document.getElementById("cust-name")?.value || "-";
  const phone = document.getElementById("cust-phone")?.value || "-";
  const addrLine =
    document.getElementById("cust-address")?.value || "(Belum diisi)";
  const addrNameEl = document.getElementById("addr-name");
  const addrPhoneEl = document.getElementById("addr-phone");
  const addrLineEl = document.getElementById("addr-line");
  if (addrNameEl) addrNameEl.textContent = name;
  if (addrPhoneEl) addrPhoneEl.textContent = phone;
  if (addrLineEl) addrLineEl.textContent = addrLine;

  // update totals in summary card
  const totalEl = document.getElementById("checkout-total");
  const shippingEl = document.getElementById("checkout-shipping");
  if (shippingEl) shippingEl.textContent = "Rp 0";
  if (totalEl) totalEl.textContent = formatCurrency(calcTotal());

  // update mobile summary total
  const mobileTotal = document.getElementById("mobile-total");
  const mobileSummary = document.getElementById("mobile-summary");
  if (mobileTotal) mobileTotal.textContent = formatCurrency(calcTotal());
  // show mobile bar if viewport is small
  if (mobileSummary) {
    if (window.innerWidth <= 780) mobileSummary.style.display = "flex";
    else mobileSummary.style.display = "none";
  }

  // enable submit if basic validation passes (name/address/phone present)
  validateCheckoutForm();
}

function adjustCartQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty = (cart[id].qty || 0) + delta;
  if (cart[id].qty <= 0) delete cart[id];
  saveCart();
  renderCart();
  populateCheckout();
}

// show checkout complete panel
function showCheckoutComplete({ id, offline = false } = {}) {
  const completeEl = document.getElementById("checkout-complete");
  const formEl = document.getElementById("checkout-form");
  const summaryEl = document.querySelector(".checkout-summary");
  const completeImg = document.getElementById("complete-img");
  // hide form and dim summary
  if (formEl) formEl.style.display = "none";
  if (summaryEl) summaryEl.style.opacity = "0.5";

  // update accessible message area
  if (checkoutMsg)
    checkoutMsg.textContent = offline
      ? `Pesanan disimpan lokal (ID: ${id}).`
      : `Pesanan berhasil dikirim. ID: ${id}`;

  // make sure image is visible and has appropriate alt text
  // trigger animation on SVG container (restart by removing class then re-adding)
  const completeInner = document.getElementById("complete-inner");
  if (completeInner) {
    // remove animation class, force reflow, then re-add after a short delay
    // some browsers need a small delay to reliably restart CSS animations
    completeInner.classList.remove("animate");
    void completeInner.offsetWidth;
    setTimeout(() => {
      try {
        completeInner.classList.add("animate");
      } catch (e) {
        /* ignore if element removed */
      }
    }, 30);
  }

  // show completion panel
  // close side-cart if open, but keep the checkout modal open so the
  // completion animation is visible inside the modal (like Shopee)
  try {
    if (cartEl && cartEl.classList.contains("open"))
      cartEl.classList.remove("open");
  } catch (e) {
    /* ignore */
  }

  completeEl.hidden = false;
  const submitBtn = document.getElementById("submit-order");
  if (submitBtn) submitBtn.disabled = true;

  // leave closing to existing modal close button (top-right ×). Focus search for convenience.
  const search = document.getElementById("search");
  if (search) search.focus();

  // auto-close modal after animation (2s). Clear previous timer if any.
  try {
    if (window.__checkoutAutoCloseTimer) {
      clearTimeout(window.__checkoutAutoCloseTimer);
    }
    window.__checkoutAutoCloseTimer = setTimeout(() => {
      // hide complete panel and restore form/ui
      completeEl.hidden = true;
      if (formEl) formEl.style.display = "";
      if (summaryEl) summaryEl.style.opacity = "";
      // close modal and restore body scrolling
      try {
        if (checkoutModal) {
          checkoutModal.classList.remove("open");
          checkoutModal.setAttribute("aria-hidden", "true");
        }
      } catch (e) {}
      try {
        document.body.classList.remove("modal-open");
      } catch (e) {}
      // re-enable submit (form reset already done by caller)
      if (submitBtn) submitBtn.disabled = false;
    }, AUTO_CLOSE_MS);
  } catch (e) {
    // ignore timer errors
    console.warn("Auto-close timer error", e);
  }
}

// helper to map productId to product name using cached products
function getProductNameById(id) {
  const p = products.find((x) => x.id === id);
  return p ? p.name : null;
}

function clearCheckoutErrors() {
  ["err-name", "err-address", "err-phone"].forEach(
    (id) => (document.getElementById(id).textContent = "")
  );
}

// Update address preview live as user types
function updateAddressPreview() {
  const name = document.getElementById("cust-name")?.value || "-";
  const phone = document.getElementById("cust-phone")?.value || "-";
  const addrLine =
    document.getElementById("cust-address")?.value || "(Belum diisi)";
  const addrNameEl = document.getElementById("addr-name");
  const addrPhoneEl = document.getElementById("addr-phone");
  const addrLineEl = document.getElementById("addr-line");
  if (addrNameEl) addrNameEl.textContent = name;
  if (addrPhoneEl) addrPhoneEl.textContent = phone;
  if (addrLineEl) addrLineEl.textContent = addrLine;
}

// Validate checkout fields and enable/disable the pay button
function validateCheckoutForm() {
  const name = (document.getElementById("cust-name")?.value || "").trim();
  const address = (document.getElementById("cust-address")?.value || "").trim();
  const phone = (document.getElementById("cust-phone")?.value || "").trim();
  const payment =
    (document.querySelector('input[name="payment"]:checked') || {}).value || "";
  const payBtn = document.getElementById("submit-order");
  let ok = true;
  if (name.length < 3) ok = false;
  if (address.length < 5) ok = false;
  if (!/^\+?[0-9 \-]{6,15}$/.test(phone)) ok = false;
  if (!payment) ok = false;
  if (payBtn) payBtn.disabled = !ok;
  return ok;
}

// Wire quick validation events
["cust-name", "cust-address", "cust-phone"].forEach((id) => {
  document
    .getElementById(id)
    ?.addEventListener("input", () => validateCheckoutForm());
});
document
  .querySelectorAll('input[name="payment"]')
  ?.forEach((r) => r.addEventListener("change", () => validateCheckoutForm()));

// clicking the Pay (submit-order) button should submit the form
document.getElementById("submit-order")?.addEventListener("click", (e) => {
  // fallback to requestSubmit (modern browsers) or dispatching submit
  if (checkoutForm) {
    if (typeof checkoutForm.requestSubmit === "function")
      checkoutForm.requestSubmit();
    else
      checkoutForm.dispatchEvent(
        new Event("submit", { bubbles: true, cancelable: true })
      );
  }
});

// mobile pay button triggers the same submit (if enabled)
document.getElementById("mobile-pay")?.addEventListener("click", () => {
  const mainPay = document.getElementById("submit-order");
  if (mainPay && !mainPay.disabled) mainPay.click();
});

// fetch products from API
async function fetchProducts() {
  try {
    const res = await fetch("/api/products");
    if (!res.ok) throw new Error("Gagal mengambil produk");
    products = await res.json();
  } catch (e) {
    // fallback to embedded list if API unavailable
    products = [
      {
        id: 1,
        name: "Kemeja Pantai",
        price: 125000,
        desc: "Kemeja santai, bahan ringan, cocok untuk musim panas.",
        img: "https://via.placeholder.com/400x300?text=Kemeja+Pantai",
      },
      {
        id: 2,
        name: "Celana Pendek",
        price: 90000,
        desc: "Celana pendek nyaman, mudah dicuci.",
        img: "https://via.placeholder.com/400x300?text=Celana+Pendek",
      },
      {
        id: 3,
        name: "Sandal Gunung",
        price: 175000,
        desc: "Sandal untuk aktivitas outdoor, nyaman dan tahan lama.",
        img: "https://via.placeholder.com/400x300?text=Sandal+Gunung",
      },
      {
        id: 4,
        name: "Tas Punggung",
        price: 245000,
        desc: "Tas punggung 20L, banyak kompartemen.",
        img: "https://via.placeholder.com/400x300?text=Tas+Punggung",
      },
      {
        id: 5,
        name: "Topi Baseball",
        price: 65000,
        desc: "Topi gaya kasual, ukuran one-size.",
        img: "https://via.placeholder.com/400x300?text=Topi+Baseball",
      },
    ];
    showToast("Mode offline: menggunakan data produk lokal", "warning");
  }
  renderProducts(products);
}

function renderProducts(list) {
  productGrid.innerHTML = "";
  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";

    // Generate specs HTML based on product type with nested structure
    let specsHtml = '<div class="specs">';
    if (p.specs) {
      Object.entries(p.specs).forEach(([key, value]) => {
        // Start a new section for each main spec category
        specsHtml += `<div class="specs-section">`;

        if (
          typeof value === "object" &&
          value !== null &&
          !Array.isArray(value)
        ) {
          // Handle nested object specs
          specsHtml += `<div class="spec-item"><strong>${key}</strong></div>`;
          Object.entries(value).forEach(([subKey, subValue]) => {
            if (Array.isArray(subValue)) {
              // Handle arrays inside nested objects
              specsHtml += `<div class="spec-item">
                <strong>${subKey}</strong>
                <div class="spec-value">
                  ${subValue
                    .map((v) => `<span class="spec-badge">${v}</span>`)
                    .join("")}
                </div>
              </div>`;
            } else if (typeof subValue === "object" && subValue !== null) {
              // Handle doubly nested objects (like size guides)
              specsHtml += `<div class="spec-item">
                <strong>${subKey}</strong>
                <div class="spec-value">
                  ${Object.entries(subValue)
                    .map(
                      ([k, v]) =>
                        `<div class="spec-detail"><em>${k}:</em> ${v}</div>`
                    )
                    .join("")}
                </div>
              </div>`;
            } else {
              // Handle simple key-value pairs in nested objects
              specsHtml += `<div class="spec-item">
                <strong>${subKey}</strong>
                <div class="spec-value">${subValue}</div>
              </div>`;
            }
          });
        } else if (Array.isArray(value)) {
          // Handle array specs (like features lists)
          specsHtml += `<div class="spec-item">
            <strong>${key}</strong>
            <div class="spec-value">
              ${value
                .map((v) => `<span class="spec-badge">${v}</span>`)
                .join("")}
            </div>
          </div>`;
        } else {
          // Handle simple key-value specs
          specsHtml += `<div class="spec-item">
            <strong>${key}</strong>
            <div class="spec-value">${value}</div>
          </div>`;
        }

        specsHtml += "</div>"; // Close specs-section
      });
    }
    specsHtml += "</div>";

    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" class="product-img">
      <div class="product-info">
        <h4>${p.name}</h4>
        <p class="desc">${p.desc}</p>
        ${specsHtml}
        <div class="meta">
          <div class="price">Rp ${formatCurrency(p.price)}</div>
          <button class="btn primary" data-id="${p.id}">Tambah</button>
        </div>
      </div>
    `;
    productGrid.appendChild(card);
  });
  // attach add handlers
  document.querySelectorAll(".card .btn").forEach((b) =>
    b.addEventListener("click", (e) => {
      const id = Number(e.currentTarget.dataset.id);
      addToCart(id);
    })
  );
}

function addToCart(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  if (cart[id]) cart[id].qty += 1;
  else cart[id] = { product: p, qty: 1 };
  saveCart();
  renderCart();
  showToast("Ditambahkan: " + p.name, "success");
}

function renderCart() {
  cartItemsEl.innerHTML = "";
  const ids = Object.keys(cart);
  if (ids.length === 0) {
    cartItemsEl.innerHTML = "<p>Keranjang kosong</p>";
    cartCountEl.textContent = "0";
    cartTotalEl.textContent = "0";
    return;
  }
  ids.forEach((id) => {
    const item = cart[id];
    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
      <img src="${item.product.img}" alt="${item.product.name}">
      <div style="flex:1">
        <div style="font-weight:600">${item.product.name}</div>
        <div style="color:#666">Rp ${formatCurrency(item.product.price)}</div>
        <div class="qty">
          <button class="btn" data-action="dec" data-id="${id}">-</button>
          <span style="padding:0 .5rem">${item.qty}</span>
          <button class="btn" data-action="inc" data-id="${id}">+</button>
          <button class="btn" data-action="remove" data-id="${id}" style="margin-left:8px;background:#f5f5f5">Hapus</button>
        </div>
      </div>
    `;
    cartItemsEl.appendChild(el);
  });
  // attach handlers
  cartItemsEl.querySelectorAll("button").forEach((b) =>
    b.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      const act = e.currentTarget.dataset.action;
      if (act === "inc") {
        cart[id].qty += 1;
      } else if (act === "dec") {
        cart[id].qty -= 1;
        if (cart[id].qty <= 0) delete cart[id];
      } else if (act === "remove") {
        delete cart[id];
      }
      saveCart();
      renderCart();
    })
  );
  cartCountEl.textContent = Object.values(cart).reduce((s, i) => s + i.qty, 0);
  cartTotalEl.textContent = formatCurrency(calcTotal());
}

function calcTotal() {
  return Object.values(cart).reduce((s, i) => s + i.product.price * i.qty, 0);
}
function formatCurrency(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function loadCart() {
  try {
    cart = JSON.parse(localStorage.getItem("cart") || "{}");
  } catch (e) {
    cart = {};
  }
}

// Toast
function showToast(msg, type = "info", timeout = 3000) {
  const t = document.createElement("div");
  t.className = "toast-item " + type;
  t.textContent = msg;
  toastEl.appendChild(t);
  setTimeout(() => {
    t.classList.add("visible");
  }, 50);
  setTimeout(() => {
    t.classList.remove("visible");
    setTimeout(() => t.remove(), 300);
  }, timeout);
}
