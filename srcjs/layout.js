let intabs = false;
let inOffcanvas = false;

export const handlePage = () => {
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
