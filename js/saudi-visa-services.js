const saudiVisaServices = [
  {
    key: "tourist",
    icon: "fas fa-suitcase-rolling",
    title: "Tourist Visa",
    purpose: "Travel & holidays",
    whoCanApply: "Qatar residents",
  },
  {
    key: "business",
    icon: "fas fa-briefcase",
    title: "Business Visa",
    purpose: "Meetings & trade",
    whoCanApply: "Company owners",
  },
  {
    key: "work",
    icon: "fas fa-mosque",
    title: "Work Visa",
    purpose: "Employment",
    whoCanApply: "Sponsored workers",
  },
  {
    key: "family",
    icon: "fas fa-users",
    title: "Family Visit Visa",
    purpose: "Visit relatives",
    whoCanApply: "Family members",
  },
];

function renderSaudiVisaOverview() {
  const container = document.getElementById("saudiVisaOverviewContainer");
  if (!container) return;

  container.innerHTML = "";

  saudiVisaServices.forEach(function (service, index) {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-3";

    col.innerHTML = `
      <div class="saudi-type-card h-100">
        <span class="saudi-chip saudi-chip-${getChipClass(index)} mb-2">${service.title}</span>
        <p class="saudi-type-label mb-1">Purpose</p>
        <p class="mb-2">
          ${service.purpose}
        </p>
        <hr class="saudi-type-divider" />
        <p class="saudi-type-label mb-1">Who can apply</p>
        <p class="mb-0">
          ${service.whoCanApply}
        </p>
      </div>
    `;

    container.appendChild(col);
  });
}

function renderSaudiVisaServicesList() {
  const container = document.getElementById("saudiVisaServicesContainer");
  if (!container) return;

  container.innerHTML = "";

  saudiVisaServices.forEach(function (service) {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";

    col.innerHTML = `
      <div class="p-4 bg-white rounded-3 border h-100 saudi-visa-service-card">
        <h5 class="mb-2">
          <i class="${service.icon} text-primary me-2"></i> ${service.title}
        </h5>
        <p class="mb-0 text-muted">
          ${service.whoCanApply}
        </p>
      </div>
    `;

    container.appendChild(col);
  });
}

function getChipClass(index) {
  if (index === 0) return "primary";
  if (index === 1) return "accent";
  if (index === 2) return "emerald";
  return "gold";
}

function initSaudiVisaSections() {
  renderSaudiVisaOverview();
  renderSaudiVisaServicesList();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSaudiVisaSections);
} else {
  initSaudiVisaSections();
}
