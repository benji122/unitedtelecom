jQuery(document).ready(function($){
	if ( $('.google-container').length ) {
		var googleContainer = document.querySelectorAll('.google-container');
		Array.prototype.forEach.call(googleContainer, function(el, i){

			//set your google maps parameters
			var latitude = -37.823323,
				longitude = 145.046120,
				el = el,
				address = el.getAttribute('data-address'),
				map_zoom = 15;

			//google map custom marker icon - .png fallback for IE11
			var marker_url = el.getAttribute('data-marker');
				
			//define the basic color of your map, plus a value for saturation and brightness
			var	main_color = '#222a2c',
				saturation_value= -50,
				brightness_value= -5;

			//we define here the style of the map
			var style= [
			    {
			        "featureType": "all",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#262b31"
			            }
			        ]
			    },
			    {
			        "featureType": "all",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "saturation": 36
			            },
			            {
			                "color": "#000000"
			            },
			            {
			                "lightness": 40
			            }
			        ]
			    },
			    {
			        "featureType": "all",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#000000"
			            },
			            {
			                "lightness": 16
			            }
			        ]
			    },
			    {
			        "featureType": "all",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#262b31"
			            },
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "administrative",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#000000"
			            },
			            {
			                "lightness": 17
			            },
			            {
			                "weight": 1.2
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#000000"
			            },
			            {
			                "lightness": 20
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#343841"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape.natural",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#262b31"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#000000"
			            },
			            {
			                "lightness": 21
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#262b31"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#292e34"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#292e34"
			            },
			            {
			                "lightness": 17
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry.stroke",
			        "stylers": [
			            {
			                "color": "#000000"
			            },
			            {
			                "lightness": 29
			            },
			            {
			                "weight": 0.2
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway.controlled_access",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#262b31"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#000000"
			            },
			            {
			                "lightness": 18
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#262b31"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#000000"
			            },
			            {
			                "lightness": 16
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#262b31"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#000000"
			            },
			            {
			                "lightness": 19
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#262b31"
			            }
			        ]
			    },
			    {
			        "featureType": "transit.line",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#262b31"
			            }
			        ]
			    },
			    {
			        "featureType": "transit.station",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#262b31"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#262b31"
			            },
			            {
			                "lightness": 17
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "geometry.fill",
			        "stylers": [
			            {
			                "color": "#262b31"
			            }
			        ]
			    }
			];
				
			//set google map options
			var map_options = {
		      	center: new google.maps.LatLng(latitude, longitude),
		      	zoom: map_zoom,
		      	panControl: false,
		      	zoomControl: false,
		      	mapTypeControl: false,
		      	streetViewControl: false,
		      	mapTypeId: google.maps.MapTypeId.ROADMAP,
		      	scrollwheel: false,
		      	styles: style
		    }
		    //inizialize the map
		    // var gmaps = /(google-container-)\d/g;
			var map = new google.maps.Map(el, map_options);
				
			//center map on location
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode({"address": address}, function(results, status) {
			if(status == google.maps.GeocoderStatus.OK) 
			{
				result = results[0].geometry.location;
				latitude = results[0].geometry.location.lat(),
				longitude = results[0].geometry.location.lng();

				map.setCenter(new google.maps.LatLng(latitude - 0.0029, longitude - 0.0041));
				
				//add a custom marker to the map	
				var marker = new google.maps.Marker({
					position: result,
					map: map,
					visible: true,
					icon: marker_url
				});
			};
		});
	  });
	};
});

  