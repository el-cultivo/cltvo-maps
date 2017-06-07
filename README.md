# cltvo-maps

## Instalación
`npm install cltvo-maps -S`

## ¿Qué permite hacer?
* Agregar un icono para el marcador
* Localizar el marcador por medio de una dirección (String)
* Pasar un JSON con estilos, este package trae ya un set de estilos en gris

Ejemplo de uso:
```
import {configMap, geocodeLocation, grey_styles} from 'cltvo-maps'

//map

const map_container = document.getElementById('map')
if (map_container !== null) {
	window.initMap = configMap({//callback con el que el script de google maps inicializa el mapa
		map_container, //pasamos el contenedor del mapa
		icon_url: window.icon_url, 
		geocoder: geocodeLocation,//el tipo de geocoder
		geocoder_obj: {address: window.taller_adg_address},//el objeto que recibe el geocoder, address es un string
		styles: grey_styles//colores, etc.
	})
}
```