//Declaramos Variables 
var menu_lateral = document.getElementById("kmmenu_lateral");
var boton_abrir = document.getElementById("kmbtn_abrir");
var body = document.getElementById("body");

//Declaramos la funcion
function abrir_cerrar_menu(){
    body.classList.toggle("body_move");
    menu_lateral.classList.toggle("kmmenu__lateral_move");
}
//Llamamos el evento
document.getElementById("kmbtn_abrir").addEventListener("click", abrir_cerrar_menu);

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        menu_lateral.classList.remove("kmmenu__lateral_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        menu_lateral.classList.add("kmmenu__lateral_move");
    }

});

const temaOscuro =() =>{
    document.querySelector("body").setAttribute("data-bs-theme","dark");
    document.querySelector("#dl-icon").setAttribute("class","bi bi-sun-fill");
    document.querySelector("header").classList.remove("bg-light");
    document.querySelector("header").classList.add("bg-dark");
    document.getElementById("redes").classList.remove("bg-light");
    document.getElementById("redes").classList.add("bg-dark");
}

const temaClaro =() =>{
    document.querySelector("body").setAttribute("data-bs-theme","light");
    document.querySelector("#dl-icon").setAttribute("class","bi bi-moon-stars-fill");
    document.querySelector("header").classList.remove("bg-dark");
    document.querySelector("header").classList.add("bg-light");
    document.getElementById("redes").classList.remove("bg-dark");
    document.getElementById("redes").classList.add("bg-light");
}

const cambiarTema=() =>{
    document.querySelector("body").getAttribute("data-bs-theme")==="light"?
    temaOscuro() : temaClaro();
}

document.addEventListener("DOMContentLoaded", function () {
    const temaActual = document.querySelector("body").getAttribute("data-bs-theme");

    if (temaActual === "dark") {
        document.querySelector("header").classList.add("bg-dark");
    } else {
        document.querySelector("header").classList.add("bg-light");
    }
    if (temaActual === "dark") {
        document.getElementById("redes").classList.add("bg-dark");
    } else {
        document.getElementById("redes").classList.add("bg-light");
    }
});

