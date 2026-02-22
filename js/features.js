const featuresData = [
    {
      icon: "fas fa-dollar-sign",
      title: "Cost-Effective",
      description:
        "Our services are designed to be cost-effective, combining quality and efficiency with affordability. We focus on delivering optimal results within your budget.",
    },
    {
      icon: "fab fa-cc-visa",
      title: "Visa Assistance",
      description:
        "We provide reliable and efficient Visa Assistance Services to simplify your international travel process. Our expert team guides you through every step.",
    },
    {
      icon: "fas fa-atlas",
      title: "Faster Processing",
      description:
        "Our processes are designed for faster turnaround and efficient handling, ensuring your applications, bookings, and approvals are completed without delays.",
    },
    {
      icon: "fas fa-users",
      title: "Direct Interviews",
      description:
        "We organize direct interview opportunities with employers, ensuring transparent communication and faster hiring decisions.",
    },
  ];
  
  const container = document.getElementById("featuresContainer");
  
  featuresData.forEach((feature) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-6 col-xl-3";
  
    col.innerHTML = `
      <div class="feature-item text-center p-4 shadow-sm rounded">
        <div class="feature-icon p-3 mb-4">
          <i class="${feature.icon} fa-4x text-primary"></i>
        </div>
        <div class="feature-content d-flex flex-column">
          <h5 class="mb-3">${feature.title}</h5>
          <p class="mb-3">${feature.description}</p>
        </div>
      </div>
    `;
  
    container.appendChild(col);
  });