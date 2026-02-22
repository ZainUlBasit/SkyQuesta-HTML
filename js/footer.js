// footer.js – injects footer content into #footerSection when DOM is ready

var footerData = {
  contact: {
    address: "Office No.9, floor No.5, building No.101,<br/>Ibn Seena St, Zone No.24 Al-Muntaza.<br/>Doha, Qatar.",
    facebook: "https://www.facebook.com/share/17ZBiY2jrS/",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  opening: {
    days: "Saturday to Thursday",
    time: "09.00 am to 07.00 pm",
    friday: "Friday off",
    email: "info@skyquesta.com",
    phone: "+97474027203",
  },
  services: [
    { name: "Visitor assistance & support services", link: "visitorassistance.html" },
    { name: "Travel arrangements", link: "travelarrangements.html" },
    { name: "Ticket booking (Flights, Hotels, Tours)", link: "ticketbooking.html" },
    { name: "Document assistance", link: "documentassistance.html" },
    { name: "Global visa assistance", link: "globalvisa.html" },
  ],
  newsletter: "We ensure a smooth and stress-free experience for every client — from planning travel and securing visas to providing on-ground visitor assistance.",
};

function getFooterHTML() {
  var addressHtml = footerData.contact.address;
  var servicesHtml = footerData.services
    .map(function (s) {
      return '<a href="' + s.link + '"><i class="fas fa-angle-right me-2"></i> ' + s.name + "</a>";
    })
    .join("");
  return (
    '<div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">' +
    '  <div class="container py-5">' +
    '    <div class="row g-5">' +
    '      <div class="col-md-6 col-lg-6 col-xl-3">' +
    '        <div class="footer-item d-flex flex-column">' +
    '          <h4 class="text-secondary mb-4">Contact Info</h4>' +
    '          <a href="#"><i class="fa fa-map-marker-alt me-2"></i>' + addressHtml + "</a>" +
    '          <div class="d-flex align-items-center">' +
    '            <i class="fas fa-share fa-2x text-secondary me-2"></i>' +
    '            <a class="btn mx-1" href="' + footerData.contact.facebook + '"><i class="fab fa-facebook-f"></i></a>' +
    '            <a class="btn mx-1" href="' + footerData.contact.twitter + '"><i class="fab fa-twitter"></i></a>' +
    '            <a class="btn mx-1" href="' + footerData.contact.instagram + '"><i class="fab fa-instagram"></i></a>' +
    '            <a class="btn mx-1" href="' + footerData.contact.linkedin + '"><i class="fab fa-linkedin-in"></i></a>' +
    "          </div>" +
    "        </div>" +
    "      </div>" +
    '      <div class="col-md-6 col-lg-6 col-xl-3">' +
    '        <div class="footer-item d-flex flex-column">' +
    '          <h4 class="text-secondary mb-4">Opening Time</h4>' +
    '          <div class="mb-3">' +
    '            <p class="text-white mb-0">Week days</p>' +
    '            <p class="text-white mb-0">' + footerData.opening.days + "</p>" +
    '            <p class="text-white mb-0">' + footerData.opening.time + "</p>" +
    '            <p class="text-white mb-0">' + footerData.opening.friday + "</p>" +
    '            <a href="mailto:' + footerData.opening.email + '"><i class="fas fa-envelope me-2"></i> ' + footerData.opening.email + "</a><br/>" +
    '            <a href="tel:' + footerData.opening.phone + '"><i class="fas fa-phone me-2"></i> ' + footerData.opening.phone + "</a>" +
    "          </div>" +
    "        </div>" +
    "      </div>" +
    '      <div class="col-md-6 col-lg-6 col-xl-3">' +
    '        <div class="footer-item d-flex flex-column">' +
    '          <h4 class="text-secondary mb-4">Our Services</h4>' +
    servicesHtml +
    "        </div>" +
    "      </div>" +
    '      <div class="col-md-6 col-lg-6 col-xl-3">' +
    '        <div class="footer-item">' +
    '          <h4 class="text-secondary mb-4">Newsletter</h4>' +
    '          <p class="text-white mb-3">' + footerData.newsletter + "</p>" +
    "        </div>" +
    "      </div>" +
    "    </div>" +
    "  </div>" +
    "</div>"
  );
}

function renderFooter() {
  var container = document.getElementById("footerSection");
  if (!container) return;
  container.innerHTML = getFooterHTML();
  if (typeof window.WOW !== "undefined") {
    new window.WOW().init();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderFooter);
} else {
  renderFooter();
}
