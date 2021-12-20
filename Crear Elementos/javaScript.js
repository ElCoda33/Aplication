
let contenedor = document.querySelector(".contenedor2");
let boton = document.querySelector("#enviar");
let alto = document.querySelector("#alto");
let tipo = document.querySelector("#tipo");
let ancho = document.querySelector("#ancho");
let fondo = document.querySelector("#fondo");
let cantidad = document.querySelector("#cantidad");
let documento = document.createElement("DIV");
let borrar = document.getElementById("borrar");
let fragmento = document.createDocumentFragment();





const crearDiv = (nI,tipo, ancho, alto, background,border,paddin,marg,texto)=>{
    

    for(i = 0; i < nI; i++){
        let elemento = document.createElement(tipo);
        let text = document.createTextNode(texto);
        elemento.style.width = ancho;
        elemento.style.height = alto;
        elemento.stylepadding = paddin;
        elemento.style.margin = marg;
        elemento.style.border = border;   
        elemento.style.background = background;
        documento.style.display = "flex";
        documento.style.justifyItems = "center";
        documento.style.alignContent = "center";
        documento.style.flexWrap = "wrap";
        elemento.appendChild(text);
        documento.appendChild(elemento);
        fragmento.appendChild(documento);
        contenedor.appendChild(fragmento);
        
    }
   
}

boton.addEventListener("click", (ev)=>{
    let valorAlto = document.querySelector("#alto").value;
    let valorBorder = document.querySelector("#border").value;
    let valorFondo = document.querySelector("#fondo").value;
    let valorAncho = document.querySelector("#ancho").value;
    let valorTipo = document.querySelector("#tipo").value;
    let valorPadding = document.querySelector("#padding").value;
    let valorMargin = document.querySelector("#margin").value;
    let valorTexto = document.querySelector("#texto").value;
    let valorCantidad = parseInt(document.querySelector("#cantidad").value);
    ev.preventDefault();
    crearDiv(valorCantidad,valorTipo,valorAncho,valorAlto,valorFondo,valorBorder,valorPadding,valorMargin, valorTexto);
});

borrar.addEventListener("click",()=>{
    documento.innerHTML = "";
});













































