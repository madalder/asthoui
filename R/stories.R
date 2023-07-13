#' Stories
#' 
#' Render stories as stacked cards.
#' 
#' @param html HTML to display ([htmltools::tags]).
#' 
#' @examples 
#' library(shiny)
#' 
#' ui <- fluidPage(
#'  storiesOutput("id")
#' )
#' 
#' server <- function(input, output){
#'  output$id <- renderStories({
#'    stories(h2("Hello"))
#'  })
#' }
#' 
#' if(interactive())
#'  shinyApp(ui, server)
#' 
#' @export
stories <- function(...){
  lst <- list(...)

  if(length(lst) == 0L)
    stop("must pass one or more `story()`")

  as.list(lst)
}

story <- function(content) {
  if(missing(content))
    stop("missing content")

  list(content = as.character(content))
}

#' @export
renderStories <- function(expr, env = parent.frame(), quoted = FALSE) {
  # Convert the expression + environment into a function
  func <- shiny::exprToFunction(expr, env, quoted)

  function(){
    func()
  }
}

#' @export
storiesOutput <- function(id){

  # element
  el <- shiny::tags$div(
    id = id, 
    class = "stories-container",
    shiny::tags$div(
      class = "stories",
      shiny::tags$div(
        class = "stories-stack",
        tags$button(class = "buttons prev"),
        shiny::tags$ul(
          class = "stories-list"
        ),
        tags$button(class = "buttons next")
      )
    )
  )

  deps <- list(
    htmltools::htmlDependency(
      name = "stories",
      version = "1.0.0",
      src = "packer",
      script = "stories.js",
      stylesheet = "stories.min.css",
      package = "asthoui"
    )
  )

  # wrap together
  htmltools::attachDependencies(el, deps)
}
