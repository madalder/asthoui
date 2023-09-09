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
        class = "float-left left-bar-trigger cursor cursor-pointer",
        shiny::icon("filter")
      ),
      tags$a(
        class = "float-right right-bar-trigger cursor cursor-pointer",
        shiny::icon("info")
      )
    ),
    div(
      class = "offcanvas offcanvas-start offcanvas-left offcanvas-astho-left",
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
      class = "d-flex",
      div(
        class = "d-none d-lg-block left-bar border-end border-secondary-subtle",
        style = "width:18%",
        left
      ),
      div(
        class = "center-bar",
        style = "width:60%",
        center
      ),
      div(
        class = "d-none d-lg-block right-bar",
        style = "width:22%",
        right
      )
    ),
    div(
      class = "offcanvas offcanvas-end offcanvas-right offcanvas-astho-right",
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
