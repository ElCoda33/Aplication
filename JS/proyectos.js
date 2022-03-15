const crearProyectos = () => {
  let link = document.getElementById("link");
  if (link) head.removeChild(link);
  link = document.getElementById("link");
  if (link) eliminarLink("link");
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
          <a id="botonA" class="seccion__link-ajedrez">Enter here to see chess</a>
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

  botonA.addEventListener("click", () => {
    ajedrez();

    let iniciar = true;

    let botonIniciar = document.getElementById("boton-iniciar");

    botonIniciar.addEventListener("click", (e) => {
      if (iniciar) {
        iniciarAjedrez();
      }
      iniciar = false;
    });
  });
};
