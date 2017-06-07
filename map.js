var formatted_address, lat, lng
module.exports.geocodeLocation = (map, marker, geocoder_obj) => {//semicurry
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode(geocoder_obj, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			marker.setPosition(map.center);

			if (map.zoom < 15) { map.setZoom(15);}

			formatted_address = results[0].formatted_address;
			lat = map.center.lat()
			lng = map.center.lng()
		} else {
			console.log('Hmm, had trouble finding that address');
		}
	})
}

module.exports.configMap = ({map_container, icon_url, styles, geocoder, geocoder_obj}) => () => {
	if (map_container.length !== null) {
		var location = {lat: -15.363, lng: 131.044};
		var map = new google.maps.Map(map_container, {
			zoom: 4,
			center: location,
			scrollwheel: false,
			styles
		});

		var marker = new google.maps.Marker({
			position: location,
			map: map,
			icon: icon_url,
		});
		geocoder(map, marker, geocoder_obj)
	}
}
