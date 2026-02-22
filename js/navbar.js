// navbar.js – injects topbar + navbar into #navbarSection when DOM is ready

var navbarData = {
  topbar: {
    email: "info@skyquesta.com",
    phone: "+97474027203",
    contactLink: "contact.html",
    facebook: "https://www.facebook.com/share/17ZBiY2jrS/",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
  nav: {
    logoAlt: "Logo",
    homeLink: "index.html",
    aboutLink: "about.html",
    contactLink: "contact.html",
    servicePages: [
      "best-uk-immigration-consultant-in-qatar.html",
      "best-australia-immigration-consultant-in-qatar.html",
      "best-canada-immigration-consultants-in-qatar.html",
      "us-visa-immigration-consultant-in-qatar.html",
      "ticketbooking.html",
      "visitorassistance.html",
      "travelarrangements.html",
      "documentassistance.html",
      "globalvisa.html",
    ],
  },
};

function getNavbarHTML() {
  return (
    "<!-- Topbar Start -->" +
    '<div class="container-fluid bg-primary px-5 d-none d-lg-block">' +
    '  <div class="row gx-0 align-items-center">' +
    '    <div class="col-lg-5 text-center text-lg-start mb-lg-0">' +
    '      <div class="d-flex">' +
    '        <a href="mailto:' +
    navbarData.topbar.email +
    '" class="text-white me-4" style="color:#fff !important"><i class="fas fa-envelope me-2 text-secondary"></i>' +
    navbarData.topbar.email +
    "</a>" +
    '        <a href="tel:' +
    navbarData.topbar.phone +
    '" class="text-white me-0" style="color:#fff !important"><i class="fas fa-phone-alt me-2 text-secondary"></i>' +
    navbarData.topbar.phone +
    "</a>" +
    "      </div>" +
    "    </div>" +
    '    <div class="col-lg-3 row-cols-1 text-center mb-2 mb-lg-0">' +
    '      <div class="d-inline-flex align-items-center" style="height: 45px">' +
    '        <a class="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href="' +
    navbarData.topbar.twitter +
    '"><i class="fab fa-twitter fw-normal text-secondary"></i></a>' +
    '        <a class="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href="' +
    navbarData.topbar.facebook +
    '"><i class="fab fa-facebook-f fw-normal text-secondary"></i></a>' +
    '        <a class="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href="' +
    navbarData.topbar.linkedin +
    '"><i class="fab fa-linkedin-in fw-normal text-secondary"></i></a>' +
    '        <a class="btn btn-sm btn-outline-light btn-square rounded-circle me-2" href="' +
    navbarData.topbar.instagram +
    '"><i class="fab fa-instagram fw-normal text-secondary"></i></a>' +
    "      </div>" +
    "    </div>" +
    '    <div class="col-lg-4 text-center text-lg-end">' +
    '      <div class="d-inline-flex align-items-center" style="height: 45px">' +
    '        <a href="#" class="text-muted me-2" style="color:#fff !important">Help</a> <small class="text-secondary"> / </small>' +
    '        <a href="#" class="text-muted mx-2" style="color:#fff !important">Support</a> <small class="text-secondary"> / </small>' +
    '        <a href="' +
    navbarData.topbar.contactLink +
    '" class="text-muted ms-2" style="color:#fff !important">Contact</a>' +
    "      </div>" +
    "    </div>" +
    "  </div>" +
    "</div>" +
    "<!-- Topbar End -->" +
    "" +
    "<!-- Navbar Start -->" +
    '<div class="container-fluid nav-bar p-0">' +
    '  <nav class="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">' +
    '    <a href="' +
    navbarData.nav.homeLink +
    '" class="navbar-brand p-0"><img src="img/logo.png" width="100%" alt="' +
    navbarData.nav.logoAlt +
    '" /></a>' +
    '    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span class="fa fa-bars"></span></button>' +
    '    <div class="collapse navbar-collapse" id="navbarCollapse">' +
    '      <div class="navbar-nav ms-auto py-0">' +
    '        <a href="' +
    navbarData.nav.homeLink +
    '" class="nav-item nav-link" data-nav="home">Home</a>' +
    '        <a href="' +
    navbarData.nav.aboutLink +
    '" class="nav-item nav-link" data-nav="about">About</a>' +
    '        <div class="nav-item dropdown">' +
    '          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-nav="services"><span class="dropdown-toggle">Services</span></a>' +
    '          <div class="dropdown-menu m-0" id="serviceDropdown"></div>' +
    "        </div>" +
    '        <a href="' +
    navbarData.nav.contactLink +
    '" class="nav-item nav-link" data-nav="contact">Contact</a>' +
    "      </div>" +
    "    </div>" +
    "  </nav>" +
    "</div>" +
    "<!-- Navbar End -->"
  );
}

function setActiveNav() {
  var path =
    typeof document !== "undefined" && document.location && document.location.pathname
      ? document.location.pathname
      : "";
  var page = path.split("/").pop() || "";
  if (page === "" || path === "/" || path.endsWith("/")) page = "index.html";

  var links = document.querySelectorAll(".navbar-nav .nav-link[data-nav]");
  var isServicePage = navbarData.nav.servicePages && navbarData.nav.servicePages.indexOf(page) !== -1;

  for (var i = 0; i < links.length; i++) {
    var a = links[i];
    var nav = a.getAttribute("data-nav");
    a.classList.remove("active");
    if (nav === "home" && (page === "index.html" || page === "")) a.classList.add("active");
    if (nav === "about" && page.indexOf("about") !== -1) a.classList.add("active");
    if (nav === "contact" && page.indexOf("contact") !== -1) a.classList.add("active");
    if (nav === "services" && isServicePage) a.classList.add("active");
  }
}

function renderNavbar() {
  var container = document.getElementById("navbarSection");
  if (!container) return;
  container.innerHTML = getNavbarHTML();
  setActiveNav();
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderNavbar);
  } else {
    renderNavbar();
  }
}
