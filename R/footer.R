#' Hide Footer
#' 
#' Hide a footer in specific tabs.
#' 
#' @param id ID of footer element.
#' @param tabs List of tab names or their `value` (if defined) of 
#'  tabs on which to hide the footer.
#' @param session A valid shiny session.
#' 
#' @export
hide_footer <- function(
  id,
  tabs,
  session = shiny::getDefaultReactiveDomain()
) {
  if(missing(id))
    stop("Missing `id`")

  if(missing(tabs))
    stop("Missing `tabs`")

  session$sendCustomMessage(
    "asthoui-footer", 
    list(
      id = id,
      tabs = as.list(tabs)
    )
  )
}
