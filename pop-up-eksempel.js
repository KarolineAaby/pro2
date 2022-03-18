// hvis man vil bruge sin egen - så kopier accessToken for kortet
mapboxgl.accessToken = 'pk.eyJ1Ijoia2Fyb2xpbmVhYWJ5IiwiYSI6ImNsMHFlY2xhODI5NzEzZnFrbzB6Nzhwb2IifQ.yRyC01-4DeWoifSLBpA-Ng';
  const monument = [-77.0353, 38.8895];

  // Tilføjer egen  position - kan evt. ses i den sidste del af URL og under settings
  const aarhus = [10.2101931, 56.1588146]

  const map = new mapboxgl.Map({
      container: 'map',

      //for at bruge egen style - kopier style URL for kortet
      style: 'mapbox://styles/karolineaaby/cl0qmp00y00is15ql0ggc9m1v',
      center: aarhus, //ændre til aarhus da det er der jeg vil være
      zoom: 15,
      pitch: 60, //måles i grader
      bearing: 30 //måles i grader
  });

  // create the popup
  const popup = new mapboxgl.Popup({ offset: 25 }).setText(
      "Alice's Restaurant tilbyder lækker aftensmad i hyggelige omgivelser."
  );

  // create DOM element for the marker
  const el = document.createElement('div');
  el.id = 'marker';

  // create the marker
  new mapboxgl.Marker(el)
      .setLngLat(aarhus)
      .setPopup(popup) // sets a popup on this marker
      .addTo(map);
