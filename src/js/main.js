import { mobileMenu } from "./components/mobile-menu.js";
import { tabs } from "./components/tabs.js";
import { toggle } from "./components/toggle.js";
import { scrollspy } from "./components/scrollspy.js";
import { videoFile } from "./components/video-file.js";
import { fileInput } from "./components/fileInput.js";
import { slider } from "./components/slider.js";
import { sliderServices } from "./components/sliderServices.js";
import { sliderOurServices } from "./components/sliderOurServices.js";
import { sliderTeams } from "./components/sliderTeams.js";
import { sliderFacts } from "./components/sliderFacts.js";
import { sliderNews } from "./components/sliderNews.js";
import { sliderOtherNews } from "./components/sliderOtherNews.js";
import { map } from "./components/map.js";
import { mapCountryDetails } from "./components/map-country-details.js";
import tippy from "tippy.js";
import FancySelect from './vendor/fancySelect.js';

window.addEventListener(
  "load",
  () => {
    FancySelect.init();
    mobileMenu.init();
    toggle.init();
    scrollspy.init();
    videoFile.init();
    fileInput.init();
    slider.init();
    sliderServices.init();
    sliderOurServices.init();
    sliderTeams.init();
    sliderFacts.init();
    sliderNews.init();
    sliderOtherNews.init();
    map.init();
    tabs.init();
    mapCountryDetails.init();

    tippy("[data-template]", {
      content(reference) {
        const id = reference.getAttribute("data-template");
        const template = document.getElementById(id);
        return template?.innerHTML || null;
      },
      allowHTML: true,
      arrow: true,
    });
    document.querySelector("body").classList.add("page-loaded");
  },
  false
);
