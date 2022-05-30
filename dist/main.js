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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Article */ \"./src/js/Article.js\");\n\r\n\r\nconst data = [\r\n  {\r\n    id: 1,\r\n    title: \"Increasing Prosperity With Positive Thinking\",\r\n    urlToImage: \"./src/img/strategies/1.jpg\",\r\n    tags: [\"Art\", \"Design\"],\r\n    content:\r\n      \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\r\n    date: \"01.01.2020\",\r\n  },\r\n  {\r\n    id: 2,\r\n    title: \"Motivation Is The First Step To Success\",\r\n    urlToImage: \"./src/img/strategies/2.jpg\",\r\n    tags: [\"Culture\"],\r\n    content:\r\n      \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\r\n    date: \"01.01.2020\",\r\n  },\r\n  {\r\n    id: 3,\r\n    title: \"Success Steps For Your Personal Or Business Life\",\r\n    urlToImage: \"./src/img/strategies/3.jpg\",\r\n    tags: [\"Culture\", \"Design\", \"Art\"],\r\n    content:\r\n      \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\r\n    date: \"01.01.2020\",\r\n  },\r\n  {\r\n    id: 4,\r\n    title:\r\n      \"Success Steps For Your Personal Or Business Life Plus Funny Image on the Back\",\r\n    urlToImage: \"./src/img/strategies/4.jpg\",\r\n    tags: [\"Culture\", \"Design\", \"Art\"],\r\n    content:\r\n      \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\r\n    date: \"01.01.2020\",\r\n  },\r\n  {\r\n    id: 5,\r\n    title: \"Increasing Prosperity With Positive Thinking\",\r\n    urlToImage: \"./src/img/strategies/5.jpg\",\r\n    tags: [\"Design\"],\r\n    content:\r\n      \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\r\n    date: \"01.01.2020\",\r\n  },\r\n  {\r\n    id: 6,\r\n    title: \"Increasing Prosperity With Positive Thinking\",\r\n    urlToImage: \"./src/img/strategies/1.jpg\",\r\n    tags: [\"Art\", \"Design\"],\r\n    content:\r\n      \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\r\n    date: \"01.01.2020\",\r\n  },\r\n  {\r\n    id: 7,\r\n    title: \"Motivation Is The First Step To Success\",\r\n    urlToImage: \"./src/img/strategies/2.jpg\",\r\n    tags: [\"Culture\"],\r\n    content:\r\n      \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\r\n    date: \"01.01.2020\",\r\n  },\r\n  {\r\n    id: 8,\r\n    title: \"Success Steps For Your Personal Or Business Life\",\r\n    urlToImage: \"./src/img/strategies/3.jpg\",\r\n    tags: [\"Culture\", \"Design\", \"Art\"],\r\n    content:\r\n      \"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?\",\r\n    date: \"01.01.2020\",\r\n  },\r\n];\r\n\r\nwindow.onload = function () {\r\n  console.log(\"Hello Rolling Scopes!\");\r\n\r\n  // Render Articles\r\n  if (data) {\r\n    renderArticlesToDom();\r\n  }\r\n\r\n  // Tags\r\n  addTagsClickHandler();\r\n\r\n  // Generate Base Modal from Modal Class\r\n  addToolsClickHandler();\r\n};\r\n\r\nconst addTagsClickHandler = () => {\r\n  document.querySelector(\".strategies__tags\").addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"tag\")) {\r\n      let clickedTag = e.target;\r\n      removeSelectedTags();\r\n      selectClickedTag(clickedTag);\r\n      if (clickedTag.innerText === \"All\") {\r\n        showAllStrategies();\r\n      } else {\r\n        filterStrategyBySelectedTag(clickedTag.innerText);\r\n      }\r\n    }\r\n  });\r\n};\r\n\r\nconst removeSelectedTags = () => {\r\n  let tags = document.querySelectorAll(\".strategies__tags .tag\");\r\n  tags.forEach((tag) => {\r\n    tag.classList.remove(\"tag_selected\");\r\n    tag.classList.add(\"tag_bordered\");\r\n  });\r\n};\r\n\r\nconst selectClickedTag = (clickedTag) => {\r\n  clickedTag.classList.add(\"tag_selected\");\r\n  clickedTag.classList.remove(\"tag_bordered\");\r\n};\r\n\r\nconst showAllStrategies = () => {\r\n  let strategies = document.querySelectorAll(\".strategy-wrapper .strategy\");\r\n  strategies.forEach((strategy) => {\r\n    strategy.classList.remove(\"strategy_hidden\");\r\n  });\r\n};\r\n\r\nconst filterStrategyBySelectedTag = (selectedTag) => {\r\n  let strategies = document.querySelectorAll(\".strategy-wrapper .strategy\");\r\n  strategies.forEach((strategy) => {\r\n    strategy.classList.add(\"strategy_hidden\");\r\n    strategy.querySelectorAll(\".tag\").forEach((tag) => {\r\n      if (tag.innerText === selectedTag) {\r\n        strategy.classList.remove(\"strategy_hidden\");\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\nconst renderArticlesToDom = () => {\r\n  let strategiesWrapper = getStrategiesWrapper();\r\n  generateArticles(data).forEach((article) => {\r\n    strategiesWrapper.append(article.generateArticle());\r\n  });\r\n\r\n  addStrategyClickHandler();\r\n};\r\n\r\nconst getStrategiesWrapper = () => {\r\n  const strategiesConstainer = document.querySelector(\".strategy-wrapper\");\r\n  strategiesConstainer.innerHTML = \"\";\r\n  return strategiesConstainer;\r\n};\r\n\r\nconst generateArticles = (data) => {\r\n  let articles = [];\r\n  data.forEach((article) => {\r\n    articles.push(new _js_Article__WEBPACK_IMPORTED_MODULE_0__.Article(article));\r\n  });\r\n  return articles;\r\n};\r\n\r\nconst addToolsClickHandler = () => {\r\n  document\r\n    .querySelector(\".tools__button .button\")\r\n    .addEventListener(\"click\", () => {\r\n      generateToolsModal();\r\n    });\r\n};\r\n\r\nconst generateToolsModal = () => {\r\n  renderModalWindow(\"Test content for Tools Modal\");\r\n};\r\n\r\nconst renderModalWindow = (content) => {\r\n  let modal = new Modal(\"tools-modal\");\r\n  modal.buildModal(content);\r\n};\r\n\r\nconst addStrategyClickHandler = () => {\r\n  document.querySelector(\".strategy-wrapper\").addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".strategy\")) {\r\n      let clickedStrategyId = e.target\r\n        .closest(\".strategy\")\r\n        .getAttribute(\"data-id\");\r\n      let clickedStrategyData = getClickedData(clickedStrategyId);\r\n\r\n      renderArticleModalWindow(clickedStrategyData);\r\n    }\r\n  });\r\n};\r\n\r\nconst getClickedData = (id) => {\r\n  return data.find((article) => article.id == id);\r\n};\r\n\r\nconst renderArticleModalWindow = (article) => {\r\n  let modal = new ArticleModal(\"article-modal\", article);\r\n  modal.renderModal();\r\n};\r\n\n\n//# sourceURL=webpack://productly/./src/index.js?");

/***/ }),

/***/ "./src/js/Article.js":
/*!***************************!*\
  !*** ./src/js/Article.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Article\": () => (/* binding */ Article)\n/* harmony export */ });\nclass Article {\r\n  constructor({ id, title, urlToImage, tags, ...rest }) {\r\n    this.id = id;\r\n    this.title = title;\r\n    this.urlToImage = urlToImage;\r\n    this.tags = tags;\r\n  }\r\n\r\n  // Article generator\r\n  generateArticle() {\r\n    let template = \"\";\r\n    let article = document.createElement(\"article\");\r\n    article.className = \"strategy block-shadowed\";\r\n    article.setAttribute(\"data-id\", this.id);\r\n\r\n    this.urlToImage &&\r\n      (template += `<img class=\"strategy__image\" src=${this.urlToImage} alt=\"strategy\">`);\r\n\r\n    if (this.title || this.tags) {\r\n      template += `<div class=\"strategy__content\">`;\r\n\r\n      this.title &&\r\n        (template += `<h3 class=\"strategy__name\">${this.title}</h3>`);\r\n\r\n      if (this.tags) {\r\n        template += `<div class=\"strategy__tags tags\">`;\r\n\r\n        this.tags.map((tag) => {\r\n          template += `<span class=\"tag tag_colored\">${tag}</span>`;\r\n        });\r\n\r\n        template += `</div>`;\r\n      }\r\n\r\n      template += `</div>`;\r\n    }\r\n\r\n    article.innerHTML = template;\r\n    return article;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://productly/./src/js/Article.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;