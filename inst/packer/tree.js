(()=>{jQuery.fn.extend({treeInput:function(){e(this)}});const e=e=>{let t=$(e).attr("id");$(`#${t}-query`).on("keydown",(e=>{13==e.which&&$(`#${t}-search`).trigger("click")})),$(`#${t}-search`).on("click",(s=>{let r=$(`#${t}-query`).val().toLowerCase();""!=r?$(e).find(".treejs-node").each(((e,t)=>{$(t).hasClass("treejs-node__close")&&$(t).find(".treejs-switcher").trigger("click"),$(t).find(".treejs-node").length>0||($(t).find(".treejs-label").text().toLowerCase().includes(r)?$(t).show():$(t).hide())})):$(e).find(".treejs-node").each(((e,t)=>{$(t).hasClass("treejs-node__close")||$(t).find(".treejs-switcher").trigger("click"),$(t).show()}))}))}})();