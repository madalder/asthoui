#' Stories
#' 
#' Render stories as stacked cards.
#' 
#' @param id Output id.
#' @param expr Expression, should return [stories()]
#' @param env Environment.
#' @param quoted Whether to runs as quoted.
#' @param ... Stories, any number of [story()], or content of the [story()]: any collection of [htmltools::tags].
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
#' @name stories
#' @export
stories <- function(...){
  lst <- list(...)

  if(length(lst) == 0L)
    stop("must pass one or more `story()`")

  rev(as.list(lst))
}

#' @name stories
#' @export
story <- function(...) {
  content <- div(...)
  list(content = as.character(content))
}

#' @rdname stories
#' @export
renderStories <- function(expr, env = parent.frame(), quoted = FALSE) {
  # Convert the expression + environment into a function
  func <- shiny::exprToFunction(expr, env, quoted)

  function(){
    func()
  }
}

#' @rdname stories
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
        shiny::tags$div(
          class = "stories-list"
        )
      )
    )
  )

  deps <- list(
    htmltools::htmlDependency(
      name = "stories",
      version = utils::packageVersion("asthoui"),
      src = "packer",
      script = "stories.js",
      stylesheet = "stories.min.css",
      package = "asthoui"
    )
  )

  # wrap together
  htmltools::attachDependencies(el, deps)
}
