#' Page
#' 
#' Dashboard layout.
#' 
#' @param left,center,right Content of the page.
#' 
#' @importFrom shiny div tags p
#' 
#' @export
aPage <- function(
  left,
  center,
  right = NULL
){
  if(missing(left) | missing(center) | missing(right))
    stop("must pass `left`, `body`, and `right`")

  div(
    class = "layout",
    p(
      class = "d-md-block d-lg-none pb-2",
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
      div(
        class = "offcanvas-header",
        tags$button(
          type = "button",
          class = "btn-close",
          `data-bs-dismiss` = "offcanvas",
          `aria-label` = "Close"
        )
      ),
      div(class = "offcanvas-body")
    ),
    div(
      class = "row",
      div(
        class = "col-lg-2 d-none d-md-block left-bar border-end border-secondary-subtle",
        left
      ),
      div(
        class = "col-lg-7",
        center
      ),
      div(
        class = "col-lg-3 flex-right d-none d-md-block right-bar",
        right
      )
    ),
    div(
      class = "offcanvas offcanvas-end offcanvas-right",
      tabindex = "-1",
      div(
        class = "offcanvas-header",
        tags$button(
          type = "button",
          class = "btn-close",
          `data-bs-dismiss` = "offcanvas",
          `aria-label` = "Close"
        )
      ),
      div(class = "offcanvas-body")
    )
  )
}
