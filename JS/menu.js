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
  link = document.getElementById("link");
  main1.innerHTML = "";
  main1.insertAdjacentHTML(
    "afterbegin",
    `

<div class="main">
<article class="articulo">
<h1 class="articulo__titulo">
    My proyects
</h1>
<div class="contenedor__articulo">
    <h3>
        I have created a chess
    </h3>
    <p class="articulo__seccion">
        <a id="botonA" target="blanck" class="seccion__link-ajedrez" href="ajedrez.html">Enter here to see chess</a>
    </p>
    <h3>
        Here you can create your HTML elements and add some style to them:
    </h3>
    <p class="articulo__seccion">
        <a class="seccion__link-ajedrez" target="blank" href="Crear Elementos/crearElementos.html">Enter to program</a>
    </p>
</div>
</article>
<aside class="aparte">
<b>I work with this technologies</b>
<img class="icono__apartecss" src="media/css3i.png" alt="css">
<img class="icono__apartehtml" src="media/html5i.png" alt="html">

</aside>
   
<footer class="pie">

</footer>
`
  );
  if (link) head.removeChild(link);
});
botonAbout2.addEventListener("click", () => {
  link = document.getElementById("link");
  main1.innerHTML = "";
  main1.insertAdjacentHTML(
    "afterbegin",
    `
<div class="main">
    <article class="articulo">
        <h1 class="articulo__titulo">
            Here i talk you about me
        </h1>
        <div class="contenedor__seccion">
            <h3 class="seccion__titulo">
                It all started with my curiosity
            </h3>
            <p class="secccion__texto">
                sdafasdf
            </p>
        </div>
    </article>
<aside class="aparte">
        <b class="aparte__titulo">I work with this technologies</b>
        <img class="aparte__icono" src="media/css3i.png" alt="css">
        <img class="aparte__icono" src="media/html5i.png" alt="html">

</aside>
<footer class="pie">

</footer>
</div`
  );
  if (link) head.removeChild(link);
});
botonContact2.addEventListener("click", () => {
  let link = document.getElementById("link");
  main1.innerHTML = "";
  main1.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="main">
      <article class="articulo">
          <form action="" class="formulario-contacto">
              <input type="text" class="formulario__input" placeholder="Enter name" required>
              <input type="email" class="formulario__input" placeholder="Enter email"required>
              <input type="text" class="formulario__input" placeholder="Reason"required>
              <textarea name="" id="" cols="30" rows="10" class="formulario__input --text-area" placeholder="Enter message"required></textarea>
              <input type="submit" class="formulario__boton" name="" id="boton-form"required>
          </form>
      </article>
  <aside class="aparte">
          <b class="aparte__titulo">I work with this technologies</b>
          <img class="aparte__icono" src="media/css3i.png" alt="css">
          <img class="aparte__icono" src="media/html5i.png" alt="html">

  </aside>
  </div>
  <footer class="pie">

  </footer>

  `
  );
  if (!link) {
    head.insertAdjacentHTML(
      "beforeend",
      `<link rel="stylesheet" href="CSS/estilosContacto.css" id="link" >`
    );
  }
});
