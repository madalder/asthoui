jQuery.fn.extend({treeInput:function(){let e=$(this).attr("id");$(`#${e}-query`).on("keydown",(t=>{13==t.which&&$(`#${e}-search`).trigger("click")})),$(`#${e}-search`).on("click",(t=>{let s=$(`#${e}-query`).val().toLowerCase();""!=s?$(this).find(".treejs-node").each(((e,t)=>{$(t).hasClass("treejs-node__close")&&$(t).find(".treejs-switcher").trigger("click"),$(t).find(".treejs-node").length>0||($(t).find(".treejs-label").text().toLowerCase().includes(s)?$(t).show():$(t).hide())})):$(this).find(".treejs-node").each(((e,t)=>{$(t).hasClass("treejs-node__close")||$(t).find(".treejs-switcher").trigger("click"),$(t).show()}))}))}});