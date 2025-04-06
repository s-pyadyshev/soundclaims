import { mobileMenu } from "./components/mobile-menu.js";
import { tabs } from "./components/tabs.js";
import { toggle } from "./components/toggle.js";
import { scrollspy } from "./components/scrollspy.js";
import { videoFile } from "./components/video-file.js";
import { fileInput } from "./components/fileInput.js";
import { slider } from "./components/slider.js";
import { sliderServices } from "./components/sliderServices.js";
import { sliderOurServices } from "./components/sliderOurServices.js";
import { FancySelect } from "./vendor.js";

window.addEventListener(
  "load",
  () => {
    mobileMenu.init();
    tabs.init();
    toggle.init();
    scrollspy.init();
    videoFile.init();
    fileInput.init();
    slider.init();
    sliderServices.init();
    sliderOurServices.init();
    document.querySelector("body").classList.add("page-loaded");
  },
  false
);
