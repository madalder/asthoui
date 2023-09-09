Shiny.addCustomMessageHandler("asthoui-footer-hide", (msg) => {
  $(".nav-link").on("click", (event) => {
    const value = $(event.target).data("value");
    if (msg.tabs.includes(value)) {
      $(`#${msg.id}`).hide();
      return;
    }

    $(`#${msg.id}`).show();
  });

  $(".agency-lookup > button").on("click", (e) => {
    $(`#${msg.id}`).show();
  });

  const firstTab = $(".nav-link").first().data("value");

  if (msg.tabs.includes(firstTab)) {
    $(`#${msg.id}`).hide();
    return;
  }

  $(`#${msg.id}`).show();
});

Shiny.addCustomMessageHandler("asthoui-footer-inject", (msg) => {
  $("body").append(msg.footer);
  $("body").addClass("min-vh-100 d-flex flex-column justify-content-between");
});
