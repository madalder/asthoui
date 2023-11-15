#' Atho themed application
#'
#' Astho themed application.
#'
#' @param ... Content of the page, passed to [shiny::navbarPage()].
#' @param title Title of the application.
#' @param header Additional headers.
#' @param window_title Title of the application on browser tab.
#' @param collapsible Whether to collapse the navbar on small screens.
#'
#' @importFrom shiny navbarPage
#'
#' @export
asthoApp <- function(
  ...,
  header = NULL,
  title = aLogo(),
  window_title = "Astho",
  collapsible = TRUE
) {
  serve_assets()

  app <- navbarPage(
    title,
    theme = aTheme(),
    header = list(header, aDeps()),
    windowTitle = window_title,
    collapsible = collapsible,
    id = "astho-main",
    position = "fixed-top",
    ...
  )

  htmltools::tagQuery(div(app))$find(".navbar")$addClass("navbar-expand-xl bg-body-tertiary")$allTags()
}
