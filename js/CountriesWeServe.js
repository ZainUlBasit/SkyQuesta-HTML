// CountriesWeServe.js – renders countries into #countriesContainer when DOM is ready

const countries = [
  { name: "Australia", image: "img/austrailia-country.jpg", flag: "img/austrailia.png", delay: "0.1s" },
  { name: "Canada", image: "img/cannada-country.jpg", flag: "img/canada.png", delay: "0.3s" },
  { name: "United States", image: "img/unitedstates-country.jpg", flag: "img/us.png", delay: "0.5s" },
  { name: "United Kingdom", image: "img/unitedkingdom-country.jpg", flag: "img/uk.png", delay: "0.7s" },
];

function renderCountries() {
  var container = document.getElementById("countriesContainer");
  if (!container) return;

  container.innerHTML = countries
    .map(
      function (country) {
        return (
          '<div class="col-lg-6 col-xl-3 mb-5 mb-xl-0 wow fadeInUp" data-wow-delay="' +
          country.delay +
          '">' +
          '  <div class="country-item">' +
          '    <div class="rounded overflow-hidden">' +
          '      <img src="' + country.image + '" class="img-fluid w-100 rounded" alt="' + country.name + '" />' +
          "    </div>" +
          '    <div class="country-flag">' +
          '      <img src="' + country.flag + '" class="img-fluid rounded-circle" alt="' + country.name + ' Flag" />' +
          "    </div>" +
          '    <div class="country-name">' +
          '      <a href="#" class="text-white fs-4">' + country.name + "</a>" +
          "    </div>" +
          "  </div>" +
          "</div>"
        );
      }
    )
    .join("");

  if (typeof window.WOW !== "undefined") {
    new window.WOW().init();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderCountries);
} else {
  renderCountries();
}