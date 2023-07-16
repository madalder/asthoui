#' Page
#' 
#' Dashboard layout.
#' 
#' @param left,body,right Content of the page.
#' 
#' @importFrom shiny div tags p
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
    class = "layout",
    p(
      class = "d-sm-block d-md-none pb-2",
      tags$a(
        class = "float-left left-bar-trigger",
        shiny::icon("bars")
      ),
      tags$a(
        class = "float-right right-bar-trigger",
        shiny::icon("info")
      )
    ),
    div(
      class = "offcanvas offcanvas-start offcanvas-left",
      tabindex = "-1",
      div(class = "offcanvas-body")
    ),
    div(
      class = "row",
      div(
        class = "col-md-2 d-none d-md-block left-bar",
        left
      ),
      div(
        class = "col-md-7",
        body
      ),
      div(
        class = "col-md-3 flex-right d-none d-md-block right-bar",
        right
      )
    ),
    div(
      class = "offcanvas offcanvas-end offcanvas-right",
      tabindex = "-1",
      div(class = "offcanvas-body")
    )
  )
}
