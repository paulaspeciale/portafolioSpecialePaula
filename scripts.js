function myFunction() {
  var elemento = document.getElementById("contacto");
  if (elemento.style.display === "block") {
    elemento.style.display = "none";
  } else {
    elemento.style.display = "block";
  }
} 

const dialog = document.querySelector('#dialog1')
const dialog2 = document.querySelector('#dialog2')
const cancel = document.querySelector('#cancel')
const cancel2 = document.querySelector('#cancel2')
const show = document.querySelector('#show')
const show2 = document.querySelector('#show2')

show.addEventListener('click', ()=> dialog.showModal())
show2.addEventListener('click', ()=> dialog2.showModal())
cancel.addEventListener('click', ()=> dialog.close())
cancel2.addEventListener('click', ()=> dialog2.close())
