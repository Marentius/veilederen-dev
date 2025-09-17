/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/passnøkler.svg":
/*!***********************************!*\
  !*** ./src/assets/passnøkler.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/passnøkler.svg\";\n\n//# sourceURL=webpack://webpack-veilederen/./src/assets/passn%C3%B8kler.svg?\n}");

/***/ }),

/***/ "./src/assets/veilederen.webp":
/*!************************************!*\
  !*** ./src/assets/veilederen.webp ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/veilederen.webp\";\n\n//# sourceURL=webpack://webpack-veilederen/./src/assets/veilederen.webp?\n}");

/***/ }),

/***/ "./src/img/heroBig.webp":
/*!******************************!*\
  !*** ./src/img/heroBig.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"img/heroBig.webp\";\n\n//# sourceURL=webpack://webpack-veilederen/./src/img/heroBig.webp?\n}");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _img_heroBig_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/heroBig.webp */ \"./src/img/heroBig.webp\");\n/* harmony import */ var _assets_veilederen_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/veilederen.webp */ \"./src/assets/veilederen.webp\");\n/* harmony import */ var _assets_passn_kler_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/passnøkler.svg */ \"./src/assets/passnøkler.svg\");\n\r\n\r\n\r\n\r\n\r\n(function () {\r\n  // ---------------------------\r\n  // Config & Helpers\r\n  // ---------------------------\r\n  const CONFIG = {\r\n    sideImageUrl: _img_heroBig_webp__WEBPACK_IMPORTED_MODULE_1__,\r\n    sideImageAlt: \"Veilederen\",\r\n    hero: {\r\n      titleHTML: `Det <span class=\"trygge\">trygge</span> valget`,\r\n      subtitle: \"Med tillit fra over 330 norske kommuner siden 2002.\",\r\n    },\r\n    footerLinks: [\r\n      { text: \"Tjenestevilkår\", href: \"https://www.veilederen.no/\" },\r\n      { text: \"Personvern\", href: \"https://www.veilederen.no/\" },\r\n      { text: \"Kontakt oss\", href: \"https://www.veilederen.no/\" },\r\n    ],\r\n  };\r\n\r\n  const ready = (fn) =>\r\n    document.readyState === \"loading\"\r\n      ? document.addEventListener(\"DOMContentLoaded\", fn, { once: true })\r\n      : fn();\r\n\r\n  const querySelector = (sel, root = document) => root.querySelector(sel);\r\n  const querySelectorAll = (sel, root = document) => Array.from(root.querySelectorAll(sel));\r\n  const createElement = (tag, opts = {}) => Object.assign(document.createElement(tag), opts);\r\n  const addClassOnce = (node, className) => {\r\n    if (!node || !className) return false;\r\n    if (node.classList.contains(className)) return false;\r\n    node.classList.add(className);\r\n    return true;\r\n  };\r\n  const setStyleNone = (node) => {\r\n    if (!node) return;\r\n    node.style.background = \"none\";\r\n    node.style.backgroundImage = \"none\";\r\n  };\r\n\r\n  // ---------------------------\r\n  // Background & Base Layout\r\n  // ---------------------------\r\n  function removeOriginalBackground() {\r\n    [document.documentElement, document.body, querySelector(\"#page-login-index\"), querySelector(\".body-content\")].forEach(setStyleNone);\r\n    [\".backstretch\", \"#backstretch\", \".login__background\", \".cover-image\"].forEach((sel) =>\r\n      querySelectorAll(sel).forEach((n) => n.remove())\r\n    );\r\n  }\r\n\r\n  function ensureSplitLayout() {\r\n    if (document.body.classList.contains(\"veilederen-split\")) return;\r\n\r\n    const loginCard =\r\n      querySelector(\".form-box.form-box-login\") || querySelector(\"#page-login-index .form-box\");\r\n    if (!loginCard) return;\r\n\r\n    let main = querySelector(\".main-container\");\r\n    if (!main) {\r\n      main = createElement(\"div\", { className: \"main-container\" });\r\n      document.body.prepend(main);\r\n    }\r\n\r\n    let side = querySelector(\".side-image\", main);\r\n    if (!side) {\r\n      side = createElement(\"div\", { className: \"side-image\" });\r\n      main.prepend(side);\r\n    }\r\n    side.style.setProperty(\"--side-image\", `url(\"${CONFIG.sideImageUrl}\")`);\r\n    side.setAttribute(\"aria-label\", CONFIG.sideImageAlt || \"Brand image\");\r\n\r\n    if (!querySelector(\".hero-text\", side)) {\r\n      const heroText = createElement(\"div\", { className: \"hero-text\" });\r\n      heroText.innerHTML = `\r\n        <h2 class=\"hero-title\">${CONFIG.hero.titleHTML}</h2>\r\n        <p class=\"hero-subtitle\">${CONFIG.hero.subtitle}</p>\r\n      `;\r\n      side.appendChild(heroText);\r\n    }\r\n\r\n    let inner = querySelector(\".inner-container\", main);\r\n    if (!inner) {\r\n      inner = createElement(\"div\", { className: \"inner-container\" });\r\n      main.appendChild(inner);\r\n    }\r\n\r\n    createLogoContainer(inner);\r\n    if (!inner.contains(loginCard)) inner.appendChild(loginCard);\r\n\r\n    document.body.classList.add(\"veilederen-split\");\r\n  }\r\n\r\n  function createLogoContainer(container) {\r\n    if (querySelector(\".logo-container\", container)) return;\r\n    const logoContainer = createElement(\"div\", { className: \"logo-container\" });\r\n    logoContainer.innerHTML = `<img class=\"logo\" src=\"${_assets_veilederen_webp__WEBPACK_IMPORTED_MODULE_2__}\" alt=\"Veilederen\">`;\r\n    container.appendChild(logoContainer);\r\n  }\r\n\r\n  // ---------------------------\r\n  // Form: Labels & Remember Me\r\n  // ---------------------------\r\n  function moveRememberMeCheckbox() {\r\n    const remember = querySelector(\".form-group-rememberusername, .form-group-rememberme\");\r\n    if (!remember || remember.classList.contains(\"remember-me-moved\")) return;\r\n\r\n    const emailGroup = querySelector(\".form-group-login-username\");\r\n    const nextBtnGroup = querySelector(\".form-group-login-button\");\r\n    if (emailGroup && nextBtnGroup) {\r\n      emailGroup.parentNode.insertBefore(remember, nextBtnGroup);\r\n      remember.classList.add(\"remember-me-moved\");\r\n    }\r\n    updateRememberMeText();\r\n  }\r\n\r\n  function updateRememberMeText() {\r\n    const rememberMeText = querySelector(\"#login-remember-user-text\");\r\n    if (rememberMeText) {\r\n      rememberMeText.innerHTML =\r\n        'Husk meg<p class=\"text-disabled\"><small>Ikke anbefalt på offentlig eller delt datamaskin</small></p>';\r\n    }\r\n  }\r\n\r\n  // ---------------------------\r\n  // Footer Links\r\n  // ---------------------------\r\n  function upsertFooterLinks(parent) {\r\n    if (!parent) return;\r\n    let footer = querySelector(\".footer-links\", parent);\r\n    if (!footer) {\r\n      footer = createElement(\"div\", { className: \"footer-links\" });\r\n      parent.appendChild(footer);\r\n    }\r\n    if (!addClassOnce(footer, \"footer-links--initialized\")) return;\r\n\r\n    CONFIG.footerLinks.forEach((link, idx) => {\r\n      const a = createElement(\"a\", { className: \"footer-link\", href: link.href });\r\n      a.textContent = link.text;\r\n      footer.appendChild(a);\r\n      if (idx < CONFIG.footerLinks.length - 1) {\r\n        const sep = createElement(\"span\", { className: \"footer-link-separator\" });\r\n        sep.textContent = \"  \";\r\n        footer.appendChild(sep);\r\n      }\r\n    });\r\n  }\r\n\r\n  function updateRegisterLink() {\r\n    const registerLink = querySelector(\"#GoToRegister\");\r\n    if (!registerLink || registerLink.classList.contains(\"register-link-styled\")) {\r\n      if (!registerLink && querySelector('input[type=\"password\"]')) {\r\n        const formBox = querySelector(\".form-box.form-box-login\");\r\n        if (formBox) upsertFooterLinks(formBox);\r\n      }\r\n      return;\r\n    }\r\n\r\n    // Unngå duplikat av register-link-container\r\n    if (querySelector(\".register-link-container\")) return;\r\n\r\n    registerLink.textContent = \"Opprett bruker\";\r\n    registerLink.classList.add(\"register-link-styled\");\r\n    // Fjern høyre-justering hvis plattformen har satt dette\r\n    registerLink.classList.remove(\"pull-right\");\r\n\r\n    const horizontal = querySelector(\".horizontal-provider-buttons\");\r\n\r\n    const wrapper = createElement(\"div\", { className: \"register-link-container\" });\r\n\r\n    const text = createElement(\"span\", { className: \"register-text\" });\r\n    text.textContent = \"Har du ikke en konto? \";\r\n\r\n    wrapper.appendChild(text);\r\n    wrapper.appendChild(registerLink);\r\n\r\n    // Legg til ny \"Opprett prøvebruker\" knapp\r\n    const provebrukerLink = createElement(\"a\", {\r\n      href: \"https://www.veilederen.no/provebruker/\",\r\n      className: \"register-link-styled provebruker-link\",\r\n      target: \"_blank\",\r\n      rel: \"noopener noreferrer\"\r\n    });\r\n    provebrukerLink.textContent = \"Opprett prøvebruker\";\r\n    \r\n    wrapper.appendChild(provebrukerLink);\r\n\r\n    // Finn et passende sted å plassere wrapperen\r\n    const loginButtonGroup = querySelector(\".form-group-login-button\");\r\n    if (horizontal && horizontal.parentNode) {\r\n      horizontal.parentNode.insertBefore(wrapper, horizontal.nextSibling);\r\n    } else if (loginButtonGroup && loginButtonGroup.parentNode) {\r\n      loginButtonGroup.parentNode.insertBefore(wrapper, loginButtonGroup.nextSibling);\r\n    } else {\r\n      const formBox = querySelector(\".form-box.form-box-login\") || querySelector(\"#page-login-index\");\r\n      if (formBox && formBox.parentNode) {\r\n        formBox.parentNode.insertBefore(wrapper, formBox.nextSibling);\r\n      }\r\n    }\r\n\r\n    upsertFooterLinks(wrapper);\r\n  }\r\n\r\n  // ---------------------------\r\n  // External Providers\r\n  // ---------------------------\r\n  function createFido2Button() {\r\n    const button = createElement(\"a\", {\r\n      className: \"external-provider-but external-provider-but-v2 provider-button-styled\",\r\n      id: \"fido2-external-auth-button\",\r\n      href: \"/fido2\",\r\n    });\r\n    const img = createElement(\"img\", { src: _assets_passn_kler_svg__WEBPACK_IMPORTED_MODULE_3__, alt: \"Passnøkler\" });\r\n    const span = createElement(\"span\");\r\n    span.textContent = \"Passnøkler\";\r\n    button.append(img, span);\r\n    return button;\r\n  }\r\n\r\n  function reorganizeExternalProviders() {\r\n    if (querySelector(\".horizontal-provider-buttons\")) return;\r\n\r\n    const external = querySelector(\".form-footer.external-providers\");\r\n    if (!external) return;\r\n\r\n    const allButtons = querySelectorAll(\".external-provider-but\", external);\r\n    const providerButtons = allButtons.filter((b) => {\r\n      const id = (b.id || \"\").toLowerCase();\r\n      const txt = (b.textContent || \"\").toLowerCase();\r\n      const isMicrosoft = id.includes(\"microsoft\") || txt.includes(\"microsoft\");\r\n      const isFido2 = id.includes(\"fido2\") || txt.includes(\"passnøkler\") || txt.includes(\"fido2\");\r\n      return isMicrosoft || isFido2;\r\n    });\r\n\r\n    const hasFido2 = providerButtons.some(\r\n      (btn) =>\r\n        btn.id?.toLowerCase().includes(\"fido2\") ||\r\n        btn.textContent?.toLowerCase().includes(\"passnøkler\") ||\r\n        btn.textContent?.toLowerCase().includes(\"fido2\")\r\n    );\r\n    if (!hasFido2) providerButtons.push(createFido2Button());\r\n    if (providerButtons.length === 0) return;\r\n\r\n    const horizontal = createElement(\"div\", { className: \"horizontal-provider-buttons\" });\r\n\r\n    const title = createElement(\"div\", { className: \"login-methods-title\" });\r\n    const line = createElement(\"div\", { className: \"title-line\" });\r\n    const titleText = createElement(\"span\", { className: \"title-text\" });\r\n    titleText.textContent = \"Andre innloggingsmetoder\";\r\n    title.append(line, titleText, line.cloneNode(true));\r\n\r\n    const buttons = createElement(\"div\", { className: \"provider-buttons-container\" });\r\n    providerButtons.forEach((btn) => {\r\n      btn.classList.add(\"provider-button-styled\");\r\n      const id = (btn.id || \"\").toLowerCase();\r\n      if (id.includes(\"microsoft\")) {\r\n        const span = querySelector(\"span\", btn) || createElement(\"span\");\r\n        span.textContent = \"Microsoft\";\r\n        if (!span.isConnected) btn.appendChild(span);\r\n      }\r\n      buttons.appendChild(btn);\r\n    });\r\n\r\n    horizontal.append(title, buttons);\r\n    external.parentNode.insertBefore(horizontal, external.nextSibling);\r\n    external.style.display = \"none\";\r\n  }\r\n\r\n  // ---------------------------\r\n  // Boot & Dynamic Observing\r\n  // ---------------------------\r\n  function processStatic() {\r\n    const hasExternalProviders = querySelector(\".form-footer.external-providers\");\r\n    const hasRegisterLink = querySelector(\"#GoToRegister\");\r\n    const hasPasswordField = querySelector('input[type=\"password\"]');\r\n    const hasFormBox = querySelector(\".form-box.form-box-login\");\r\n    const hasLoginForm = querySelector(\"#page-login-index\");\r\n    \r\n    if (!hasExternalProviders && !hasRegisterLink && !hasPasswordField && !hasFormBox && !hasLoginForm) {\r\n      return;\r\n    }\r\n\r\n    removeOriginalBackground();\r\n    ensureSplitLayout();\r\n    \r\n    if (hasExternalProviders) {\r\n      reorganizeExternalProviders();\r\n    }\r\n    \r\n    moveRememberMeCheckbox();\r\n    updateRememberMeText();\r\n\r\n    requestAnimationFrame(() => {\r\n      updateRegisterLink();\r\n      \r\n      if (hasLoginForm && !hasExternalProviders) {\r\n        const formBox = querySelector(\".form-box.form-box-login\");\r\n        if (formBox) upsertFooterLinks(formBox);\r\n      }\r\n      \r\n      if (!querySelector(\"#GoToRegister\") && querySelector('input[type=\"password\"]')) {\r\n        const formBox = querySelector(\".form-box.form-box-login\");\r\n        if (formBox) upsertFooterLinks(formBox);\r\n      }\r\n    });\r\n  }\r\n\r\n  function processDynamic(mutations) {\r\n    let shouldProcess = false;\r\n    for (const m of mutations) {\r\n      if (m.type === \"childList\" && m.addedNodes.length > 0) {\r\n        for (const node of m.addedNodes) {\r\n          if (\r\n            node.nodeType === 1 &&\r\n            (node.classList?.contains(\"form-box\") ||\r\n              node.querySelector?.(\".form-box\") ||\r\n              node.classList?.contains(\"external-provider-but\") ||\r\n              node.id === \"page-login-index\")\r\n          ) {\r\n            shouldProcess = true;\r\n            break;\r\n          }\r\n        }\r\n      }\r\n      if (shouldProcess) break;\r\n    }\r\n\r\n    if (shouldProcess) {\r\n      updateRememberMeText();\r\n      requestAnimationFrame(() => {\r\n        updateRegisterLink();\r\n        \r\n        const hasLoginForm = querySelector(\"#page-login-index\");\r\n        const hasExternalProviders = querySelector(\".form-footer.external-providers\");\r\n        if (hasLoginForm && !hasExternalProviders) {\r\n          const formBox = querySelector(\".form-box.form-box-login\");\r\n          if (formBox) upsertFooterLinks(formBox);\r\n        }\r\n        \r\n        if (!querySelector(\"#GoToRegister\") && querySelector('input[type=\"password\"]')) {\r\n          const formBox = querySelector(\".form-box.form-box-login\");\r\n          if (formBox) upsertFooterLinks(formBox);\r\n        }\r\n      });\r\n    }\r\n  }\r\n\r\n  ready(() => {\r\n    processStatic();\r\n\r\n    const mo = new MutationObserver(processDynamic);\r\n    mo.observe(document.body, {\r\n      childList: true,\r\n      subtree: true,\r\n    });\r\n  });\r\n})();\r\n\n\n//# sourceURL=webpack://webpack-veilederen/./src/js/index.js?\n}");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-veilederen/./src/scss/index.scss?\n}");

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
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;