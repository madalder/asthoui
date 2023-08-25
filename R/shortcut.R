#' Shortcut
#' 
#' Triggers a button click on another tab.
#' 
#' @param button ID of button to trigger
#' @param tab Name of tab to trigger.
#' @param session Shiny session.
#' 
#' @examples
#' library(shiny)
#' 
#' ui <- asthoApp(
#'   tabPanel(
#'     "HOME",
#'     aPage(
#'       left = div(
#'         h1("Sidebar")
#'       ),
#'       center = div(
#'         h1("Main page"),
#'         actionButton("shortcut", "Shortcut")
#'       ),
#'       right = div(
#'         storiesOutput("stories")
#'       )
#'     )
#'   ),
#'   tabPanel(
#'     "ACTIVITIES",
#'     actionButton("story", "Story")
#'   )
#' )
#' 
#' server <- function(input, output, session) {
#'   observeEvent(input$story, {
#'     print("story")
#'   })
#' 
#'   observeEvent(input$shortcut, {
#'     shortcut("story", "ACTIVITIES")
#'   })
#' }
#' 
#' if(FALSE)
#'   shinyApp(ui, server)
#' 
#' @export
shortcut <- function(button, tab, session = shiny::getDefaultReactiveDomain()) {
  if(missing(button))
    stop("Missing `button`")

  if(missing(tab))
    stop("Missing `tab`")

  session$sendCustomMessage("asthoui-shortcut", list(story = button, tab = tab))
}
