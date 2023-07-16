cat("Building CSS\n")
output <- sass::sass(
  sass::sass_file(
    'scss/_stories.scss'
  ),
  cache = NULL,
  options = sass::sass_options(
    output_style='compressed'
  ),
  output = 'inst/packer/stories.min.css'
)

output <- sass::sass(
  sass::sass_file(
    'scss/main.scss'
  ),
  cache = NULL,
  options = sass::sass_options(
    output_style='compressed'
  ),
  output = 'inst/packer/styles.min.css'
)
