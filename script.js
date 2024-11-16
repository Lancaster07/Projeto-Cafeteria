const form = document.querySelector(".fomurario")
const mascara = document.querySelector(".mascara-formulario")



function apareceFormu(){
   form.style.left = "50%"
   form.style.transform = "translateX(-50%)"
   mascara.style.visibility ="visible" 
}

function desaparecerForm(){
   form.style.left = "-290px"
   form.style.transform = "translateX(0)"
   mascara.style.visibility ="hidden" 
}