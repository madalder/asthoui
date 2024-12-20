% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/stories.R
\name{stories}
\alias{stories}
\alias{story}
\alias{renderStories}
\alias{storiesOutput}
\title{Stories}
\usage{
stories(...)

story(...)

renderStories(expr, env = parent.frame(), quoted = FALSE)

storiesOutput(id)
}
\arguments{
\item{...}{Stories, any number of \code{\link[=story]{story()}}, or content of the \code{\link[=story]{story()}}: any collection of \link[htmltools:builder]{htmltools::tags}.}

\item{expr}{Expression, should return \code{\link[=stories]{stories()}}}

\item{env}{Environment.}

\item{quoted}{Whether to runs as quoted.}

\item{id}{Output id.}
}
\description{
Render stories as stacked cards.
}
\examples{
library(shiny)

ui <- fluidPage(
 storiesOutput("id")
)

server <- function(input, output){
 output$id <- renderStories({
   stories(h2("Hello"))
 })
}

if(interactive())
 shinyApp(ui, server)

}
