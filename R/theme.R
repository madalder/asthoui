#' Theme
#' 
#' Default Astho theme.
#' 
#' @param primary Primary color passed to [bslib::bs_theme()].
#' @param ... Passed to [bslib::bs_theme()].
#' 
#' @importFrom bslib bs_theme bs_add_rules font_google
#' 
#' @export
aTheme <- function(
  ..., 
  primary = "#06476b",
  secondary = NULL,
  success = NULL,
  info = NULL,
  warning = NULL,
  danger = NULL,
){
  theme <- bs_theme(
    version = 5L,
    bootswatch = "materia", 
    base_font = font_google("Jost", local = FALSE),
    primary = primary,
    secondary = secondary,
    success = success,
    info = info,
    warning = warning,
    danger = danger,
    ...
  )

  return(theme)
}
