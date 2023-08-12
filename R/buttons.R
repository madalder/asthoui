#' Astho Button
#' 
#' Astho-themed button.
#' 
#' @param ... Arguments passed to [shiny::actionButton()].
#' @param class Additional class(es) to pass to the button. 
#' 
#' @importFrom shiny actionButton
#' 
#' @export
asthoActionButton <- function(
  ...,
  class = ""
){
  class <- sprintf("%s btn-special", class)
  actionButton(..., class = class)
}
