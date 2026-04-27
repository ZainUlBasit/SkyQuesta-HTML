const services = [
  {
    title: "Student Visa",
    image: "img/service-1.jpg",
    description:
      "Study abroad with expert admission and visa support. We help with documentation, applications, and interview preparation.",
    link: "visitorassistance.html",
    delay: "0.1s",
  },
  {
    title: "Work Visa",
    image: "img/service-1.jpg",
    description:
      "Get professional guidance for employment-based immigration with proper legal procedures and smooth processing.",
    link: "visitorassistance.html",
    delay: "0.1s",
  },
  {
    title: "Business Visa",
    image: "img/service-1.jpg",
    description:
      "Expand globally with reliable business visa assistance, investor guidance, and documentation support.",
    link: "visitorassistance.html",
    delay: "0.1s",
  },
  {
    title: "Visitor Visa",
    image: "img/service-1.jpg",
    description:
      "Travel with confidence. We help you obtain short-term visit visas quickly and efficiently.",
    link: "visitorassistance.html",
    delay: "0.1s",
  },

//   {
//     title: "Visitor Assistance & Support Services",
//     image: "img/service-1.jpg",
//     description:
//       "We provide dedicated Visitor Assistance and Support Services to ensure a seamless and welcoming experience for all guests.",
//     link: "visitorassistance.html",
//     delay: "0.1s",
//   },
//   {
//     title: "Travel Arrangements",
//     image: "img/service-2.jpg",
//     description:
//       "We offer comprehensive Travel Arrangement Services to ensure smooth, efficient, and hassle-free journeys for our clients and guests.",
//     link: "travelarrangements.html",
//     delay: "0.3s",
//   },
//   {
//     title: "Ticket Booking (Flights, Hotels, Tours)",
//     image: "img/service-3.jpg",
//     description:
//       "We provide reliable and efficient ticket booking services to make your travel planning effortless.",
//     link: "#",
//     delay: "0.5s",
//   },
//   {
//     title: "Document Assistance",
//     image: "img/service-1.jpg",
//     description:
//       "We offer comprehensive Document Assistance Services to simplify and expedite all your paperwork and formalities.",
//     link: "documentassistance.html",
//     delay: "0.1s",
//   },
//   {
//     title: "Global Visa Assistance",
//     image: "img/service-2.jpg",
//     description:
//       "We provide comprehensive Global Visa Assistance to help travelers navigate the complex visa process with ease and confidence.",
//     link: "globalvisa.html",
//     delay: "0.3s",
//   },
//   {
//     title: "Tourist Visa",
//     image: "img/service-3.jpg",
//     description:
//       "We handle every detail with precision, ensuring comfort, compliance, and convenience at every stage of your journey.",
//     link: "#",
//     delay: "0.5s",
//   },
];

function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return;

  container.innerHTML = "";
  services.forEach((service, index) => {
    const delay = service.delay || "0." + (index + 1) + "s";
    const serviceHTML = `
      <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="${delay}">
        <div class="service-item">
          <div class="service-inner">
            <div class="service-img">
              <img src="${service.image}" class="img-fluid w-100 rounded" alt="${service.title}" />
            </div>
            <div class="service-title">
              <div class="service-title-name">
                <div class="bg-primary text-center rounded p-3 mx-5 mb-4">
                  <a href="${service.link}" class="h4 text-white mb-0">${service.title}</a>
                </div>
                <a class="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4" href="${service.link}">
                  Explore More
                </a>
              </div>
              <div class="service-content pb-4">
                <a href="${service.link}">
                  <h4 class="text-white mb-4 py-3">${service.title}</h4>
                </a>
                <div class="px-4">
                  <p class="mb-4">
                    ${service.description}
                  </p>
                  <a class="btn btn-primary border-secondary rounded-pill py-3 px-5" href="${service.link}">
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += serviceHTML;
  });

  if (typeof window.WOW !== "undefined") {
    new window.WOW().init();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderServices);
} else {
  renderServices();
}
