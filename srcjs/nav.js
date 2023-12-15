$(() => {
  const menu = $(".navbar-collapse").first()[0];
  const bsCollapse = new bootstrap.Collapse(menu, {
    toggle: false,
  });

  $(".nav-link").on("click", (event) => {
    let v = $(".navbar-toggle").is(":visible");

    if (v) {
      bsCollapse.hide();
      $(".navbar-collapse").attr("style", "display: none !important");
    }
  });

  $(".navbar-toggle").on("click", (event) => {
    event.preventDefault();
    let v = $(".navbar-collapse").is(":visible");

    if (v) {
      bsCollapse.hide();
      $(".navbar-collapse").attr("style", "display:none!important;");
      return;
    }

    bsCollapse.show();
    $(".navbar-collapse").attr("style", "display:block!important;");
  });

  const toggler = () => {
    const w = window.innerWidth;

    if (w < 1415) {
      bsCollapse.hide();
      $(".navbar-collapse").attr("style", "display: none !important");
      return;
    }

    bsCollapse.show();
    $(".navbar-collapse").attr("style", "");
  };

  setTimeout(() => {
    toggler();
  }, 500);

  addEventListener("resize", (event) => {
    toggler();
  });
});
