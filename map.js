module.exports.geocodeLocation = function (map, marker, geocoder_obj)  {
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode(geocoder_obj, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			marker.setPosition(map.center);
		} else {
			console.log('Hmm, had trouble finding that address');
		}
	})
}

//configMap :: {map_container, icon_url, styles, geocoder, geocoder_obj} -> () -> IO DOMMap
module.exports.configMap = function(config) {	
	return function() {
		if (config.map_container.length !== null) {
			var location = {lat: -15.363, lng: 131.044};
			var map = new google.maps.Map(config.map_container, {
				zoom: 15,
				center: location,
				scrollwheel: false,
				styles: config.styles
			});

			var marker = new google.maps.Marker({
				position: location,
				map: map,
				icon: config.icon_url,
			});
			
			if(typeof config.geocoder === 'function') {
				config.geocoder(map, marker, config.geocoder_obj)
			}
		}
	}
}
