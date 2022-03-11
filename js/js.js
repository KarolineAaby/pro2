/*
PRO2
case: Alices Restaurant - touchscreeen i str. 750x1020
*/

/* --- Selvstudiedag 1 --- */
let sum = 0

//foretter
foretEt.addEventListener('click', function(){
  bestillinger.innerHTML += "<br>" + suppeBestilling.innerHTML + "<br/>"
  sum = sum + 80
  ialt.innerHTML = sum + "<div> kr.</div>";
})

foretTo.addEventListener('click', function(){
  bestillinger.innerHTML += "<br>" + kyllingBestilling.innerHTML + "<br/>"
  sum = sum + 89
  ialt.innerHTML = sum + "<div> kr.</div>";
})

//hovedretter
hovedretEt.addEventListener('click', function(){
  bestillinger.innerHTML += "<br>" + oksemørbradBestilling.innerHTML + "<br/>"
  //For at få dele af html ind - kan også skrive: bestillinger.innerHTML += oksemørbrad.innerHTML"
  // bestillinger.innerHTML += fjern.innerHTML + "<br>"
  //Ved brug af sessionStorage -
  //bestillinger.innerHTML += parseInt(sessionStorage.getItem("test")) + parceInt(sessionStorage.getItem("test"))
  sum = sum + 220
  ialt.innerHTML = sum + "<div> kr.</div>";
})

hovedretTo.addEventListener('click', function(){
  bestillinger.innerHTML += "<br>" + laksBestilling.innerHTML + "<br/>"
  sum = sum + 190
  ialt.innerHTML = sum + "<div> kr.</div>";
})

//desserter
dessertEt.addEventListener('click', function(){
  bestillinger.innerHTML += "<br>" + kardemommeBestilling.innerHTML + "<br/>"
  sum = sum + 69
  ialt.innerHTML = sum + "<div> kr.</div>";
})

dessertTo.addEventListener('click', function(){
  bestillinger.innerHTML += "<br>" + chokolademousseBestilling.innerHTML + "<br/>"
  sum = sum + 69
  ialt.innerHTML = sum + "<div> kr.</div>";
})


//istedet for sum, kan man bruge localstorage

// betal knap
betal.addEventListener('click', function(){
  localStorage.setItem("liste", bestillinger.innerHTML);
  location.href = "bestillingspanel-kvitering.html"
})

betal.addEventListener('click', function(){
  localStorage.setItem("pengeialt", ialt.innerHTML);
})
