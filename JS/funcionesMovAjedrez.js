let coordenadaLetras = ["a", "b", "c", "d", "e", "f", "g", "h"];
const sonidoPieza = new Audio("media/sonidoPieza.mp4");


const dropPiezas = () => {
  for (let i1 = 0; i1 < 8; i1++) {
    for (let i = 1; i < 9; i++) {
      document
        .getElementById(`${coordenadaLetras[i1]}${i}`)
        .addEventListener("dragover", (e) => {
          e.preventDefault();
        });
    }

    for (let i = 1; i < 9; i++) {
      let casilla = document.getElementById(`${coordenadaLetras[i1]}${i}`);
      casilla.addEventListener("drop", (e) => {
        let peon = e.dataTransfer.getData("pieza");
        if(!casilla.hasChildNodes()){
            

            casilla.appendChild(document.getElementById(peon));
        }else {
            let piezaComida = casilla.childNodes;
            piezaRetirar = piezaComida[0];
            let contenedorPiezas=document.getElementById("contenedorPiezas");
            contenedorPiezas.appendChild(piezaRetirar);
            casilla.innerHTML="";


            casilla.appendChild(document.getElementById(peon));

        };
        sonidoPieza.play();
      });
    }
  }
};

const movCaballos = () => {
  for (let i = 0; i < 2; i++) {
    document
      .getElementById(`caballoBlanco${i}`)
      .addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("pieza", e.target.id);
      });
  }

  for (let i = 0; i < 2; i++) {
    document
      .getElementById(`caballoNegro${i}`)
      .addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("pieza", e.target.id);
      });
  }
};

const movTorres = () => {
  for (let i = 0; i < 2; i++) {
    document
      .getElementById(`torreBlanca${i}`)
      .addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("pieza", e.target.id);
      });
  }

  for (let i = 0; i < 2; i++) {
    document
      .getElementById(`torreNegra${i}`)
      .addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("pieza", e.target.id);
      });
  }
};

const movAlfiles = () => {
  for (let i = 0; i < 2; i++) {
    document
      .getElementById(`alfilBlanco${i}`)
      .addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("pieza", e.target.id);
      });
  }
  for (let i = 0; i < 2; i++) {
    document
      .getElementById(`alfilNegro${i}`)
      .addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("pieza", e.target.id);
      });
  }
};

const movPeones = () => {
  for (let i = 0; i < 8; i++) {
    document
      .getElementById(`peonBlanco${i}`)
      .addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("pieza", e.target.id);
      });
    document
      .getElementById(`peonNegro${i}`)
      .addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("pieza", e.target.id);
      });
  }
};

const movDamaRey = () => {
  document.getElementById(`reyBlanco`).addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("pieza", e.target.id);
  });

  document.getElementById(`reyNegro`).addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("pieza", e.target.id);
  });

  document.getElementById(`damaBlanca`).addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("pieza", e.target.id);
  });

  document.getElementById(`damaNegra`).addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("pieza", e.target.id);
  });
};



const movimientosPiezas = () => {
    movCaballos();
    movTorres();
    movAlfiles();
    movDamaRey();
    movPeones();
    dropPiezas();
  };
