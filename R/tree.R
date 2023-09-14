#' TreeInput with search
#' 
#' `shinyWidgets::treeInput()` with search.
#' 
#' @param inputId passed to `shinyWidgets::treeInput()`.
#' @param placeholder Placeholder text.
#' @param button Content of the button.
#' @param button_class Additional classes to pass to the button.
#' @param ... passed to `shinyWidgets::treeInput()`.
#' 
#' @importFrom htmltools tagList tags HTML
#' 
#' @export 
treeInputSearch <- function(
  inputId, 
  ...,  
  placeholder = "search", 
  button = shiny::icon("search"),
  button_class = ""
) {
  deps <- list(
    htmltools::htmlDependency(
      name = "tree-input-search",
      version = utils::packageVersion("asthoui"),
      src = "packer",
      script = "tree.js",
      package = "asthoui"
    )
  )

  tagList(
    div(
      class = "input-group",
      tags$input(
        type = "text",
        class = "form-control",
        placeholder = placeholder,
        id = sprintf("%s-query", inputId)
      ),
      tags$button(
         id = sprintf("%s-search", inputId),
         class = sprintf("btn %s", button_class),
         HTML(as.character(button))
      )
    ),
    shinyWidgets::treeInput(inputId = inputId, ...),
    deps,
    tags$script(sprintf("$('#%s').treeInput()", inputId))
  )
}

