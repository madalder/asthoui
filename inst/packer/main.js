/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./srcjs/layout.js":
/*!*************************!*\
  !*** ./srcjs/layout.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handlePage: () => (/* binding */ handlePage)
/* harmony export */ });
let intabs = false;
let inOffcanvas = false;

const handlePage = () => {
  handleLeftBar();
  handleRightBar();

  $(() => {
    if (!window.innerWidth) {
      return;
    }

    if (window.innerWidth > 991) {
      intabs = true;
      return;
    }

    moveAllToOffCanvas();
  });

  window.addEventListener("resize", function (event) {
    console.log(window.innerWidth);
    if (window.innerWidth > 991) {
      moveAllToTabs();
      return;
    }

    moveAllToOffCanvas();
  }, true);
};

const handleLeftBar = () => {
  $(".left-bar-trigger").on("click", (e) => {
    let el = $(e.target).closest(".layout").find(".offcanvas-left");
    const ocInst = new bootstrap.Offcanvas(el);
    ocInst.show();
  });
};

const handleRightBar = () => {
  $(".right-bar-trigger").on("click", (e) => {
    let el = $(e.target).closest(".layout").find(".offcanvas-right");
    const ocInst = new bootstrap.Offcanvas(el);
    ocInst.show();
  });
};

const moveToOffCanvas = (params) => {
  let offcanvas = $(params.el).closest(".layout").find(
    `.offcanvas-${params.side}`,
  );
  let el = $(params.el).find("div").first().detach().removeClass(
    "d-none d-md-block",
  );
  $(offcanvas).find(".offcanvas-body").append(el);
  $(el).trigger("shown");
  return offcanvas;
};

const moveToTab = (params) => {
  let bar = $(params.el).closest(".layout").find(`.${params.side}-bar`);
  let el = $(params.el).find(".offcanvas-body").find("div").first().detach()
    .removeClass(
      "d-none d-md-block",
    );
  $(bar).append(el);
  $(el).trigger("shown");
  return bar;
};

const moveAllToOffCanvas = () => {
  if (inOffcanvas) {
    return;
  }

  $(".nav-tabs").addClass("float-tabs");
  $(".center-bar").css("width", "100%");

  intabs = false;
  inOffcanvas = true;
  $(".layout")
    .find(".left-bar")
    .each((i, el) => moveToOffCanvas({ el: el, side: "left" }));

  $(".layout")
    .find(".right-bar")
    .each((i, el) => moveToOffCanvas({ el: el, side: "right" }));
};

const moveAllToTabs = () => {
  if (intabs) {
    return;
  }

  $(".nav-tabs").removeClass("float-tabs");
  $(".center-bar").css("width", "60%");

  intabs = true;
  inOffcanvas = false;
  $(".layout")
    .find(".offcanvas-astho-left")
    .each((i, el) => moveToTab({ el: el, side: "left" }));

  $(".layout")
    .find(".offcanvas-astho-right")
    .each((i, el) => moveToTab({ el: el, side: "right" }));
};


/***/ }),

/***/ "./srcjs/lookup.js":
/*!*************************!*\
  !*** ./srcjs/lookup.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveLookup: () => (/* binding */ moveLookup)
/* harmony export */ });
const moveLookup = () => {
  $(".agency-lookup").appendTo(".navbar .navbar-collapse");
};


/***/ }),

/***/ "./srcjs/outputs/stories.js":
/*!**********************************!*\
  !*** ./srcjs/outputs/stories.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./srcjs/shortcut.js":
/*!***************************!*\
  !*** ./srcjs/shortcut.js ***!
  \***************************/
/***/ (() => {

$(() => {
  Shiny.addCustomMessageHandler("asthoui-shortcut", (msg) => {
    $(`[data-value='${msg.tab}']`).trigger("click");
    $(`#${msg.story}`).trigger("click");
  });
});


/***/ }),

/***/ "shiny":
/*!************************!*\
  !*** external "Shiny" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = Shiny;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./srcjs/index.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _outputs_stories_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outputs/stories.js */ "./srcjs/outputs/stories.js");
/* harmony import */ var _shortcut_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shortcut.js */ "./srcjs/shortcut.js");
/* harmony import */ var _shortcut_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shortcut_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.js */ "./srcjs/layout.js");
/* harmony import */ var _lookup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lookup.js */ "./srcjs/lookup.js");





$(() => {
  (0,_layout_js__WEBPACK_IMPORTED_MODULE_2__.handlePage)();
  (0,_lookup_js__WEBPACK_IMPORTED_MODULE_3__.moveLookup)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELFlBQVk7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNCQUFzQjs7QUFFN0Q7QUFDQTtBQUNBLHVDQUF1Qyx1QkFBdUI7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxzQkFBc0I7O0FBRXZEO0FBQ0E7QUFDQSxpQ0FBaUMsdUJBQXVCO0FBQ3hEOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUdPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdUI7QUFDUjs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsYUFBYTtBQUNyRDs7QUFFQTs7QUFFQSxvREFBUTtBQUNSO0FBQ0EsV0FBVyw2Q0FBQztBQUNaLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsSUFBSSw2Q0FBQzs7QUFFTCxpQkFBaUIsNkNBQUM7QUFDbEIsbUJBQW1CLDZDQUFDOztBQUVwQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLElBQUksNkNBQUM7O0FBRUwsSUFBSSw2Q0FBQztBQUNMO0FBQ0E7QUFDQSxXQUFXLDZDQUFDO0FBQ1osNEJBQTRCLDZDQUFDO0FBQzdCLFVBQVUsNkNBQUM7QUFDWDtBQUNBOztBQUVBLE1BQU0sNkNBQUM7QUFDUCw0QkFBNEIsZ0JBQWdCO0FBQzVDLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQSxVQUFVLDZDQUFDO0FBQ1gsRUFBRSw2Q0FBQztBQUNIOzs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUIsVUFBVSxVQUFVO0FBQ3BCLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7QUNMRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ1A7QUFDa0I7QUFDQTs7QUFFekM7QUFDQSxFQUFFLHNEQUFVO0FBQ1osRUFBRSxzREFBVTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3Rob3VpLy4vc3JjanMvbGF5b3V0LmpzIiwid2VicGFjazovL2FzdGhvdWkvLi9zcmNqcy9sb29rdXAuanMiLCJ3ZWJwYWNrOi8vYXN0aG91aS8uL3NyY2pzL291dHB1dHMvc3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9hc3Rob3VpLy4vc3JjanMvc2hvcnRjdXQuanMiLCJ3ZWJwYWNrOi8vYXN0aG91aS9leHRlcm5hbCB2YXIgXCJTaGlueVwiIiwid2VicGFjazovL2FzdGhvdWkvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vYXN0aG91aS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3Rob3VpL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FzdGhvdWkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzdGhvdWkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hc3Rob3VpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN0aG91aS8uL3NyY2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBpbnRhYnMgPSBmYWxzZTtcbmxldCBpbk9mZmNhbnZhcyA9IGZhbHNlO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlUGFnZSA9ICgpID0+IHtcbiAgaGFuZGxlTGVmdEJhcigpO1xuICBoYW5kbGVSaWdodEJhcigpO1xuXG4gICQoKCkgPT4ge1xuICAgIGlmICghd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTEpIHtcbiAgICAgIGludGFicyA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbW92ZUFsbFRvT2ZmQ2FudmFzKCk7XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTEpIHtcbiAgICAgIG1vdmVBbGxUb1RhYnMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtb3ZlQWxsVG9PZmZDYW52YXMoKTtcbiAgfSwgdHJ1ZSk7XG59O1xuXG5jb25zdCBoYW5kbGVMZWZ0QmFyID0gKCkgPT4ge1xuICAkKFwiLmxlZnQtYmFyLXRyaWdnZXJcIikub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCBlbCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoXCIubGF5b3V0XCIpLmZpbmQoXCIub2ZmY2FudmFzLWxlZnRcIik7XG4gICAgY29uc3Qgb2NJbnN0ID0gbmV3IGJvb3RzdHJhcC5PZmZjYW52YXMoZWwpO1xuICAgIG9jSW5zdC5zaG93KCk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUmlnaHRCYXIgPSAoKSA9PiB7XG4gICQoXCIucmlnaHQtYmFyLXRyaWdnZXJcIikub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCBlbCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoXCIubGF5b3V0XCIpLmZpbmQoXCIub2ZmY2FudmFzLXJpZ2h0XCIpO1xuICAgIGNvbnN0IG9jSW5zdCA9IG5ldyBib290c3RyYXAuT2ZmY2FudmFzKGVsKTtcbiAgICBvY0luc3Quc2hvdygpO1xuICB9KTtcbn07XG5cbmNvbnN0IG1vdmVUb09mZkNhbnZhcyA9IChwYXJhbXMpID0+IHtcbiAgbGV0IG9mZmNhbnZhcyA9ICQocGFyYW1zLmVsKS5jbG9zZXN0KFwiLmxheW91dFwiKS5maW5kKFxuICAgIGAub2ZmY2FudmFzLSR7cGFyYW1zLnNpZGV9YCxcbiAgKTtcbiAgbGV0IGVsID0gJChwYXJhbXMuZWwpLmZpbmQoXCJkaXZcIikuZmlyc3QoKS5kZXRhY2goKS5yZW1vdmVDbGFzcyhcbiAgICBcImQtbm9uZSBkLW1kLWJsb2NrXCIsXG4gICk7XG4gICQob2ZmY2FudmFzKS5maW5kKFwiLm9mZmNhbnZhcy1ib2R5XCIpLmFwcGVuZChlbCk7XG4gICQoZWwpLnRyaWdnZXIoXCJzaG93blwiKTtcbiAgcmV0dXJuIG9mZmNhbnZhcztcbn07XG5cbmNvbnN0IG1vdmVUb1RhYiA9IChwYXJhbXMpID0+IHtcbiAgbGV0IGJhciA9ICQocGFyYW1zLmVsKS5jbG9zZXN0KFwiLmxheW91dFwiKS5maW5kKGAuJHtwYXJhbXMuc2lkZX0tYmFyYCk7XG4gIGxldCBlbCA9ICQocGFyYW1zLmVsKS5maW5kKFwiLm9mZmNhbnZhcy1ib2R5XCIpLmZpbmQoXCJkaXZcIikuZmlyc3QoKS5kZXRhY2goKVxuICAgIC5yZW1vdmVDbGFzcyhcbiAgICAgIFwiZC1ub25lIGQtbWQtYmxvY2tcIixcbiAgICApO1xuICAkKGJhcikuYXBwZW5kKGVsKTtcbiAgJChlbCkudHJpZ2dlcihcInNob3duXCIpO1xuICByZXR1cm4gYmFyO1xufTtcblxuY29uc3QgbW92ZUFsbFRvT2ZmQ2FudmFzID0gKCkgPT4ge1xuICBpZiAoaW5PZmZjYW52YXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAkKFwiLm5hdi10YWJzXCIpLmFkZENsYXNzKFwiZmxvYXQtdGFic1wiKTtcbiAgJChcIi5jZW50ZXItYmFyXCIpLmNzcyhcIndpZHRoXCIsIFwiMTAwJVwiKTtcblxuICBpbnRhYnMgPSBmYWxzZTtcbiAgaW5PZmZjYW52YXMgPSB0cnVlO1xuICAkKFwiLmxheW91dFwiKVxuICAgIC5maW5kKFwiLmxlZnQtYmFyXCIpXG4gICAgLmVhY2goKGksIGVsKSA9PiBtb3ZlVG9PZmZDYW52YXMoeyBlbDogZWwsIHNpZGU6IFwibGVmdFwiIH0pKTtcblxuICAkKFwiLmxheW91dFwiKVxuICAgIC5maW5kKFwiLnJpZ2h0LWJhclwiKVxuICAgIC5lYWNoKChpLCBlbCkgPT4gbW92ZVRvT2ZmQ2FudmFzKHsgZWw6IGVsLCBzaWRlOiBcInJpZ2h0XCIgfSkpO1xufTtcblxuY29uc3QgbW92ZUFsbFRvVGFicyA9ICgpID0+IHtcbiAgaWYgKGludGFicykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gICQoXCIubmF2LXRhYnNcIikucmVtb3ZlQ2xhc3MoXCJmbG9hdC10YWJzXCIpO1xuICAkKFwiLmNlbnRlci1iYXJcIikuY3NzKFwid2lkdGhcIiwgXCI2MCVcIik7XG5cbiAgaW50YWJzID0gdHJ1ZTtcbiAgaW5PZmZjYW52YXMgPSBmYWxzZTtcbiAgJChcIi5sYXlvdXRcIilcbiAgICAuZmluZChcIi5vZmZjYW52YXMtYXN0aG8tbGVmdFwiKVxuICAgIC5lYWNoKChpLCBlbCkgPT4gbW92ZVRvVGFiKHsgZWw6IGVsLCBzaWRlOiBcImxlZnRcIiB9KSk7XG5cbiAgJChcIi5sYXlvdXRcIilcbiAgICAuZmluZChcIi5vZmZjYW52YXMtYXN0aG8tcmlnaHRcIilcbiAgICAuZWFjaCgoaSwgZWwpID0+IG1vdmVUb1RhYih7IGVsOiBlbCwgc2lkZTogXCJyaWdodFwiIH0pKTtcbn07XG4iLCJleHBvcnQgY29uc3QgbW92ZUxvb2t1cCA9ICgpID0+IHtcbiAgJChcIi5hZ2VuY3ktbG9va3VwXCIpLmFwcGVuZFRvKFwiLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlXCIpO1xufTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ3NoaW55JztcblxuY29uc3QgY3JlYXRlQ2FyZHMgPSAoY2FyZHMpID0+IHtcbiAgcmV0dXJuIGNhcmRzLm1hcChjID0+IGNyZWF0ZUNhcmQoYykpLmpvaW4oXCJcIik7XG59XG5cbmNvbnN0IGNyZWF0ZUNhcmQgPSAoY2FyZCkgPT4ge1xuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJzdG9yeSBiZy13aGl0ZVwiPiR7Y2FyZC5jb250ZW50fTwvZGl2PmBcbn1cblxubGV0IHN0b3JpZXNCaW5kaW5nID0gbmV3IFNoaW55Lk91dHB1dEJpbmRpbmcoKTtcblxuJC5leHRlbmQoc3Rvcmllc0JpbmRpbmcsIHtcbiAgZmluZDogKHNjb3BlKSA9PiB7XG4gICAgcmV0dXJuICQoc2NvcGUpLmZpbmQoXCIuc3Rvcmllcy1jb250YWluZXJcIik7XG4gIH0sXG4gIGdldElkOiAoZWwpID0+IHtcbiAgICByZXR1cm4gZWwuaWQ7XG4gIH0sXG4gIHJlbmRlclZhbHVlOiAoZWwsIGRhdGEpID0+IHtcbiAgICAkKGVsKS5maW5kKFwiLnN0b3JpZXMtbGlzdFwiKS5odG1sKGNyZWF0ZUNhcmRzKGRhdGEpKTtcblxuICAgIHZhciAkc3RvcnkgPSAkKCcuc3RvcnknKTtcbiAgICB2YXIgbGFzdENhcmQgPSAkKFwiLnN0b3J5LWxpc3QgLnN0b3J5XCIpLmxlbmd0aCAtIDE7XG5cbiAgICByZXNpemUoZWwpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZSkgPT4ge1xuICAgICAgcmVzaXplKGVsKTtcbiAgICB9LCB0cnVlKTtcblxuICAgICQoZWwpLm9mZihcImNsaWNrXCIpO1xuXG4gICAgJChlbCkub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB2YXIgcHJlcGVuZExpc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYoJChlbCkuZmluZCgnLnN0b3J5JykuaGFzQ2xhc3MoJ2FjdGl2ZU5vdycpICkge1xuICAgICAgICAgIHZhciAkc2xpY2VkQ2FyZCA9ICQoJy5zdG9yeScpLnNsaWNlKGxhc3RDYXJkKS5yZW1vdmVDbGFzcygndHJhbnNmb3JtVGhpcyBhY3RpdmVOb3cnKTtcbiAgICAgICAgICAkKGVsKS5maW5kKCcuc3Rvcmllcy1saXN0JykucHJlcGVuZCgkc2xpY2VkQ2FyZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJChlbCkuZmluZCgnLnN0b3J5JykubGFzdCgpLnJlbW92ZUNsYXNzKCd0cmFuc2Zvcm1QcmV2JykuYWRkQ2xhc3MoJ3RyYW5zZm9ybVRoaXMnKS5wcmV2KCkuYWRkQ2xhc3MoJ2FjdGl2ZU5vdycpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe3ByZXBlbmRMaXN0KCk7IH0sIDE1MCk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5TaGlueS5vdXRwdXRCaW5kaW5ncy5yZWdpc3RlcihzdG9yaWVzQmluZGluZywgXCJhc3Rob3VpLnN0b3JpZXNCaW5kaW5nXCIpO1xuXG5jb25zdCByZXNpemUgPSAoZWwpID0+IHtcbiAgbGV0IHcgPSAkKGVsKS53aWR0aCgpO1xuICAkKGVsKS5maW5kKFwiLnN0b3JpZXMtbGlzdFwiKS53aWR0aCh3IC0gMTIgKyBcInB4XCIpO1xufVxuIiwiJCgoKSA9PiB7XG4gIFNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwiYXN0aG91aS1zaG9ydGN1dFwiLCAobXNnKSA9PiB7XG4gICAgJChgW2RhdGEtdmFsdWU9JyR7bXNnLnRhYn0nXWApLnRyaWdnZXIoXCJjbGlja1wiKTtcbiAgICAkKGAjJHttc2cuc3Rvcnl9YCkudHJpZ2dlcihcImNsaWNrXCIpO1xuICB9KTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBTaGlueTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9vdXRwdXRzL3N0b3JpZXMuanNcIjtcbmltcG9ydCBcIi4vc2hvcnRjdXQuanNcIjtcbmltcG9ydCB7IGhhbmRsZVBhZ2UgfSBmcm9tIFwiLi9sYXlvdXQuanNcIjtcbmltcG9ydCB7IG1vdmVMb29rdXAgfSBmcm9tIFwiLi9sb29rdXAuanNcIjtcblxuJCgoKSA9PiB7XG4gIGhhbmRsZVBhZ2UoKTtcbiAgbW92ZUxvb2t1cCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=