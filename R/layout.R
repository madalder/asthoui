#' Page
#' 
#' Dashboard layout.
#' 
#' @param left,body,right Content of the page.
#' 
#' @importFrom shiny div span p
#' 
#' @export
aPage <- function(
  left,
  body,
  right = NULL
){
  if(missing(left) | missing(body) | missing(right))
    stop("must pass `left`, `body`, and `right`")

  div(
    p(
      class = "d-sm-block d-md-none pb-2",
      span(
        class = "float-left",
        shiny::icon("bars")
      ),
      span(
        class = "float-right",
        shiny::icon("info")
      )
    ),
    div(
      class = "rows",
      div(
        class = "col-md-2 d-none d-md-block",
        left
      ),
      div(
        class = "col-md-8",
        body
      ),
      div(
        class = "col-md-2 flex-right d-none d-md-block",
        right
      )
    )
  )
}
