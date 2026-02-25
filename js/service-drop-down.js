/**
 * service-drop-down.js
 * Populates the main navigation Services dropdown with immigration service links.
 * Runs on DOMContentLoaded; safe to load after navbar is injected.
 */
(function () {
  "use strict";

  var DROPDOWN_ID = "serviceDropdown";

  var servicesDropdown = [
    { name: "Australia Immigration", link: "best-australia-immigration-consultant-in-qatar.html" },
    { name: "US Visa", link: "us-visa-immigration-consultant-in-qatar.html" },
    { name: "Dubai Visa", link: "dubai-visa-from-qatar.html" },
    { name: "Schengen Visa", link: "schengen-visa-from-qatar.html" },
    { name: "Canada Immigration", link: "best-canada-immigration-consultants-in-qatar.html" },
    { name: "UK Immigration", link: "best-uk-immigration-consultant-in-qatar.html" },
  ];

  /**
   * Renders service links into the dropdown container.
   * No-op if container is missing (e.g. page without navbar).
   */
  function renderServicesDropdown() {
    var container = document.getElementById(DROPDOWN_ID);
    if (!container) return;

    container.innerHTML = servicesDropdown
      .map(function (item) {
        return '<a href="' + item.link + '" class="dropdown-item">' + item.name + "</a>";
      })
      .join("");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderServicesDropdown);
  } else {
    renderServicesDropdown();
  }
})();
