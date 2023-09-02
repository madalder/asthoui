const success = (position) => {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	Shiny.setInputValue("coordinates", {
		latitude: latitude,
		longitude: longitude,
	});
}

const error = (error) => {
	console.error(error);
}

Shiny.addCustomMessageHandler("asthoui-geo", (msg) => {
	navigator.geolocation.getCurrentPosition(success, error);
});
