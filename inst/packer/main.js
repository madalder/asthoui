(()=>{var t={678:()=>{const t=t=>{const e=t.coords.latitude,o=t.coords.longitude;Shiny.setInputValue("coordinates",{latitude:e,longitude:o})},e=t=>{console.error(t)};Shiny.addCustomMessageHandler("asthoui-geo",(o=>{navigator.geolocation.getCurrentPosition(t,e)}))},461:(t,e,o)=>{"use strict";const s=jQuery;var n=o.n(s);Shiny;let i=new Shiny.OutputBinding;n().extend(i,{find:t=>n()(t).find(".stories-container"),getId:t=>t.id,renderValue:(t,e)=>{n()(t).find(".stories-list").html(e.map((t=>`<div class="story bg-white">${t.content}</div>`)).join("")),n()(".story");var o=n()(".story-list .story").length-1;a(t),window.addEventListener("resize",(e=>{a(t)}),!0),n()(t).off("click"),n()(t).on("click",(e=>{console.log(e),n()(t).find(".story").last().removeClass("transformPrev").addClass("transformThis").prev().addClass("activeNow"),setTimeout((function(){!function(){if(n()(t).find(".story").hasClass("activeNow")){var e=n()(".story").slice(o).removeClass("transformThis activeNow");n()(t).find(".stories-list").prepend(e)}}()}),150)}))}}),Shiny.outputBindings.register(i,"asthoui.storiesBinding");const a=t=>{let e=n()(t).width();n()(t).find(".stories-list").width(e-12+"px")}},46:()=>{$((()=>{Shiny.addCustomMessageHandler("asthoui-shortcut",(t=>{$(`[data-value='${t.tab}']`).trigger("click"),$(`#${t.story}`).trigger("click")}))}))}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";o(461),o(46),o(678);let t=!1,e=!1;const s=t=>{let e=$(t.el).closest(".layout").find(`.offcanvas-${t.side}`),o=$(t.el).find("div").first().detach().removeClass("d-none d-md-block");return $(e).find(".offcanvas-body").append(o),$(o).trigger("shown"),e},n=t=>{let e=$(t.el).closest(".layout").find(`.${t.side}-bar`),o=$(t.el).find(".offcanvas-body").find("div").first().detach().removeClass("d-none d-md-block");return $(e).append(o),$(o).trigger("shown"),e},i=()=>{e||($(".nav-tabs").addClass("float-tabs"),$(".center-bar").css("width","100%"),t=!1,e=!0,$(".layout").find(".left-bar").each(((t,e)=>s({el:e,side:"left"}))),$(".layout").find(".right-bar").each(((t,e)=>s({el:e,side:"right"}))))};$((()=>{$(".left-bar-trigger").on("click",(t=>{let e=$(t.target).closest(".layout").find(".offcanvas-left");new bootstrap.Offcanvas(e).show()})),$(".right-bar-trigger").on("click",(t=>{let e=$(t.target).closest(".layout").find(".offcanvas-right");new bootstrap.Offcanvas(e).show()})),$((()=>{window.innerWidth&&(window.innerWidth>991?t=!0:i())})),window.addEventListener("resize",(function(o){window.innerWidth>991?t||($(".nav-tabs").removeClass("float-tabs"),$(".center-bar").css("width","60%"),t=!0,e=!1,$(".layout").find(".offcanvas-astho-left").each(((t,e)=>n({el:e,side:"left"}))),$(".layout").find(".offcanvas-astho-right").each(((t,e)=>n({el:e,side:"right"})))):i()}),!0),$(".agency-lookup").appendTo(".navbar .navbar-collapse"),$(".agency-lookup").find("button").trigger("shown")}))})()})();