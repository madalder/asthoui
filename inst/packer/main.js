(()=>{var t={518:()=>{Shiny.addCustomMessageHandler("asthoui-footer-hide",(t=>{$(".nav-link").on("click",(e=>{const o=$(e.target).data("value");t.tabs.includes(o)?$(`#${t.id}`).hide():$(`#${t.id}`).show()})),$(".agency-lookup > button").on("click",(e=>{$(`#${t.id}`).show()}));const e=$(".nav-link").first().data("value");t.tabs.includes(e)?$(`#${t.id}`).hide():$(`#${t.id}`).show()})),Shiny.addCustomMessageHandler("asthoui-footer-inject",(t=>{$("body").append(t.footer),$("body").addClass("min-vh-100 d-flex flex-column justify-content-between")}))},678:()=>{const t=t=>{const e=t.coords.latitude,o=t.coords.longitude;Shiny.setInputValue("coordinates",{latitude:e,longitude:o})},e=t=>{console.error(t)};Shiny.addCustomMessageHandler("asthoui-geo",(o=>{navigator.geolocation.getCurrentPosition(t,e)}))},45:()=>{$((()=>{const t=$(".navbar-collapse").first()[0],e=new bootstrap.Collapse(t,{toggle:!1});$(".nav-link").on("click",(t=>{e.hide()}))}))},461:(t,e,o)=>{"use strict";const n=jQuery;var s=o.n(n);Shiny;let i=new Shiny.OutputBinding;s().extend(i,{find:t=>s()(t).find(".stories-container"),getId:t=>t.id,renderValue:(t,e)=>{s()(t).find(".stories-list").html(e.map((t=>`<div class="story bg-white">${t.content}</div>`)).join("")),s()(".story");var o=s()(".story-list .story").length-1;a(t),window.addEventListener("resize",(e=>{a(t)}),!0),s()(t).off("click"),s()(t).on("click",(e=>{console.log(e),s()(t).find(".story").last().removeClass("transformPrev").addClass("transformThis").prev().addClass("activeNow"),setTimeout((function(){!function(){if(s()(t).find(".story").hasClass("activeNow")){var e=s()(".story").slice(o).removeClass("transformThis activeNow");s()(t).find(".stories-list").prepend(e)}}()}),150)}))}}),Shiny.outputBindings.register(i,"asthoui.storiesBinding");const a=t=>{let e=s()(t).width();s()(t).find(".stories-list").width(e-12+"px")}},46:()=>{$((()=>{Shiny.addCustomMessageHandler("asthoui-shortcut",(t=>{$(`[data-value='${t.tab}']`).trigger("click"),$(`#${t.story}`).trigger("click")}))}))}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";o(461),o(46),o(678),o(45),o(518);let t=!1,e=!1;const n=t=>{let e=$(t.el).closest(".layout").find(`.offcanvas-${t.side}`),o=$(t.el).find("div").first().detach().removeClass("d-none d-md-block");return $(e).find(".offcanvas-body").append(o),$(o).trigger("shown"),e},s=t=>{let e=$(t.el).closest(".layout").find(`.${t.side}-bar`),o=$(t.el).find(".offcanvas-body").find("div").first().detach().removeClass("d-none d-md-block");return $(e).append(o),$(o).trigger("shown"),e},i=()=>{e||($(".nav-tabs").addClass("float-tabs"),$(".center-bar").css("width","100%"),t=!1,e=!0,$(".layout").find(".left-bar").each(((t,e)=>n({el:e,side:"left"}))),$(".layout").find(".right-bar").each(((t,e)=>n({el:e,side:"right"}))))};$((()=>{$(".left-bar-trigger").on("click",(t=>{let e=$(t.target).closest(".layout").find(".offcanvas-left");new bootstrap.Offcanvas(e).show()})),$(".right-bar-trigger").on("click",(t=>{let e=$(t.target).closest(".layout").find(".offcanvas-right");new bootstrap.Offcanvas(e).show()})),$((()=>{window.innerWidth&&(window.innerWidth>991?t=!0:i())})),window.addEventListener("resize",(function(o){window.innerWidth>991?t||($(".nav-tabs").removeClass("float-tabs"),$(".center-bar").css("width","60%"),t=!0,e=!1,$(".layout").find(".offcanvas-astho-left").each(((t,e)=>s({el:e,side:"left"}))),$(".layout").find(".offcanvas-astho-right").each(((t,e)=>s({el:e,side:"right"})))):i()}),!0),$(".agency-lookup").appendTo(".navbar .navbar-collapse"),$(".agency-lookup").find("button").trigger("shown")}))})()})();