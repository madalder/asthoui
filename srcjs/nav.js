$(() => {
  const menu = $(".navbar-collapse").first()[0];
  const bsCollapse = new bootstrap.Collapse(menu, {
    toggle: false,
  });
  $(".nav-link").on("click", (event) => {
    bsCollapse.hide();
  });
});
