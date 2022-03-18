/*
PRO2
case: Alices Restaurant - touchscreeen f.eks. til iPad Air i str. 820x1180
Selvstudiedag 1
*/


/* --- Selvstudiedag 1 d. 09/03 - bestillingspanel --- */
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
  sum = sum + 220
  ialt.innerHTML = sum + "<div> kr.</div>";
})
function cancel(amount) {
  sum -= amount
  ialt.innerHTML = sum
}

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

// betal knap
betal.addEventListener('click', function(){
  localStorage.setItem("liste", bestillinger.innerHTML);
  location.href = "bestillingspanel-kvitering.html"
})

betal.addEventListener('click', function(){
  localStorage.setItem("pengeialt", ialt.innerHTML);
})
