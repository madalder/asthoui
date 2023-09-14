jQuery.fn.extend({
  treeInput: function () {
    let id = $(this).attr("id");

    $(`#${id}-query`).on("keydown", (event) => {
      if (event.which != 13) {
        return;
      }

      $(`#${id}-search`).trigger("click");
    });

    $(`#${id}-search`).on("click", (event) => {
      let query = $(`#${id}-query`).val().toLowerCase();

      if (query == "") {
        $(this).find(".treejs-node").each((i, el) => {
          if (!$(el).hasClass("treejs-node__close")) {
            $(el).find(".treejs-switcher").trigger("click");
          }

          $(el).show();
        });
        return;
      }

      $(this).find(".treejs-node").each((i, el) => {
        if ($(el).hasClass("treejs-node__close")) {
          $(el).find(".treejs-switcher").trigger("click");
        }

        if ($(el).find(".treejs-node").length > 0) {
          return;
        }

        const label = $(el).find(".treejs-label").text().toLowerCase();

        if (label.includes(query)) {
          $(el).show();
          return;
        }

        $(el).hide();
      });
    });
  },
});
