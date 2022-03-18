/*
PRO2
case: Alices Restaurant - touchscreeen f.eks. til iPad Air i str. 820x1180
*/


/* --- weather - Selvstudiedag 2 d. 11/03 --- */
// --- har prøvet at lave mine egne vejr ikoner, i andre farver, men det lykkedes ikke i denne omgang--- //

//Aarhus
$(document).ready(function() {

  // get the weather data via query URI
  fetch("https://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=da&units=metric&appid=33ab4030765a324627ea36aa15fc86f5").then(response => {
    return response.json();
  }).then(data => {

    // Work with JSON data here
    console.log(data); // show what's in the json

    // solnedgang
    var sunsetMs = data.sys.sunset * 1000; // dato-objektet har brug for millisek. Derfor * 1000
    var sunset = new Date(sunsetMs);

    // Minutter - tilføj 0 foran tal under 10
    var sunsetMinutter = sunset.getMinutes()
    var sunsetMinutterVis

    if (sunsetMinutter < 10) {
      sunsetMinutterVis = "0" + sunsetMinutter;
    } else {
      sunsetMinutterVis = sunsetMinutter;
    }

    // Timer - tilføj 0 foran tal under 10
    var sunsetTimer = sunset.getHours()
    var sunsetTimerVis

    if (sunsetTimer < 10) {
      sunsetTimerVis = "0" + sunsetTimer;
    } else {
      sunsetTimerVis = sunsetTimer;
    }

    // Datoformattering @URI < https://www.w3schools.com/js/js_date_methods.asp >
    var sunsetTime = sunsetTimerVis + ":" + sunsetMinutterVis;


    // solopgang
    var sunriseMs = data.sys.sunrise * 1000; // dato-objektet har brug for millisek. Derfor * 1000
    var sunrise = new Date(sunriseMs);

    // Minutter - tilføj 0 foran tal under 10
    var sunriseMinutter = sunrise.getMinutes()
    var sunriseMinutterVis

    if (sunriseMinutter < 10) {
      sunriseMinutterVis = "0" + sunriseMinutter;
    } else {
      sunriseMinutterVis = sunriseMinutter;
    }

    // Timer - tilføj 0 foran tal under 10
    var sunriseTimer = sunrise.getHours()
    var sunriseTimerVis

    if (sunriseTimer < 10) {
      sunriseTimerVis = "0" + sunriseTimer;
    } else {
      sunriseTimerVis = sunriseTimer;
    }

    // Datoformattering @URI < https://www.w3schools.com/js/js_date_methods.asp >
    var sunriseTime = sunriseTimerVis + ":" + sunriseMinutterVis;

    // vis på skærm
    result.innerHTML = `
        <div id="vejretBoks">

        <hr class="line">
        <section id="vejretLayout">
          <article>
            <img id="vejrIkon" src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Vejret lige nu i Aarhus" />
            <div id="vind">
              <img id="pil" src="images/pil.png" alt="Pil efter vindretning" style="width: auto; height: 20px;">
              <p> ${data.wind.speed} m/s</p>
            </div>
          </article>
          <article id="vejretInfo">
            <p> Temperatur: ${data.main.temp}°</p>
            <p> Føles som: ${data.main.feels_like}°</p>
            <p> Solnedgang: ${sunsetTime}</p>
            <p> Solopgang: ${sunriseTime}</p>
          </article>
        </section>
        </div>
        `

    //pil
    let roter = data.wind.deg //fra api

    pil.style.transform = "rotate(" + roter + "deg)";


  }).catch(err => {
    // Do something for an error here
    console.log('There was an error ...');
  });

});



/* --- mapbox - Selvstudiedag 3 d. 15/03 --- */
// https://docs.mapbox.com/mapbox-gl-js/example/set-popup/

// for at bruge egen - så kopier accessToken for kortet
mapboxgl.accessToken = 'pk.eyJ1Ijoia2Fyb2xpbmVhYWJ5IiwiYSI6ImNsMHFlY2xhODI5NzEzZnFrbzB6Nzhwb2IifQ.yRyC01-4DeWoifSLBpA-Ng';
const monument = [-77.0353, 38.8895];

// Tilføjet min egen  position
const aarhus = [10.2101931, 56.1588146]

const map = new mapboxgl.Map({
  container: 'map',

  //for at bruge egen style - kopier style URL for kortet
  style: 'mapbox://styles/karolineaaby/cl0quzad900eo15n0korqj096',
  center: aarhus, //ændre til aarhus da det er der jeg vil være
  zoom: 14.9,
  pitch: 60, //måles i grader
  bearing: 30 //måles i grader
});

// create the popup
const popup = new mapboxgl.Popup({
  offset: 25
}).setText(
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


/* --- step 2 åbningstider - Selvstudiedag 5 d. 18/03 --- */
let day;

switch (new Date().getDay()) {

  case 4: //torsdag
    day = 'kl 22.00';
    break;
  case 5: //fredag
    day = 'kl. 23.30';
    break;
  case 6: //lørdag
    day = 'kl 23.30';
    break;
  case 7: //søndag
    day = 'kl 22.30';
    break;

  default:
    day = 'kl 21.00' //mandag, tirsdag, onsdag
}

infoAaben.innerHTML = 'Bestil inden vi lukker i dag ' + day;
