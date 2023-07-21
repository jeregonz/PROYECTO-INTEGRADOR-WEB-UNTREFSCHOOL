let nav = document.querySelector("nav");
let flecha = document.getElementById("flecha");
let btnMenu = document.getElementById("btnMenu");

btnMenu.addEventListener("click", toggleMenu);

function toggleMenu() {
    nav.classList.toggle("show");
    if (flecha.getAttribute('src') == "images/flecha-abajo.jpg"){
        flecha.setAttribute('src', "images/flecha-arriba.jpg")
    }
    else 
        flecha.setAttribute('src', "images/flecha-abajo.jpg")
}
