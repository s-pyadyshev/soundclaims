/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/fileInput.js":
/*!****************************************!*\
  !*** ./src/js/components/fileInput.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fileInput: function() { return /* binding */ fileInput; }\n/* harmony export */ });\nconst fileInput = (() => {\n  const init = () => {\n    const fileInputs = document.querySelectorAll(\".js-file-input\");\n    if (fileInputs.length === 0) return;\n    fileInputs.forEach(item => {\n      const input = item.querySelector('input[type=\"file\"]');\n      const inputFilePlaceholder = item.querySelector(\".input-file__placeholder\");\n      const inputFileName = item.querySelector(\".input-file__name\");\n      if (!input) return;\n      input.addEventListener(\"change\", () => {\n        const files = Array.from(input.files);\n        if (files.length) {\n          inputFilePlaceholder.classList.add(\"hidden\");\n          inputFileName.classList.remove(\"hidden\");\n        } else {\n          inputFilePlaceholder.classList.remove(\"hidden\");\n          inputFileName.classList.add(\"hidden\");\n        }\n        inputFileName.textContent = files.length === 0 ? \"\" : files.length === 1 ? files[0].name : `${files.length} files selected`;\n      });\n    });\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/fileInput.js?");

/***/ }),

/***/ "./src/js/components/mobile-menu.js":
/*!******************************************!*\
  !*** ./src/js/components/mobile-menu.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mobileMenu: function() { return /* binding */ mobileMenu; }\n/* harmony export */ });\nconst mobileMenu = (() => {\n  const init = () => {\n    const mobileMenuToggle = document.querySelector(\".js-toggle-menu\");\n    if (!mobileMenuToggle) {\n      return;\n    }\n    const menu = document.querySelector(\".menu\");\n    const menuText = document.querySelectorAll(\".menu__text\");\n    const body = document.querySelector(\"body\");\n    mobileMenuToggle.addEventListener(\"click\", function () {\n      if (!mobileMenuToggle.classList.contains(\"active\")) {\n        mobileMenuToggle.classList.add(\"active\");\n        body.classList.toggle(\"menu-active\");\n        menu.classList.add(\"menu--open\");\n        menu.classList.remove(\"menu--closed\");\n        menuText.forEach(element => {\n          element.classList.toggle(\"menu__text-active\");\n        });\n      } else {\n        mobileMenuToggle.classList.remove(\"active\");\n        body.classList.toggle(\"menu-active\");\n        menu.classList.add(\"menu--closed\");\n        menu.classList.remove(\"menu--open\");\n        menuText.forEach(element => {\n          element.classList.toggle(\"menu__text-active\");\n        });\n      }\n    });\n  };\n  return {\n    init\n  };\n})();\n\n/*\r\n  Есть один баг, который надо в идеале фиксить.\r\n  У нас при смене ширины экрана при открытом меню из мобилки оно остается в очень кривом виде на десктопе. \r\n  В идеале прописать какую-то функцию, при определенной ширине экрана чтобы стили мобилки убирались полностью.\r\n  Либо посмотреть внимательнее css, что-то в нем не так\r\n*/\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/mobile-menu.js?");

/***/ }),

/***/ "./src/js/components/scrollspy.js":
/*!****************************************!*\
  !*** ./src/js/components/scrollspy.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollspy: function() { return /* binding */ scrollspy; }\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/js/helpers.js\");\n\nconst applyScrollspyClasses = elements => {\n  elements.forEach(element => {\n    if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isElementCompletelyInViewport)(element)) {\n      if (element.classList.contains(\"no-animate\")) {\n        return;\n      }\n      const animationClass = element.dataset.scrollspy;\n      element.classList.add(\"animate__animated\");\n      element.classList.add(animationClass);\n    }\n  });\n};\nconst scrollspy = function () {\n  const init = function () {\n    const scrollspyElements = document.querySelectorAll(\"[data-scrollspy]\");\n    if (!scrollspyElements.length) {\n      return;\n    }\n    applyScrollspyClasses(scrollspyElements);\n    document.addEventListener(\"scroll\", (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.throttle)(() => {\n      applyScrollspyClasses(scrollspyElements);\n    }, 100));\n  };\n  return {\n    init\n  };\n}();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/scrollspy.js?");

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slider: function() { return /* binding */ slider; }\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\n\nconst slider = function () {\n  const init = function () {\n    const slider = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".slider\", {\n      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],\n      navigation: {\n        nextEl: \".swiper-button-next\",\n        prevEl: \".swiper-button-prev\"\n      }\n      // pagination: {\n      //   el: \".swiper-pagination\",\n      //   clickable: \"true\",\n      //   type: \"bullets\",\n      //   bulletElement: \"button\",\n      // },\n    });\n  };\n  return {\n    init\n  };\n}();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/slider.js?");

/***/ }),

/***/ "./src/js/components/sliderOurServices.js":
/*!************************************************!*\
  !*** ./src/js/components/sliderOurServices.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sliderOurServices: function() { return /* binding */ sliderOurServices; }\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\n\nconst sliderOurServices = function () {\n  const init = function () {\n    const slider = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".our-services__slider\", {\n      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation],\n      slidesPerView: 'auto',\n      spaceBetween: 30,\n      navigation: {\n        nextEl: \".swiper-button-next\",\n        prevEl: \".swiper-button-prev\"\n      }\n    });\n  };\n  return {\n    init\n  };\n}();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/sliderOurServices.js?");

/***/ }),

/***/ "./src/js/components/sliderServices.js":
/*!*********************************************!*\
  !*** ./src/js/components/sliderServices.js ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sliderServices: function() { return /* binding */ sliderServices; }\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.mjs\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ \"./node_modules/swiper/modules/index.mjs\");\n\n\nconst sliderServices = function () {\n  const init = function () {\n    const slider = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".js-swiper-services\", {\n      modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.EffectFade],\n      effect: 'fade',\n      fadeEffect: {\n        crossFade: true\n      },\n      pagination: {\n        el: \".swiper-pagination\",\n        clickable: \"true\",\n        type: \"bullets\",\n        bulletElement: \"button\"\n      },\n      breakpoints: {\n        1200: {\n          enabled: false\n        }\n      }\n    });\n  };\n  return {\n    init\n  };\n}();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/sliderServices.js?");

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tabs: function() { return /* binding */ tabs; }\n/* harmony export */ });\nconst tabs = (() => {\n  const init = () => {\n    const tabContainers = document.querySelectorAll(\"[data-tabs]\");\n    if (!tabContainers.length) {\n      return;\n    }\n    const dataTabsContent = document.querySelectorAll(`[data-tabs-content] > [data-tab-content]`);\n    dataTabsContent.forEach(item => {\n      if (!item.classList.contains(\"is-active\")) {\n        item.classList.add(\"visually-hidden\");\n      }\n    });\n    tabContainers.forEach(tabContainer => {\n      const currentTab = tabContainer.getAttribute(\"data-tabs\");\n      tabContainer.addEventListener(\"click\", event => {\n        const target = event.target;\n        if (!target.hasAttribute(\"data-tab\")) {\n          return;\n        }\n        const tabButton = target;\n        const tabId = tabButton.getAttribute(\"data-tab\");\n        const matchingTabDataAll = document.querySelectorAll(`[data-tabs-content=\"${currentTab}\"] > [data-tab-content]`);\n        const matchingTabData = document.querySelector(`[data-tabs-content=\"${currentTab}\"] > [data-tab-content=\"${tabId}\"]`);\n        const activeTabContent = document.querySelector(`[data-tabs-content=\"${currentTab}\"] > [data-tab-content].is-active`);\n        const activeTabButton = document.querySelector(`[data-tabs=${currentTab}] > button.is-active`);\n        const tabButtonAll = document.querySelectorAll(`[data-tabs=${currentTab}] > button`);\n        matchingTabDataAll.forEach(item => {\n          item.classList.add(\"visually-hidden\");\n          item.classList.remove(\"is-active\");\n        });\n        activeTabContent.classList.remove(\"is-active\");\n        activeTabButton.classList.remove(\"is-active\");\n        tabButtonAll.forEach(item => item.classList.remove(\"is-active\"));\n        matchingTabData.classList.add(\"is-active\");\n        matchingTabData.classList.remove(\"visually-hidden\");\n        tabButton.classList.add(\"is-active\");\n      });\n    });\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/tabs.js?");

/***/ }),

/***/ "./src/js/components/toggle.js":
/*!*************************************!*\
  !*** ./src/js/components/toggle.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggle: function() { return /* binding */ toggle; }\n/* harmony export */ });\nconst toggle = (() => {\n  const init = () => {\n    const collapseLinks = document.querySelectorAll(\"[data-collapse-target]\");\n    if (!collapseLinks.length) {\n      return;\n    }\n    collapseLinks.forEach(link => {\n      link.addEventListener(\"click\", event => {\n        const collapseTarget = event.target.dataset.collapseTarget;\n        const collapseTargets = document.querySelectorAll(`[data-collapse-target=\"${collapseTarget}\"]`);\n        const target = document.querySelector(`[data-collapse-content=\"${collapseTarget}\"]`);\n        target.classList.toggle(\"active\");\n        collapseTargets.forEach(target => target.classList.toggle(\"active\"));\n      });\n    });\n  };\n  return {\n    init\n  };\n})();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/toggle.js?");

/***/ }),

/***/ "./src/js/components/video-file.js":
/*!*****************************************!*\
  !*** ./src/js/components/video-file.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   videoFile: function() { return /* binding */ videoFile; }\n/* harmony export */ });\nconst videoFile = function () {\n  const init = function () {\n    const video = document.querySelector(\".video__file\");\n    if (!video) return;\n    video.setAttribute(\"src\", \"video/video.mp4\");\n    video.play();\n    video.addEventListener(\"playing\", function () {}, false);\n  };\n  return {\n    init\n  };\n}();\n\n//# sourceURL=webpack://ninelines-template/./src/js/components/video-file.js?");

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   debounce: function() { return /* binding */ debounce; },\n/* harmony export */   isElementCompletelyInViewport: function() { return /* binding */ isElementCompletelyInViewport; },\n/* harmony export */   isElementInViewport: function() { return /* binding */ isElementInViewport; },\n/* harmony export */   throttle: function() { return /* binding */ throttle; }\n/* harmony export */ });\nfunction debounce(func, wait) {\n  let timeout;\n  return function () {\n    if (timeout) {\n      clearTimeout(timeout);\n    }\n    timeout = setTimeout(() => {\n      func.apply(this, arguments);\n    }, wait);\n  };\n}\n\n// const onType = debounce(() => {\n//   // send request\n// }, 500);\n\n// const searchField = document.querySelector(\"#searchField\");\n\n// searchField.addEventListener(\"keydown\", onType);\n\nfunction throttle(func, wait) {\n  let waiting = false;\n  return function () {\n    if (waiting) {\n      return;\n    }\n    waiting = true;\n    setTimeout(() => {\n      func.apply(this, arguments);\n      waiting = false;\n    }, wait);\n  };\n}\n\n// Usage\n// const onScroll = throttle(() => {}, 100);\n\n// document.addEventListener(\"scroll\", onScroll);\n\nfunction isElementInViewport(element) {\n  const rect = element.getBoundingClientRect();\n  const windowHeight = window.innerHeight || document.documentElement.clientHeight;\n  const windowWidth = window.innerWidth || document.documentElement.clientWidth;\n  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;\n  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;\n  return vertInView && horInView;\n}\nfunction isElementCompletelyInViewport(element) {\n  let coordinates = element.getBoundingClientRect();\n  if (coordinates.right > window.innerWidth || coordinates.bottom > window.innerHeight) {\n    return false;\n  }\n  if (coordinates.top < 0 || coordinates.left < 0) {\n    return false;\n  }\n  return true;\n}\n\n//# sourceURL=webpack://ninelines-template/./src/js/helpers.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_mobile_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/mobile-menu.js */ \"./src/js/components/mobile-menu.js\");\n/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tabs.js */ \"./src/js/components/tabs.js\");\n/* harmony import */ var _components_toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toggle.js */ \"./src/js/components/toggle.js\");\n/* harmony import */ var _components_scrollspy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/scrollspy.js */ \"./src/js/components/scrollspy.js\");\n/* harmony import */ var _components_video_file_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/video-file.js */ \"./src/js/components/video-file.js\");\n/* harmony import */ var _components_fileInput_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/fileInput.js */ \"./src/js/components/fileInput.js\");\n/* harmony import */ var _components_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/slider.js */ \"./src/js/components/slider.js\");\n/* harmony import */ var _components_sliderServices_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sliderServices.js */ \"./src/js/components/sliderServices.js\");\n/* harmony import */ var _components_sliderOurServices_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sliderOurServices.js */ \"./src/js/components/sliderOurServices.js\");\n/* harmony import */ var _vendor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vendor.js */ \"./src/js/vendor.js\");\n\n\n\n\n\n\n\n\n\n\nwindow.addEventListener(\"load\", () => {\n  _components_mobile_menu_js__WEBPACK_IMPORTED_MODULE_0__.mobileMenu.init();\n  _components_tabs_js__WEBPACK_IMPORTED_MODULE_1__.tabs.init();\n  _components_toggle_js__WEBPACK_IMPORTED_MODULE_2__.toggle.init();\n  _components_scrollspy_js__WEBPACK_IMPORTED_MODULE_3__.scrollspy.init();\n  _components_video_file_js__WEBPACK_IMPORTED_MODULE_4__.videoFile.init();\n  _components_fileInput_js__WEBPACK_IMPORTED_MODULE_5__.fileInput.init();\n  _components_slider_js__WEBPACK_IMPORTED_MODULE_6__.slider.init();\n  _components_sliderServices_js__WEBPACK_IMPORTED_MODULE_7__.sliderServices.init();\n  _components_sliderOurServices_js__WEBPACK_IMPORTED_MODULE_8__.sliderOurServices.init();\n  document.querySelector(\"body\").classList.add(\"page-loaded\");\n}, false);\n\n//# sourceURL=webpack://ninelines-template/./src/js/main.js?");

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/*!\r\n * Copyright (c) 2021 Momo Bassit.\r\n * Licensed under the MIT License (MIT)\r\n * https://github.com/mdbassit/fancySelect\r\n */\n\n(function (window, document, autoInitialize) {\n  let currentElement = null;\n  let currentFocus = null;\n  let searchString = \"\";\n  let searchTimeout = null;\n  let counter = 0;\n\n  /**\r\n   * Initialize the custom select box elements.\r\n   * @param {string} [selector] An optional selector representing native select elements.\r\n   */\n  function init(selector) {\n    selector = selector || \"select:not(.fsb-ignore)\";\n\n    // Replace all eligible native select elements with custom select boxes\n    document.querySelectorAll(selector).forEach(replaceNativeSelect);\n  }\n\n  /**\r\n   * Replace a native select element with a custom select box.\r\n   * @param {object} select The native select.\r\n   * @param {function} [renderer] An optional custom item label renderer.\r\n   */\n  function replaceNativeSelect(select, renderer) {\n    // Skip if the native select has already been processed\n    if (select.nextElementSibling && select.nextElementSibling.classList.contains(\"fsb-select\")) {\n      return;\n    }\n    const options = select.children;\n    const parentNode = select.parentNode;\n    const customSelect = document.createElement(\"span\");\n    const label = document.createElement(\"span\");\n    const button = document.createElement(\"button\");\n    const list = document.createElement(\"span\");\n    const widthAdjuster = document.createElement(\"span\");\n    const index = counter++;\n\n    // Add a custom CSS class to the native select element\n    select.classList.add(\"fsb-original-select\");\n\n    // Label for accessibility\n    label.id = `fsb_${index}_label`;\n    label.className = \"fsb-label\";\n    label.textContent = getNativeSelectLabel(select, parentNode);\n\n    // List box button\n    button.id = `fsb_${index}_button`;\n    button.className = \"fsb-button\";\n    button.innerHTML = \"&nbsp;\";\n    button.setAttribute(\"type\", \"button\");\n    button.setAttribute(\"aria-disabled\", select.disabled);\n    button.setAttribute(\"aria-haspopup\", \"listbox\");\n    button.setAttribute(\"aria-expanded\", \"false\");\n    button.setAttribute(\"aria-labelledby\", `fsb_${index}_label fsb_${index}_button`);\n\n    // List box\n    list.className = \"fsb-list\";\n    list.setAttribute(\"role\", \"listbox\");\n    list.setAttribute(\"tabindex\", \"-1\");\n    list.setAttribute(\"aria-labelledby\", `fsb_${index}_label`);\n\n    // List items\n    for (let i = 0, len = options.length; i < len; i++) {\n      const {\n        item,\n        selected,\n        itemLabel\n      } = getItemFromOption(options[i], renderer);\n      list.appendChild(item);\n      if (selected) {\n        button.innerHTML = itemLabel;\n      }\n    }\n\n    // Custom select box container\n    customSelect.className = \"fsb-select\";\n    customSelect.appendChild(label);\n    customSelect.appendChild(button);\n    customSelect.appendChild(list);\n    customSelect.appendChild(widthAdjuster);\n\n    // Hide the native select\n    select.style.display = \"none\";\n\n    // Insert the custom select box after the native select\n    if (select.nextSibling) {\n      parentNode.insertBefore(customSelect, select.nextSibling);\n    } else {\n      parentNode.appendChild(customSelect);\n    }\n\n    // Force the select box to take the width of the longest item by default\n    if (list.firstElementChild) {\n      const span = document.createElement(\"span\");\n      span.style.width = `${list.firstElementChild.offsetWidth}px`;\n      widthAdjuster.className = \"fsb-resize\";\n      widthAdjuster.appendChild(span);\n    }\n  }\n\n  /**\r\n   * Update the custom select box attached to a native select.\r\n   * @param {object} select The native select.\r\n   * @param {function} [renderer] An optional custom item label renderer.\r\n   */\n  function updateFromNativeSelect(select, renderer) {\n    const options = select.children;\n    const parentNode = select.parentNode;\n    const customSelect = select.nextElementSibling;\n\n    // Abort if this native select hasn't been initialized\n    if (!customSelect || !customSelect.classList.contains(\"fsb-select\")) {\n      return;\n    }\n    const label = customSelect.firstElementChild;\n    const button = label.nextElementSibling;\n    const list = button.nextElementSibling;\n    const widthAdjuster = list.nextElementSibling;\n    const listContent = document.createDocumentFragment();\n\n    // Update the accessibility label\n    label.textContent = getNativeSelectLabel(select, parentNode);\n\n    // Update the button status\n    button.setAttribute(\"aria-disabled\", select.disabled);\n\n    // Generate the list items\n    for (let i = 0, len = options.length; i < len; i++) {\n      const {\n        item,\n        selected,\n        itemLabel\n      } = getItemFromOption(options[i], renderer);\n      listContent.appendChild(item);\n      if (selected) {\n        button.innerHTML = itemLabel;\n      }\n    }\n\n    // Clear the list box\n    while (list.firstChild) {\n      list.removeChild(list.firstChild);\n    }\n\n    // Update the list items\n    list.appendChild(listContent);\n\n    // Force the select box to take the width of the longest item by default\n    if (list.firstElementChild) {\n      widthAdjuster.firstElementChild.style.width = `${list.firstElementChild.offsetWidth}px`;\n    }\n  }\n\n  /**\r\n   * Try to guess the native select element's label if any.\r\n   * @param {object} select The native select.\r\n   * @param {object} parent The parent node.\r\n   * @return {string} The native select's label or an empty string.\r\n   */\n  function getNativeSelectLabel(select, parent) {\n    const id = select.id;\n    let labelElement;\n\n    // If the select element is inside a label element\n    if (parent.nodeName === \"LABEL\") {\n      labelElement = parent;\n\n      // Or if the select element has an ID, and there is a label element\n      // with an attribute \"for\" that points to that ID\n    } else if (id !== undefined) {\n      labelElement = document.querySelector(`label[for=\"${id}\"]`);\n    }\n\n    // If a label element is found, return the first non empty child text node\n    if (labelElement) {\n      const textNodes = [].filter.call(labelElement.childNodes, n => n.nodeType === 3);\n      const texts = textNodes.map(n => n.textContent.replace(/\\s+/g, \" \").trim());\n      const label = texts.filter(l => l !== \"\")[0];\n      if (label) {\n        // Open the list box on click on the label element\n        labelElement.onclick = event => {\n          select.nextElementSibling.querySelector(\"button\").click();\n          event.preventDefault();\n          event.stopImmediatePropagation();\n        };\n        return label;\n      }\n    }\n    return \"\";\n  }\n\n  /**\r\n   * Generate a listbox item from a native select option.\r\n   * @param {object} option The native select option.\r\n   * @param {function} [renderer] An optional custom item label renderer.\r\n   * @return {object} The listbox item, its selected state and its label.\r\n   */\n  function getItemFromOption(option, renderer) {\n    const item = document.createElement(\"span\");\n    const selected = option.selected;\n    const itemLabel = getItemLabel(option, renderer);\n    item.className = \"fsb-option\";\n    item.innerHTML = itemLabel;\n    item.setAttribute(\"role\", \"option\");\n    item.setAttribute(\"tabindex\", \"-1\");\n    item.setAttribute(\"aria-selected\", selected);\n    if (option.disabled) {\n      item.setAttribute(\"aria-disabled\", option.disabled);\n    }\n    return {\n      item,\n      selected,\n      itemLabel\n    };\n  }\n\n  /**\r\n   * Render a listbox item's label.\r\n   * @param {object} option The native select option.\r\n   * @param {function} [renderer] An optional custom item label renderer.\r\n   * @return {string} The listbox item's label.\r\n   */\n  function getItemLabel(option, renderer) {\n    if (typeof renderer === \"function\") {\n      return renderer(option);\n    }\n    const text = option.text;\n    const icon = option.getAttribute(\"data-icon\");\n    let label = text !== \"\" ? text : \"&nbsp;\";\n\n    // Wrap label in a span to better handle long text\n    label = `<span>${label}</span>`;\n    if (icon !== null) {\n      label = `<svg aria-hidden=\"true\"><use href=\"${icon}\"></use></svg> ${label}`;\n    }\n    return label;\n  }\n\n  /**\r\n   * Open a list box.\r\n   * @param {object} button The button to which the list box is attached.\r\n   */\n  function openListBox(button) {\n    const rect = button.getBoundingClientRect();\n    const list = button.nextElementSibling;\n    let selectedItem = list.querySelector('[aria-selected=\"true\"]');\n    if (!selectedItem) {\n      selectedItem = list.firstElementChild;\n    }\n\n    // Open the list box and focus the selected item\n    button.parentNode.className = \"fsb-select\";\n    button.setAttribute(\"aria-expanded\", \"true\");\n    selectedItem.focus();\n    currentElement = button;\n    currentFocus = selectedItem;\n\n    // Position the list box on top of the button if there isn't enough space on the bottom\n    if (rect.y + rect.height + list.offsetHeight > document.documentElement.clientHeight) {\n      button.parentNode.className = \"fsb-select fsb-top\";\n    }\n  }\n\n  /**\r\n   * Close the active list box.\r\n   * @param {boolean} focusButton If true, set focus on the button to which the list box is attached.\r\n   */\n  function closeListBox(focusButton) {\n    const activeListBox = document.querySelector('.fsb-button[aria-expanded=\"true\"]');\n    if (activeListBox) {\n      activeListBox.setAttribute(\"aria-expanded\", \"false\");\n      if (focusButton) {\n        activeListBox.focus();\n      }\n\n      // Clear the search string in case someone is a ninja!!!\n      searchString = \"\";\n      searchTimeout = null;\n    }\n    currentElement = null;\n    currentFocus = null;\n  }\n\n  /**\r\n   * Set the selected item.\r\n   * @param {object} item The item to be selected.\r\n   */\n  function selectItem(item) {\n    const list = item.parentNode;\n    const button = list.previousElementSibling;\n    const itemIndex = [].indexOf.call(list.children, item);\n    const selectedItem = list.querySelector('[aria-selected=\"true\"]');\n    const originalSelect = list.parentNode.previousElementSibling;\n    if (selectedItem) {\n      selectedItem.setAttribute(\"aria-selected\", \"false\");\n    }\n    item.setAttribute(\"aria-selected\", \"true\");\n    button.innerHTML = item.innerHTML;\n\n    // Update the original select\n    originalSelect.selectedIndex = itemIndex;\n    originalSelect.dispatchEvent(new Event(\"input\", {\n      bubbles: true\n    }));\n    originalSelect.dispatchEvent(new Event(\"change\", {\n      bubbles: true\n    }));\n  }\n\n  /**\r\n   * Get the next item that matches a string.\r\n   * @param {object} list The active list box.\r\n   * @param {string} search The search string.\r\n   * @return {object} The item that matches the string.\r\n   */\n  function getMatchingItem(list, search) {\n    const items = [].map.call(list.children, item => item.textContent.trim().toLowerCase());\n    const firstMatch = filterItems(items, search)[0];\n\n    // If an exact match is found, return it\n    if (firstMatch) {\n      return list.children[items.indexOf(firstMatch)];\n\n      // If the search string is the same character repeated multiple times\n      // we need to cycle through the items starting with that character\n    } else if (isRepeatedCharacter(search)) {\n      // Get all the items matching the character\n      const matches = filterItems(items, search[0]);\n\n      // The match we want depends on the length of the repeated string\n      // e.g: \"aa\" means the second item starting with \"a\"\n      const matchIndex = (search.length - 1) % matches.length;\n\n      // Return the match\n      const match = matches[matchIndex];\n      return list.children[items.indexOf(match)];\n    }\n    return null;\n  }\n\n  /**\r\n   * Focus the next item that matches a string.\r\n   * @param {object} list The active list box.\r\n   */\n  function focusMatchingItem(list) {\n    const item = getMatchingItem(list, searchString);\n    if (item) {\n      item.focus();\n    }\n  }\n\n  /**\r\n   * Filter an array of string.\r\n   * @param {array} items.\r\n   * @param {string} filter The filter string.\r\n   * @return {array} The array items that matches the filter.\r\n   */\n  function filterItems(items, filter) {\n    return items.filter(item => item.indexOf(filter.toLowerCase()) === 0);\n  }\n\n  /**\r\n   * Check if the the user is typing printable characters.\r\n   * @param {object} event A keydown event.\r\n   * @return {boolean} True if the key pressed is a printable character.\r\n   */\n  function isTyping(event) {\n    const {\n      key,\n      altKey,\n      ctrlKey,\n      metaKey\n    } = event;\n    if (key.length === 1 && !altKey && !ctrlKey && !metaKey) {\n      if (searchTimeout) {\n        window.clearTimeout(searchTimeout);\n      }\n      searchTimeout = window.setTimeout(() => {\n        searchString = \"\";\n      }, 500);\n      searchString += key;\n      return true;\n    }\n    return false;\n  }\n\n  /**\r\n   * Check if a string is the same character repeated multiple times.\r\n   * @param {string} str The string to check.\r\n   * @return {boolean} True if the string the same character repeated multiple times (e.g \"aaa\").\r\n   */\n  function isRepeatedCharacter(str) {\n    const characters = str.split(\"\");\n    return characters.every(char => char === characters[0]);\n  }\n\n  /**\r\n   * Find and focus the closest active option.\r\n   * @param {object} option The starting option.\r\n   * @param {string} dir The direction of the lookup (next, prev).\r\n   */\n  function focusClosestActiveOption(option, dir) {\n    if (!option) {\n      return;\n    }\n\n    // Focus the starting option itself if it's active\n    if (!option.getAttribute(\"aria-disabled\")) {\n      currentFocus = option;\n      return option.focus();\n    }\n    const options = Array.from(option.parentNode.children);\n    const index = options.indexOf(option);\n    if (dir === \"next\") {\n      for (let i = index + 1, len = options.length; i < len; i++) {\n        if (!options[i].getAttribute(\"aria-disabled\")) {\n          currentFocus = options[i];\n          return options[i].focus();\n        }\n      }\n    } else {\n      for (let i = index - 1; i >= 0; i--) {\n        if (!options[i].getAttribute(\"aria-disabled\")) {\n          currentFocus = options[i];\n          return options[i].focus();\n        }\n      }\n    }\n  }\n\n  /**\r\n   * Shortcut for addEventListener with delegation support.\r\n   * @param {object} context The context to which the listener is attached.\r\n   * @param {string} type Event type.\r\n   * @param {(string|function)} selector Event target if delegation is used, event handler if not.\r\n   * @param {function} [fn] Event handler if delegation is used.\r\n   */\n  function addListener(context, type, selector, fn) {\n    const matches = Element.prototype.matches || Element.prototype.msMatchesSelector;\n\n    // Delegate event to the target of the selector\n    if (typeof selector === \"string\") {\n      context.addEventListener(type, event => {\n        if (matches.call(event.target, selector)) {\n          fn.call(event.target, event);\n        }\n      });\n\n      // If the selector is not a string then it's a function\n      // in which case we need regular event listener\n    } else {\n      fn = selector;\n      context.addEventListener(type, fn);\n    }\n  }\n\n  /**\r\n   * Call a function only when the DOM is ready.\r\n   * @param {function} fn The function to call.\r\n   * @param {array} [args] Arguments to pass to the function.\r\n   */\n  function DOMReady(fn, args) {\n    args = args !== undefined ? args : [];\n    if (document.readyState !== \"loading\") {\n      fn(...args);\n    } else {\n      document.addEventListener(\"DOMContentLoaded\", () => {\n        fn(...args);\n      });\n    }\n  }\n\n  // On click on the list box button\n  addListener(document, \"click\", \".fsb-button\", event => {\n    const isClickToClose = currentElement === event.target;\n    closeListBox();\n    if (!isClickToClose) {\n      openListBox(event.target);\n    }\n    event.preventDefault();\n    event.stopImmediatePropagation();\n  });\n\n  // On key press on the list box button\n  addListener(document, \"keydown\", \".fsb-button\", event => {\n    const button = event.target;\n    const list = button.nextElementSibling;\n    let preventDefault = true;\n    switch (event.key) {\n      case \"ArrowUp\":\n      case \"ArrowDown\":\n      case \"Enter\":\n      case \" \":\n        openListBox(button);\n        break;\n      default:\n        if (isTyping(event)) {\n          openListBox(button);\n          focusMatchingItem(list);\n        } else {\n          preventDefault = false;\n        }\n    }\n    if (preventDefault) {\n      event.preventDefault();\n    }\n  });\n\n  // When the mouse moves on an item, focus it.\n  // Use mousemove instead of mouseover to prevent accidental focus on the wrong item,\n  // namely when the list box is opened with a keyboard shortcut, and the mouse arrow\n  // just happens to be on an item.\n  addListener(document.documentElement, \"mousemove\", '.fsb-option:not([aria-disabled=\"true\"])', event => {\n    event.target.focus();\n    currentFocus = event.target;\n  });\n\n  // On click on an item\n  addListener(document, \"click\", \".fsb-option\", event => {\n    const item = event.target;\n    if (!item.getAttribute(\"aria-disabled\")) {\n      selectItem(item);\n      closeListBox(true);\n    } else {\n      event.stopImmediatePropagation();\n      currentFocus.focus();\n    }\n  });\n\n  // On key press on an item\n  addListener(document, \"keydown\", \".fsb-option\", event => {\n    const item = event.target;\n    const list = item.parentNode;\n    let preventDefault = true;\n    switch (event.key) {\n      case \"ArrowUp\":\n      case \"ArrowLeft\":\n        focusClosestActiveOption(item.previousElementSibling, \"prev\");\n        break;\n      case \"ArrowDown\":\n      case \"ArrowRight\":\n        focusClosestActiveOption(item.nextElementSibling, \"next\");\n        break;\n      case \"Home\":\n        focusClosestActiveOption(list.firstElementChild, \"next\");\n        break;\n      case \"End\":\n        focusClosestActiveOption(list.lastElementChild, \"prev\");\n        break;\n      case \"PageUp\":\n      case \"PageDown\":\n        // Disable Page Up and Page Down keys\n        break;\n      case \"Tab\":\n        selectItem(item);\n        closeListBox();\n        preventDefault = false;\n        break;\n      case \"Enter\":\n      case \" \":\n        selectItem(item);\n      case \"Escape\":\n        closeListBox(true);\n        break;\n      default:\n        if (isTyping(event)) {\n          focusMatchingItem(list);\n        } else {\n          preventDefault = false;\n        }\n    }\n    if (preventDefault) {\n      event.preventDefault();\n    }\n  });\n\n  // On click outside the custom select box, close it\n  addListener(document, \"click\", event => {\n    closeListBox();\n  });\n\n  // Expose the constructor to the global scope\n  window.FancySelect = (() => {\n    function FancySelect() {\n      DOMReady(init);\n    }\n\n    // Available methodes\n    FancySelect.init = init;\n    FancySelect.replace = replaceNativeSelect;\n    FancySelect.update = updateFromNativeSelect;\n    return FancySelect;\n  })();\n\n  // Initialize the custom select boxes when the DOM is ready\n  if (autoInitialize) {\n    DOMReady(init);\n  }\n})(window, document, typeof FancySelectAutoInitialize !== \"undefined\" ? FancySelectAutoInitialize : true);\n\n//# sourceURL=webpack://ninelines-template/./src/js/vendor.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkninelines_template"] = self["webpackChunkninelines_template"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;