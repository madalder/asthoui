export const handlePage = () => {
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
