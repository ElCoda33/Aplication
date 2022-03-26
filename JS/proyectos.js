const crearProyectos = () => {
  let link = document.getElementById("link");
  if (link) head.removeChild(link);
  link = document.getElementById("link");
  if (link) eliminarLink("link");
  main.innerHTML = "";
  main.insertAdjacentHTML(
    "afterbegin",proyectosHTML);

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
