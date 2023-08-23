#' Astho Button
#' 
#' Astho-themed button.
#' 
#' @param ... Arguments passed to [shiny::actionButton()].
#' @param class Additional class(es) to pass to the button. 
#' 
#' @importFrom shiny actionButton
#' @importFrom htmltools tags
#' 
#' @export
asthoActionButton <- function(
  ...,
  class = ""
){
  class <- sprintf("%s btn-special", class)
  actionButton(..., class = class)
}

#' Agency Lookup
#' 
#' Make agency lookup button from an existing [actionButton()].
#' 
#' @param button An [actionButton()].
#' 
#' @export
asAgencyLookup <- function(button){
  if(missing(button))
    stop("Missing `button`")

  tags$form(
    class = "agency-lookup d-flex",
    button
  )
}
