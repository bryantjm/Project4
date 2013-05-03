;(function($) {
	
	var MobileMap = function(obj, options) {

		var _default = {
			geocoder: new google.maps.Geocoder(),
			callback: {
					init:function() {}
			},

			mapOptions: {
				zoom: 8,
				center: new google.maps.LatLng(0, 0),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
		}
	
		var t = {
			db: new localStorageDB('MapIndex', localStorageDB),
			geocoder: new google.maps.Geocoder(),
			map: false,
			markers: [],
			options: $.extend(true, _default, options)
		
		};
		
		t.init = function() {
			t.map = new google.maps.Map(obj.get(0), t.options.mapOptions);

			

			t.options.callback.init();
		}

		t.geocode = function(address, callback) {
				if(typepf callback != "function") {
					callback = function(){};
				}

				t.geocoder.geocode({'address': location.address}, function(results, status){

				
					if (status == google.maps.GeocoderStatus.OK) {
						callback(results, status);
					} else {
						alert("'"+location.address+"' is not a valid location");
					}
				});
		}

		t.hasLatLng = function(lat, lng) {
			var _return = false;

			t.db.query('markers', function(row) {
				if(row.lat == lat && row.lng == lng)  {
					_return = true;
				}
			});


		}

		t.addMarker = function(data, callback) {
			if(typeof callback != "function") {
				callback = function(){};
			}

			t.geocode(data, function(results, status) {
				var lat = results[0].geometry.location.lat();
				var lng = results[0].geometry.location.lng();

				if(!t.hasLatLng(lat, lng)) {
					var latLng = new
					var marker =
				});

					t.markers.push(marker):

				
			}
		}

			var mapOptions = {
				zoom: 8,
				center: new google.maps.LatLng(-34.397, 150.644),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			t.map = new google.maps.Map(obj.get(0), mapOptions);

		}

		t.init();

		return t;
		

	}
	
	$.fn.MobileMap = function(options) {
		return new MobileMap($(this), options);
	}	
	
})(jQuery);