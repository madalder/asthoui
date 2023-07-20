/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./srcjs/layout.js":
/*!*************************!*\
  !*** ./srcjs/layout.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handlePage: () => (/* binding */ handlePage)
/* harmony export */ });
const handlePage = () => {
  handleLeftBar();
  handleRightBar();

  $(() => {
    if(!window.innerWidth)
      return;

    if(window.innerWidth > 994)
      return;
    
    moveAllToOffCanvas();
  });

  window.addEventListener('resize', function(event) {
    if(window.innerWidth > 994)
      return;
    
    moveAllToOffCanvas();
  }, true);
}

const handleLeftBar = () => {
  $(".left-bar-trigger").on("click", (e) => {
    let el = $(e.target).closest(".layout").find(".offcanvas-left");
    const ocInst = new bootstrap.Offcanvas(el);
    ocInst.show();
  });
}

const handleRightBar = () => {
  $(".right-bar-trigger").on("click", (e) => {
    let el = $(e.target).closest(".layout").find(".offcanvas-right");
    const ocInst = new bootstrap.Offcanvas(el);
    ocInst.show();
  });
}

const moveToOffCanvas = (params) => {
  let offcanvas = $(params.el).closest(".layout").find(`.offcanvas-${params.side}`);
  let el = $(params.el).detach().removeClass("d-none d-md-block");
  $(offcanvas).find(".offcanvas-body").append(el);
  $(el).trigger("shown");
  return offcanvas;
}

let moved = false;
const moveAllToOffCanvas = () => {
  if(moved)
    return;

  moved = true;
  $(".layout")
    .find(".left-bar")
    .each((i, el) => moveToOffCanvas({el: el, side: "left"}));

  $(".layout")
    .find(".right-bar")
    .each((i, el) => moveToOffCanvas({el: el, side: "right"}));
}


/***/ }),

/***/ "./srcjs/outputs/stories.js":
/*!**********************************!*\
  !*** ./srcjs/outputs/stories.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

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
/*!************************!*\
  !*** ./srcjs/index.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _outputs_stories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outputs/stories.js */ "./srcjs/outputs/stories.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./srcjs/layout.js");



$(() => {
  (0,_layout__WEBPACK_IMPORTED_MODULE_1__.handlePage)();
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EscUVBQXFFLFlBQVk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscUJBQXFCOztBQUUzRDtBQUNBO0FBQ0Esc0NBQXNDLHNCQUFzQjtBQUM1RDs7Ozs7Ozs7Ozs7Ozs7OztBQzNEdUI7QUFDUjs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsYUFBYTtBQUNyRDs7QUFFQTs7QUFFQSxvREFBUTtBQUNSO0FBQ0EsV0FBVyw2Q0FBQztBQUNaLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsSUFBSSw2Q0FBQzs7QUFFTCxpQkFBaUIsNkNBQUM7QUFDbEIsbUJBQW1CLDZDQUFDOztBQUVwQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLElBQUksNkNBQUM7O0FBRUwsSUFBSSw2Q0FBQztBQUNMO0FBQ0E7QUFDQSxXQUFXLDZDQUFDO0FBQ1osNEJBQTRCLDZDQUFDO0FBQzdCLFVBQVUsNkNBQUM7QUFDWDtBQUNBOztBQUVBLE1BQU0sNkNBQUM7QUFDUCw0QkFBNEIsZ0JBQWdCO0FBQzVDLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQSxVQUFVLDZDQUFDO0FBQ1gsRUFBRSw2Q0FBQztBQUNIOzs7Ozs7Ozs7OztBQ3JEQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNROztBQUV0QztBQUNBLEVBQUUsbURBQVU7QUFDWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXN0aG91aS8uL3NyY2pzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9hc3Rob3VpLy4vc3JjanMvb3V0cHV0cy9zdG9yaWVzLmpzIiwid2VicGFjazovL2FzdGhvdWkvZXh0ZXJuYWwgdmFyIFwiU2hpbnlcIiIsIndlYnBhY2s6Ly9hc3Rob3VpL2V4dGVybmFsIHZhciBcImpRdWVyeVwiIiwid2VicGFjazovL2FzdGhvdWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN0aG91aS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hc3Rob3VpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hc3Rob3VpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXN0aG91aS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FzdGhvdWkvLi9zcmNqcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaGFuZGxlUGFnZSA9ICgpID0+IHtcbiAgaGFuZGxlTGVmdEJhcigpO1xuICBoYW5kbGVSaWdodEJhcigpO1xuXG4gICQoKCkgPT4ge1xuICAgIGlmKCF3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgIHJldHVybjtcblxuICAgIGlmKHdpbmRvdy5pbm5lcldpZHRoID4gOTk0KVxuICAgICAgcmV0dXJuO1xuICAgIFxuICAgIG1vdmVBbGxUb09mZkNhbnZhcygpO1xuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDk5NClcbiAgICAgIHJldHVybjtcbiAgICBcbiAgICBtb3ZlQWxsVG9PZmZDYW52YXMoKTtcbiAgfSwgdHJ1ZSk7XG59XG5cbmNvbnN0IGhhbmRsZUxlZnRCYXIgPSAoKSA9PiB7XG4gICQoXCIubGVmdC1iYXItdHJpZ2dlclwiKS5vbihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbGV0IGVsID0gJChlLnRhcmdldCkuY2xvc2VzdChcIi5sYXlvdXRcIikuZmluZChcIi5vZmZjYW52YXMtbGVmdFwiKTtcbiAgICBjb25zdCBvY0luc3QgPSBuZXcgYm9vdHN0cmFwLk9mZmNhbnZhcyhlbCk7XG4gICAgb2NJbnN0LnNob3coKTtcbiAgfSk7XG59XG5cbmNvbnN0IGhhbmRsZVJpZ2h0QmFyID0gKCkgPT4ge1xuICAkKFwiLnJpZ2h0LWJhci10cmlnZ2VyXCIpLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBsZXQgZWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KFwiLmxheW91dFwiKS5maW5kKFwiLm9mZmNhbnZhcy1yaWdodFwiKTtcbiAgICBjb25zdCBvY0luc3QgPSBuZXcgYm9vdHN0cmFwLk9mZmNhbnZhcyhlbCk7XG4gICAgb2NJbnN0LnNob3coKTtcbiAgfSk7XG59XG5cbmNvbnN0IG1vdmVUb09mZkNhbnZhcyA9IChwYXJhbXMpID0+IHtcbiAgbGV0IG9mZmNhbnZhcyA9ICQocGFyYW1zLmVsKS5jbG9zZXN0KFwiLmxheW91dFwiKS5maW5kKGAub2ZmY2FudmFzLSR7cGFyYW1zLnNpZGV9YCk7XG4gIGxldCBlbCA9ICQocGFyYW1zLmVsKS5kZXRhY2goKS5yZW1vdmVDbGFzcyhcImQtbm9uZSBkLW1kLWJsb2NrXCIpO1xuICAkKG9mZmNhbnZhcykuZmluZChcIi5vZmZjYW52YXMtYm9keVwiKS5hcHBlbmQoZWwpO1xuICAkKGVsKS50cmlnZ2VyKFwic2hvd25cIik7XG4gIHJldHVybiBvZmZjYW52YXM7XG59XG5cbmxldCBtb3ZlZCA9IGZhbHNlO1xuY29uc3QgbW92ZUFsbFRvT2ZmQ2FudmFzID0gKCkgPT4ge1xuICBpZihtb3ZlZClcbiAgICByZXR1cm47XG5cbiAgbW92ZWQgPSB0cnVlO1xuICAkKFwiLmxheW91dFwiKVxuICAgIC5maW5kKFwiLmxlZnQtYmFyXCIpXG4gICAgLmVhY2goKGksIGVsKSA9PiBtb3ZlVG9PZmZDYW52YXMoe2VsOiBlbCwgc2lkZTogXCJsZWZ0XCJ9KSk7XG5cbiAgJChcIi5sYXlvdXRcIilcbiAgICAuZmluZChcIi5yaWdodC1iYXJcIilcbiAgICAuZWFjaCgoaSwgZWwpID0+IG1vdmVUb09mZkNhbnZhcyh7ZWw6IGVsLCBzaWRlOiBcInJpZ2h0XCJ9KSk7XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdzaGlueSc7XG5cbmNvbnN0IGNyZWF0ZUNhcmRzID0gKGNhcmRzKSA9PiB7XG4gIHJldHVybiBjYXJkcy5tYXAoYyA9PiBjcmVhdGVDYXJkKGMpKS5qb2luKFwiXCIpO1xufVxuXG5jb25zdCBjcmVhdGVDYXJkID0gKGNhcmQpID0+IHtcbiAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwic3RvcnkgYmctd2hpdGVcIj4ke2NhcmQuY29udGVudH08L2Rpdj5gXG59XG5cbmxldCBzdG9yaWVzQmluZGluZyA9IG5ldyBTaGlueS5PdXRwdXRCaW5kaW5nKCk7XG5cbiQuZXh0ZW5kKHN0b3JpZXNCaW5kaW5nLCB7XG4gIGZpbmQ6IChzY29wZSkgPT4ge1xuICAgIHJldHVybiAkKHNjb3BlKS5maW5kKFwiLnN0b3JpZXMtY29udGFpbmVyXCIpO1xuICB9LFxuICBnZXRJZDogKGVsKSA9PiB7XG4gICAgcmV0dXJuIGVsLmlkO1xuICB9LFxuICByZW5kZXJWYWx1ZTogKGVsLCBkYXRhKSA9PiB7XG4gICAgJChlbCkuZmluZChcIi5zdG9yaWVzLWxpc3RcIikuaHRtbChjcmVhdGVDYXJkcyhkYXRhKSk7XG5cbiAgICB2YXIgJHN0b3J5ID0gJCgnLnN0b3J5Jyk7XG4gICAgdmFyIGxhc3RDYXJkID0gJChcIi5zdG9yeS1saXN0IC5zdG9yeVwiKS5sZW5ndGggLSAxO1xuXG4gICAgcmVzaXplKGVsKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcbiAgICAgIHJlc2l6ZShlbCk7XG4gICAgfSwgdHJ1ZSk7XG5cbiAgICAkKGVsKS5vZmYoXCJjbGlja1wiKTtcblxuICAgICQoZWwpLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgdmFyIHByZXBlbmRMaXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCQoZWwpLmZpbmQoJy5zdG9yeScpLmhhc0NsYXNzKCdhY3RpdmVOb3cnKSApIHtcbiAgICAgICAgICB2YXIgJHNsaWNlZENhcmQgPSAkKCcuc3RvcnknKS5zbGljZShsYXN0Q2FyZCkucmVtb3ZlQ2xhc3MoJ3RyYW5zZm9ybVRoaXMgYWN0aXZlTm93Jyk7XG4gICAgICAgICAgJChlbCkuZmluZCgnLnN0b3JpZXMtbGlzdCcpLnByZXBlbmQoJHNsaWNlZENhcmQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICQoZWwpLmZpbmQoJy5zdG9yeScpLmxhc3QoKS5yZW1vdmVDbGFzcygndHJhbnNmb3JtUHJldicpLmFkZENsYXNzKCd0cmFuc2Zvcm1UaGlzJykucHJldigpLmFkZENsYXNzKCdhY3RpdmVOb3cnKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtwcmVwZW5kTGlzdCgpOyB9LCAxNTApO1xuICAgIH0pO1xuICB9XG59KTtcblxuU2hpbnkub3V0cHV0QmluZGluZ3MucmVnaXN0ZXIoc3Rvcmllc0JpbmRpbmcsIFwiYXN0aG91aS5zdG9yaWVzQmluZGluZ1wiKTtcblxuY29uc3QgcmVzaXplID0gKGVsKSA9PiB7XG4gIGxldCB3ID0gJChlbCkud2lkdGgoKTtcbiAgJChlbCkuZmluZChcIi5zdG9yaWVzLWxpc3RcIikud2lkdGgodyAtIDEyICsgXCJweFwiKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gU2hpbnk7IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9vdXRwdXRzL3N0b3JpZXMuanMnO1xuaW1wb3J0IHsgaGFuZGxlUGFnZSB9IGZyb20gJy4vbGF5b3V0JztcblxuJCgoKSA9PiB7XG4gIGhhbmRsZVBhZ2UoKTtcbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==