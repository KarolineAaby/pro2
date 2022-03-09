/*
PRO2
case: Alices Restaurant - touchscreeen
*/

//Selvstudiedag 1
let sum = 0

// Ved brug af sessionStorage
let gem = sessionStorage.setItem("test", "23");

test.addEventListener('click', function(){
  // bestillinger.innerHTML += "<p>Oksemørbrad</p>"
  bestillinger.innerHTML += "<br>" + oksemørbradBestilling.innerHTML + "<br/>"
  //For at få dele af html ind - kan også skrive: bestillinger.innerHTML += oksemørbrad.innerHTML"
  // bestillinger.innerHTML += fjern.innerHTML + "<br>"
  //Ved brug af sessionStorage -
  //bestillinger.innerHTML += parseInt(sessionStorage.getItem("test")) + parceInt(sessionStorage.getItem("test"))

  sum = sum + 220
  ialt.innerHTML = sum + "<div> kr.</div>";

})

testTo.addEventListener('click', function(){
  //bestillinger.innerHTML += "<p>Laks</p>"
  bestillinger.innerHTML += "<br>" + laksBestilling.innerHTML + "<br/>"
  sum = sum + 190
  ialt.innerHTML = sum + "<div> kr.</div>";
})

testTre.addEventListener('click', function(){
  // bestillinger.innerHTML += "<p>Kylling</p>"
  bestillinger.innerHTML += "<br>" + kyllingBestilling.innerHTML + "<br/>"
  sum = sum + 89
  ialt.innerHTML = sum + "<div> kr.</div>";
})

//istedet for sum, kan man bruge localstorage

// betal knap
betal.addEventListener('click', function(){
  localStorage.setItem("liste", bestillinger.innerHTML);
})

betal.addEventListener('click', function(){
  localStorage.setItem("pengeialt", ialt.innerHTML);
})
