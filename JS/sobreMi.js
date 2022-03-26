const crearSobreMi = () => {
  let link = document.getElementById("link");
  if (link) head.removeChild(link);
  link = document.getElementById("link");
  if (link) eliminarLink("link");
  main.innerHTML = "";
  main.insertAdjacentHTML(
    "afterbegin",sobreMiHTML);
};
