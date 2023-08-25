$(() => {
  Shiny.addCustomMessageHandler("asthoui-shortcut", (msg) => {
    $(`[data-value='${msg.tab}']`).trigger("click");
    $(`#${msg.story}`).trigger("click");
  });
});
