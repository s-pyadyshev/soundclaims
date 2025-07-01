export const map = (function () {
  const init = function () {
    const container = document.querySelector(".where-we-operate__text");

    if (container === undefined || container === null) {
      return;
    }

    const countryMapElements = container.querySelectorAll("[data-country-map]");

    countryMapElements.forEach((mapElement) => {
      const mapId = mapElement.getAttribute("data-country-map");

      mapElement.addEventListener("mouseenter", function () {
        const templateElement = document.querySelector(
          `[data-template="${mapId}"]`
        );
        if (templateElement) {
          templateElement.classList.add("is-hover");
        }
      });

      mapElement.addEventListener("mouseleave", function () {
        const templateElement = document.querySelector(
          `[data-template="${mapId}"]`
        );
        if (templateElement) {
          templateElement.classList.remove("is-hover");
        }
      });
    });
  };

  return {
    init,
  };
})();
