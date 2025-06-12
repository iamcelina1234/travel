
     
   maptilersdk.config.apiKey = mapToken;

      const map = new maptilersdk.Map({
        container: 'map', // container's id or the HTML element to render the map
        style: maptilersdk.MapStyle.STREETS,  // stylesheet location
        zoom: 3,
        center: [ 77.2088, 28.6139],
      });

      const gc = new maptilersdkMaptilerGeocoder.GeocodingControl({});

      map.addControl(gc, 'top-left');
    