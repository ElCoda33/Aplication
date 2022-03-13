
//INSERTAR ESTILOS O ELIMINAR ESTOS

const insertarLink = (url, id) => {
  let nombre = document.createElement("link");
  nombre.setAttribute("rel", `stylesheet`);
  nombre.setAttribute("type", `text/css`);
  nombre.setAttribute("href", `${url}`);
  nombre.setAttribute("id", `${id}`);
  head.insertAdjacentElement("beforeend", nombre);
};

const eliminarLink = (id) => {
  let nombre = document.querySelector(`#${id}`);
  head.removeChild(nombre);
};

const verificarLink = ()=>{

  

};



const conseguirObjeto=(id,nombre)=>{
  nombre = document.getElementById(`${id}`);
  return nombre;
}

const insertarScript = (nombreScript)=>{
  body.insertAdjacentHTML("beforeEnd",`<script src="JS/${nombreScript}"></script>`);
}

const comprovacionLink = (nombreLink)=>{
  link = document.getElementById("link");
  if (link) head.removeChild(link);
      if (!link) {
        head.insertAdjacentHTML(
          "beforeend",
          `<link rel="stylesheet" href="${nombreLink}" id="link" >`
          
        );
      }
}



