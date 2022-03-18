/*
PRO2
case: Alices Restaurant - touchscreeen f.eks. til iPad Air i str. 820x1180
*/


/* --- Book bord - Selvstudiedag 4 d. 16/03 ---- */
btn1.addEventListener('click', function(){
  gæster.style.display = 'block';
  navn.style.display = 'none';
})
btn2.addEventListener('click', function(){
  tidspunkt.style.display = 'block';
  gæster.style.display = 'none';
})
btn3.addEventListener('click', function(){
  radio.style.display = 'block';
  tidspunkt.style.display = 'none';
})
btn4.addEventListener('click', function(){
  lastField.style.display = 'block';
  radio.style.display = 'none';
})

//Book bord - tilbageknapper
tilbagebtn1.addEventListener('click', function(){
  navn.style.display = 'block';
  gæster.style.display = 'none';
})
tilbagebtn2.addEventListener('click', function(){
  gæster.style.display = 'block';
  tidspunkt.style.display = 'none';
})
tilbagebtn3.addEventListener('click', function(){
  tidspunkt.style.display = 'block';
  radio.style.display = 'none';
})
tilbagebtn4.addEventListener('click', function(){
  radio.style.display = 'block';
  lastField.style.display = 'none';
})

//Book bord - Selvstudiedag 3 Spørgsmål 5
function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Navn skal udfyldes");
    return false;
  }
}
function validateForm() {
  let x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Email skal udfyldes");
    return false;
  }
}
