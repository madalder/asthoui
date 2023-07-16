#' Page
#' 
#' Astho themed page.
#' 
#' @param ... Content of the page, passed to [shiny::navbarPage()].
#' @param title Title of the application.
#' @param window_title Title of the application on browser tab.
#' 
#' @importFrom shiny navbarPage
#' 
#' @export
aPage <- function(
  ...,
  title = aLogo(),
  window_title = "Astho"
){
  serve_assets()

  navbarPage(
    title,
    theme = aTheme(),
    header = list(aDeps()),
    ...
  )
}
