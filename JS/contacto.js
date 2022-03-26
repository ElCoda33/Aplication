const crearContacto = () => {
  let link = document.getElementById("link");
  if (link) head.removeChild(link);
  link = document.getElementById("link");
  if (!link) insertarLink("CSS/estilosContacto.css", "link");
  main.innerHTML = "";
  main.insertAdjacentHTML("afterbegin",contactoHTML);
  let botonFormulario = document.getElementById("boton-form");
  botonFormulario.addEventListener("click", (e)=>{
    e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let razon = document.querySelector("#razon").value;
    let email = document.querySelector("#email").value;
    let mensaje = document.querySelector("#mensaje").value;
    console.log(nombre);
    console.log(razon);
    console.log(email);
    console.log(mensaje);
});
};
