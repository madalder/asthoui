/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "shiny":
/*!************************!*\
  !*** external "Shiny" ***!
  \************************/
/***/ ((module) => {

module.exports = Shiny;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./srcjs/outputs/stories.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shiny */ "shiny");
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shiny__WEBPACK_IMPORTED_MODULE_1__);



const createCards = (cards) => {
  return cards.map(c => createCard(c)).join("");
}

const createCard = (card) => {
  return `<div class="story bg-white">${card.content}</div>`
}

let storiesBinding = new Shiny.OutputBinding();

jquery__WEBPACK_IMPORTED_MODULE_0___default().extend(storiesBinding, {
  find: (scope) => {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(scope).find(".stories-container");
  },
  getId: (el) => {
    return el.id;
  },
  renderValue: (el, data) => {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find(".stories-list").html(createCards(data));

    var $story = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.story');
    var lastCard = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".story-list .story").length - 1;

    resize(el);
    window.addEventListener('resize', (e) => {
      resize(el);
    }, true);

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).off("click");

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).on("click", (e) => {
      console.log(e);
      var prependList = function() {
        if(jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find('.story').hasClass('activeNow') ) {
          var $slicedCard = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.story').slice(lastCard).removeClass('transformThis activeNow');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find('.stories-list').prepend($slicedCard);
        }
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find('.story').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
      setTimeout(function(){prependList(); }, 150);
    });
  }
});

Shiny.outputBindings.register(storiesBinding, "asthoui.storiesBinding");

const resize = (el) => {
  let w = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).width();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find(".stories-list").width(w - 12 + "px");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rvcmllcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ051QjtBQUNSOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxhQUFhO0FBQ3JEOztBQUVBOztBQUVBLG9EQUFRO0FBQ1I7QUFDQSxXQUFXLDZDQUFDO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxJQUFJLDZDQUFDOztBQUVMLGlCQUFpQiw2Q0FBQztBQUNsQixtQkFBbUIsNkNBQUM7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsSUFBSSw2Q0FBQzs7QUFFTCxJQUFJLDZDQUFDO0FBQ0w7QUFDQTtBQUNBLFdBQVcsNkNBQUM7QUFDWiw0QkFBNEIsNkNBQUM7QUFDN0IsVUFBVSw2Q0FBQztBQUNYO0FBQ0E7O0FBRUEsTUFBTSw2Q0FBQztBQUNQLDRCQUE0QixnQkFBZ0I7QUFDNUMsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBLFVBQVUsNkNBQUM7QUFDWCxFQUFFLDZDQUFDO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3Rob3VpL2V4dGVybmFsIHZhciBcIlNoaW55XCIiLCJ3ZWJwYWNrOi8vYXN0aG91aS9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9hc3Rob3VpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FzdGhvdWkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXN0aG91aS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXN0aG91aS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FzdGhvdWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3Rob3VpLy4vc3JjanMvb3V0cHV0cy9zdG9yaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gU2hpbnk7IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ3NoaW55JztcblxuY29uc3QgY3JlYXRlQ2FyZHMgPSAoY2FyZHMpID0+IHtcbiAgcmV0dXJuIGNhcmRzLm1hcChjID0+IGNyZWF0ZUNhcmQoYykpLmpvaW4oXCJcIik7XG59XG5cbmNvbnN0IGNyZWF0ZUNhcmQgPSAoY2FyZCkgPT4ge1xuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJzdG9yeSBiZy13aGl0ZVwiPiR7Y2FyZC5jb250ZW50fTwvZGl2PmBcbn1cblxubGV0IHN0b3JpZXNCaW5kaW5nID0gbmV3IFNoaW55Lk91dHB1dEJpbmRpbmcoKTtcblxuJC5leHRlbmQoc3Rvcmllc0JpbmRpbmcsIHtcbiAgZmluZDogKHNjb3BlKSA9PiB7XG4gICAgcmV0dXJuICQoc2NvcGUpLmZpbmQoXCIuc3Rvcmllcy1jb250YWluZXJcIik7XG4gIH0sXG4gIGdldElkOiAoZWwpID0+IHtcbiAgICByZXR1cm4gZWwuaWQ7XG4gIH0sXG4gIHJlbmRlclZhbHVlOiAoZWwsIGRhdGEpID0+IHtcbiAgICAkKGVsKS5maW5kKFwiLnN0b3JpZXMtbGlzdFwiKS5odG1sKGNyZWF0ZUNhcmRzKGRhdGEpKTtcblxuICAgIHZhciAkc3RvcnkgPSAkKCcuc3RvcnknKTtcbiAgICB2YXIgbGFzdENhcmQgPSAkKFwiLnN0b3J5LWxpc3QgLnN0b3J5XCIpLmxlbmd0aCAtIDE7XG5cbiAgICByZXNpemUoZWwpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZSkgPT4ge1xuICAgICAgcmVzaXplKGVsKTtcbiAgICB9LCB0cnVlKTtcblxuICAgICQoZWwpLm9mZihcImNsaWNrXCIpO1xuXG4gICAgJChlbCkub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB2YXIgcHJlcGVuZExpc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoJChlbCkuZmluZCgnLnN0b3J5JykuaGFzQ2xhc3MoJ2FjdGl2ZU5vdycpICkge1xuICAgICAgICAgIHZhciAkc2xpY2VkQ2FyZCA9ICQoJy5zdG9yeScpLnNsaWNlKGxhc3RDYXJkKS5yZW1vdmVDbGFzcygndHJhbnNmb3JtVGhpcyBhY3RpdmVOb3cnKTtcbiAgICAgICAgICAkKGVsKS5maW5kKCcuc3Rvcmllcy1saXN0JykucHJlcGVuZCgkc2xpY2VkQ2FyZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJChlbCkuZmluZCgnLnN0b3J5JykubGFzdCgpLnJlbW92ZUNsYXNzKCd0cmFuc2Zvcm1QcmV2JykuYWRkQ2xhc3MoJ3RyYW5zZm9ybVRoaXMnKS5wcmV2KCkuYWRkQ2xhc3MoJ2FjdGl2ZU5vdycpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe3ByZXBlbmRMaXN0KCk7IH0sIDE1MCk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5TaGlueS5vdXRwdXRCaW5kaW5ncy5yZWdpc3RlcihzdG9yaWVzQmluZGluZywgXCJhc3Rob3VpLnN0b3JpZXNCaW5kaW5nXCIpO1xuXG5jb25zdCByZXNpemUgPSAoZWwpID0+IHtcbiAgbGV0IHcgPSAkKGVsKS53aWR0aCgpO1xuICAkKGVsKS5maW5kKFwiLnN0b3JpZXMtbGlzdFwiKS53aWR0aCh3IC0gMTIgKyBcInB4XCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9