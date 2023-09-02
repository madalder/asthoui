#' Geolocate
#' 
#' Uses the navigator's geolocation API to get the coordinates of the user.
#' This is to be used within shiny, the coordiantes are set on
#' `input$coordinates`.
#' 
#' @param session A shiny session.
#' 
#' @export
geo_locate <- function(session = shiny::getDefaultReactiveDomain()){
  session$sendCustomMessage("asthoui-geo", list())
}

#' Coordinates to State
#' 
#' Transforms coordinates as set by `input$coordinates` to a state code.
#' 
#' @param coordinates Value of `input$coordinates`.
#' 
#' @return `NA` if the user is outside the United States.
#' 
#' @keywords internal
coordinates_to_state <- function(coordinates){
	if(is.null(coordinates))
		return()

	points_df <- data.frame(x = coordinates$latitude, y = coordinates$longitude)
	pts <- sf::st_as_sf(points_df, coords = 1:2, crs = 4326)

	states <- sf::st_transform(spData::us_states, crs = 3857)
	pts <- sf::st_transform(pts, crs = 3857)

	state_names <- states[["NAME"]]
	ii <- as.integer(sf::st_intersects(pts, states))
	state_names[ii]
}

#'  Get State
#' 
#' Get state, result of the [geo_locate()] prompt.
#' 
#' @param session A shiny session.
#' 
#' @export
get_state <- function(session = shiny::getDefaultReactiveDomain()) {
  coords <- session[["input"]][["coordinates"]]
	coordinates_to_state(coords)
}
