<!-- badges: start -->
<!-- badges: end -->

# asthoui

R package for [Astho](https://www.astho.org/)-theme Shiny UI.

## Installation

```r
# install.packages("remotes")
remotes::install_github("devOpifex/asthoui")
```

## Example

This is a basic example which shows you how to solve a common problem:

```r
library(shiny)
library(asthoui)

ui <- asthoApp(
  tabPanel(
    "HOME",
    aPage(
      left = div(
        h1("Sidebar")
      ),
      body = div(
        h1("Main page")
      ),
      right = div(
        storiesOutput("stories")
      )
    )
  ),
  tabPanel(
    "GOVERNANCE"
  ),
  tabPanel(
    "ACTIVITIES"
  ),
  tabPanel(
    "FINANCE"
  ),
  tabPanel(
    "WORKFORCE"
  ),
  tabPanel(
    "QI"
  ),
  tabPanel(
    "EQUITY"
  ),
  tabPanel(
    "STORIES"
  ),
  tabPanel(
    "PROFILES"
  )
)

server <- function(input, output, session) {
  output$stories <- renderStories({
    stories(
      story(
        h1("Hello"),
        p("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget quam orci. Vivamus cursus, nunc vel hendrerit sollicitudin, elit tortor rutrum magna, ut cursus ipsum est vel est. Vestibulum euismod erat ac fermentum lobortis. In eleifend, lacus id aliquet efficitur, ipsum purus scelerisque turpis, et convallis libero nulla ut ligula. Maecenas et enim a ante pellentesque aliquet. Donec vitae lectus accumsan, ornare orci vitae, accumsan mi. Nam nec efficitur dolor. Integer id ligula euismod, tempor quam sed, maximus lorem. Nullam ullamcorper euismod ante eu rhoncus. Integer condimentum ligula in metus malesuada congue. Nam feugiat varius sapien, ac malesuada turpis tincidunt id. Vestibulum congue mi lectus, quis scelerisque libero consequat sed. Sed eget erat dapibus, iaculis eros quis, efficitur felis. In hac habitasse platea dictumst. Duis id felis vitae nisi eleifend molestie et vel leo. Sed efficitur, erat non viverra tincidunt, quam libero facilisis nisl, eu hendrerit dolor augue at eros.")
      ),
      story(
        h1("World"),
        p("Praesent rutrum libero sed consequat condimentum. Donec metus arcu, dictum posuere turpis ac, mattis lacinia arcu. Nam malesuada mauris in tortor egestas, ut pellentesque est dignissim. Fusce lacinia at urna nec mattis. Etiam a pellentesque felis. Maecenas sed erat vitae erat aliquet scelerisque ac id nunc. Quisque non interdum leo, accumsan vehicula sem. Morbi ac faucibus lectus, at ullamcorper est.")
      )
    )
  })
}

shinyApp(ui, server, options = list(port = 3002L))
```

