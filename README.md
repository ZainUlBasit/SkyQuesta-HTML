# Sky Quest – Immigration & Visa Services (Qatar)

Static website for **Sky Quest**, offering immigration consultant and visa services in Qatar (Doha). Built with HTML, CSS, and JavaScript.

---

## Contents

- [Overview](#overview)
- [Project structure](#project-structure)
- [Main pages](#main-pages)
- [Reports](#reports)
- [Local development](#local-development)
- [Template credit](#template-credit)

---

## Overview

- **index.html** – Original homepage with performance optimizations (fast load, spinner hide on DOM ready, preload/lazy images).
- **Other HTML pages** – Newly added service/destination pages (Schengen, Dubai, US, UK, Canada, Australia, etc.).
- Shared **navbar**, **footer**, **FAQ**, and **services** content are loaded via `js/` scripts.

---

## Project structure

```
├── index.html              # Homepage
├── about.html, contact.html
├── *.html                  # Service/destination pages (visa, immigration)
├── css/
│   ├── style.css
│   └── bootstrap.min.css
├── js/
│   ├── main.js             # Spinner, init
│   ├── navbar.js
│   ├── footer.js
│   ├── services.js
│   ├── service-drop-down.js
│   ├── features.js
│   ├── CountriesWeServe.js
│   └── faq.js
├── lib/                    # Owl Carousel, Animate
├── img/
├── favicons/
├── PHPMailer/              # Contact form mail
├── enquiry_mail.php, process.php
├── CHANGES-REPORT.md       # Changes report (Markdown)
├── CHANGES-REPORT.html     # Changes report (English, print-friendly → PDF)
├── README.md               # This file
├── READ-ME.txt             # Template credit
└── LICENSE.txt
```

---

## Main pages

| Page | Description |
|------|-------------|
| **index.html** | Home – immigration consultant services in Qatar |
| **schengen-visa-from-qatar.html** | Schengen / Europe visa from Qatar |
| **dubai-visa-from-qatar.html** | Dubai visa from Qatar |
| **us-visa-immigration-consultant-in-qatar.html** | US visa & immigration |
| **best-uk-immigration-consultant-in-qatar.html** | UK immigration |
| **best-canada-immigration-consultants-in-qatar.html** | Canada immigration |
| **best-australia-immigration-consultant-in-qatar.html** | Australia immigration |
| **about.html** | About Sky Quest |
| **contact.html** | Contact / enquiry form |

Additional SEO/service pages (e.g. visa-consultant-in-qatar.html, immigration-consultants-in-qatar.html) follow the same layout and JS includes.

---

## Reports

- **CHANGES-REPORT.md** – Summary of changes (index.html performance fixes, other pages status) in Markdown.
- **CHANGES-REPORT.html** – Same report in English, print-friendly. Open in a browser and use **File → Print → Save as PDF** to generate a PDF.

---

## Local development

1. Open the project folder in an editor (e.g. Cursor / VS Code).
2. Serve the folder with any static server, or open `index.html` directly in a browser.
   - Example with Python:  
     `python3 -m http.server 8080`  
     Then visit `http://localhost:8080`.
   - Or use Live Server / similar extension.
3. For contact form (PHP), use a stack with PHP (e.g. XAMPP, or your hosting environment).

---

## Template credit

Based on **Travisa** – Visa & Immigration Website Template by [HTML Codex](https://htmlcodex.com).  
See **READ-ME.txt** and **LICENSE.txt** for template license and author details.
