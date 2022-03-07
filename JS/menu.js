let botonMenu = document.getElementById("icono-menu");

// CREAR MENU

(function () {
  let menu = document.createElement("div");
  menu.classList.add("menuu");
  let fragMenu = document.createDocumentFragment();
  fragMenu.appendChild(menu);
  cuerpo.appendChild(fragMenu);
  (function () {
    menu.innerHTML = `<div class="navegacion__menu">
    <a id="boton-about2" class="navegacion__lis ">About me</a>
    <a id="boton-proyects2" class="navegacion__lis ">My Proyect</a>
    <a id="boton-contact2" class="navegacion__lis ">Contact</a></div>`;
  })();
})();

let menu = document.querySelector(".menuu");

botonMenu.addEventListener("click", () => {
  if (!menu.style.animation) {
    menu.style.animation = "entraMenu 0.2s ease 0s 1 normal forwards running";
    botonMenu.style.animation =
      "botonMenuE 0.2s ease 0s 1 normal forwards running";
  } else {
    menu.style.animation = "saleMenu 0.2s ease 0s 1 normal forwards running";
    botonMenu.style.animation =
      "botonMenuS 0.2s ease 0s 1 normal forwards running";
    setTimeout(() => {
      menu.removeAttribute("style", "animation");
    }, 200);
  }
});

// REDIRECCION MENU

const botonProyect2 = document.getElementById("boton-proyects2");
const botonAbout2 = document.getElementById("boton-about2");
const botonContact2 = document.getElementById("boton-contact2");

botonProyect2.addEventListener("click", () => {
  crearProyectos();
});
botonAbout2.addEventListener("click", () => {
  crearSobreMi();
});
botonContact2.addEventListener("click", () => {
  crearContacto();
});
