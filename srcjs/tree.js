jQuery.fn.extend({
  treeInput: function () {
    addSearchBasic(this);
    // searchRecurse(this);
  },
});

const addSearchBasic = (parent) => {
  let id = $(parent).attr("id");

  $(`#${id}-query`).on("keydown", (event) => {
    if (event.which != 13) {
      return;
    }

    $(`#${id}-search`).trigger("click");
  });

  $(`#${id}-search`).on("click", (event) => {
    let query = $(`#${id}-query`).val().toLowerCase();

    if (query == "") {
      $(parent).find(".treejs-node").each((i, el) => {
        if (!$(el).hasClass("treejs-node__close")) {
          $(el).find(".treejs-switcher").trigger("click");
        }

        $(el).show();
      });
      return;
    }

    $(parent).find(".treejs-node").each((i, el) => {
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
};

const searchRecurse = (parent) => {
  let id = $(parent).attr("id");

  $(`#${id}-query`).on("keydown", (event) => {
    if (event.which != 13) {
      return;
    }

    $(`#${id}-search`).trigger("click");
  });

  $(`#${id}-search`).on("click", (event) => {
    let query = $(`#${id}-query`).val().toLowerCase();

    if (query == "") {
      $(parent).find(".treejs-nodes").each((i, el) => {
        if (!$(el).hasClass("treejs-node__close")) {
          $(el).find(".treejs-switcher").trigger("click");
        }

        $(el).show();
      });
      return;
    }

    hideChildren(parent, query);
  });
};

const hideChildren = (el, query) => {
  const children = $(el).find(".treejs-nodes");

  // it has children we recurse
  if (children.length > 0) {
    return hideChildren(children, query);
  }

  $(el).find(".treejs-node").each((i, node) => {
    const label = $(node).find(".treejs-label").text().toLowerCase();

    if (!label.includes(query)) {
      $(node).hide();
      return;
    }

    $(node).show();
  });

  hideParents($(el).closest(".treejs-node"), query);
};

const hideParents = (parent, query) => {
  console.log(parent);
  let anyVisible = 0;

  $(parent).find(".treejs-node").each((i, node) => {
    const isVisible = $(node).is(":visible");

    if (isVisible) {
      anyVisible++;
    }
  });

  if (!anyVisible) {
    $(parent).hide();
  }

  if ($(parent).closest(".treejs-nodes").length == 0) {
    return;
  }

  hideParents($(parent).closest(".treejs-nodes"), query);
};
