// navbar.js – premium topbar + navbar injected into #navbarSection

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
    logoAlt: "Sky Quest",
    homeLink: "index.html",
    aboutLink: "about.html",
    blogLink: "blog.html",
    contactLink: "contact.html",
    servicePages: [
      "best-uk-immigration-consultant-in-qatar.html",
      "best-australia-immigration-consultant-in-qatar.html",
      "best-canada-immigration-consultants-in-qatar.html",
      "us-visa-immigration-consultant-in-qatar.html",
      "dubai-visa-from-qatar.html",
      "schengen-visa-from-qatar.html",
      "ticketbooking.html",
      "visitorassistance.html",
      "travelarrangements.html",
      "documentassistance.html",
      "globalvisa.html",
    ],
  },
};

function getBasePrefix() {
  if (typeof document === "undefined" || !document.location) return "";
  var path = (document.location.pathname || "").toLowerCase();
  return path.indexOf("/blog/") !== -1 ? "../" : "";
}

function getNavbarHTML() {
  var basePrefix = getBasePrefix();
  var homeLink = basePrefix + navbarData.nav.homeLink;
  var aboutLink = basePrefix + navbarData.nav.aboutLink;
  var blogLink = basePrefix + navbarData.nav.blogLink;
  var contactLink = basePrefix + navbarData.nav.contactLink;
  var topContactLink = basePrefix + navbarData.topbar.contactLink;
  var logoSrc = basePrefix + "img/logo.png";

  return (
    "<!-- Topbar Start -->" +
    '<div class="sq-topbar-wrap d-none d-lg-block">' +
    '  <div class="container px-4 px-lg-5">' +
    '    <div class="sq-topbar d-flex flex-wrap align-items-center justify-content-between">' +
    '      <div class="sq-topbar-left d-flex align-items-center gap-3">' +
    '        <a href="mailto:' +
    navbarData.topbar.email +
    '" class="sq-topbar-link"><i class="fas fa-envelope"></i><span>' +
    navbarData.topbar.email +
    "</span></a>" +
    '        <a href="tel:' +
    navbarData.topbar.phone +
    '" class="sq-topbar-link"><i class="fas fa-phone-alt"></i><span>' +
    navbarData.topbar.phone +
    "</span></a>" +
    "      </div>" +
    '      <div class="sq-topbar-right d-flex align-items-center gap-3">' +
    '        <div class="sq-socials d-flex align-items-center">' +
    '          <a class="sq-social-btn" href="' +
    navbarData.topbar.twitter +
    '" aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
    '          <a class="sq-social-btn" href="' +
    navbarData.topbar.facebook +
    '" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
    '          <a class="sq-social-btn" href="' +
    navbarData.topbar.linkedin +
    '" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>' +
    '          <a class="sq-social-btn" href="' +
    navbarData.topbar.instagram +
    '" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
    "        </div>" +
    '        <a href="' +
    topContactLink +
    '" class="sq-topbar-cta">Quick Contact</a>' +
    "      </div>" +
    "    </div>" +
    "  </div>" +
    "</div>" +
    "<!-- Topbar End -->" +
    "<!-- Navbar Start -->" +
    '<div class="container-fluid nav-bar p-0 sq-nav-wrap">' +
    '  <nav class="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0 sq-navbar">' +
    '    <a href="' +
    homeLink +
    '" class="navbar-brand p-0 sq-brand"><img src="' +
    logoSrc +
    '" width="100%" alt="' +
    navbarData.nav.logoAlt +
    '" /></a>' +
    '    <button class="navbar-toggler sq-nav-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-label="Toggle navigation"><span class="fa fa-bars"></span></button>' +
    '    <div class="collapse navbar-collapse" id="navbarCollapse">' +
    '      <div class="navbar-nav ms-auto py-0 align-items-lg-center">' +
    '        <a href="' +
    homeLink +
    '" class="nav-item nav-link sq-nav-link" data-nav="home">Home</a>' +
    '        <a href="' +
    aboutLink +
    '" class="nav-item nav-link sq-nav-link" data-nav="about">About</a>' +
    '        <a href="' +
    blogLink +
    '" class="nav-item nav-link sq-nav-link" data-nav="blog">Blog</a>' +
    '        <div class="nav-item dropdown">' +
    '          <a href="#" class="nav-link dropdown-toggle sq-nav-link" data-bs-toggle="dropdown" data-nav="services"><span class="dropdown-toggle">Services</span></a>' +
    '          <div class="dropdown-menu m-0 sq-dropdown-menu" id="serviceDropdown"></div>' +
    "        </div>" +
    '        <a href="' +
    contactLink +
    '" class="sq-nav-contact-btn">Contact Us</a>' +
    "      </div>" +
    "    </div>" +
    "  </nav>" +
    "</div>" +
    "<!-- Navbar End -->"
  );
}

function normalizePageName(pathname) {
  var page = pathname.split("/").pop() || "";
  if (page === "" || pathname === "/" || pathname.endsWith("/")) return "index";
  return page.replace(/\.html$/i, "").toLowerCase();
}

function isServicePage(current) {
  if (!navbarData.nav.servicePages || !navbarData.nav.servicePages.length) return false;
  var normalized = current.replace(/\.html$/i, "");
  for (var i = 0; i < navbarData.nav.servicePages.length; i++) {
    var service = navbarData.nav.servicePages[i].replace(/\.html$/i, "");
    if (service === normalized) return true;
  }
  return false;
}

function setActiveNav() {
  var path =
    typeof document !== "undefined" && document.location && document.location.pathname
      ? document.location.pathname
      : "";
  var isBlogDirectoryPage = /\/blog\/[^/]+\.html?$/i.test(path);
  var current = normalizePageName(path);
  var links = document.querySelectorAll(".navbar-nav .nav-link[data-nav]");

  for (var i = 0; i < links.length; i++) {
    var a = links[i];
    var nav = a.getAttribute("data-nav");
    a.classList.remove("active");

    if (nav === "home" && current === "index") a.classList.add("active");
    if (nav === "about" && current.indexOf("about") !== -1) a.classList.add("active");
    if (nav === "contact" && current.indexOf("contact") !== -1) a.classList.add("active");
    if (nav === "services" && isServicePage(current)) a.classList.add("active");
    if (nav === "blog" && (current === "blog" || current === "blog-detail" || isBlogDirectoryPage))
      a.classList.add("active");
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
