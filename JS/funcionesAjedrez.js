function insertarPieza(pieza, casilla) {
  casilla.insertAdjacentHTML("afterbegin", pieza);
}
function ajedrez() {
  comprovacionLink("CSS/estilosAjedrez.css");
  main1.innerHTML = "";
  main1.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="main">
        <div class="contenedor">
            
            <div class="tablero">
                <div class="contenedor__tablero">
                    <div class="coordenadas__izquierda">
                        <div class="letra">8</div>
                        <div class="letra">7</div>
                        <div class="letra">6</div>
                        <div class="letra">5</div>
                        <div class="letra">4</div>
                        <div class="letra">3</div>
                        <div class="letra">2</div>
                        <div class="letra">1</div>
                    </div>
                    <div class="tablero__contCasi">
                        <div class="tablero__casilla" id="a8"></div>
                        <div class="tablero__casilla --negra" id="b8"></div>
                        <div class="tablero__casilla" id="c8"></div>
                        <div class="tablero__casilla --negra" id="d8"></div>
                        <div class="tablero__casilla" id="e8"></div>
                        <div class="tablero__casilla --negra" id="f8"></div>
                        <div class="tablero__casilla" id="g8"></div>
                        <div class="tablero__casilla --negra" id="h8"></div>
                        <div class="tablero__casilla  --negra" id="a7"></div>
                        <div class="tablero__casilla"  id="b7"></div>
                        <div class="tablero__casilla --negra"  id="c7"></div>
                        <div class="tablero__casilla "  id="d7"></div>
                        <div class="tablero__casilla --negra"  id="e7"></div>
                        <div class="tablero__casilla "  id="f7"></div>
                        <div class="tablero__casilla --negra"  id="g7"></div>
                        <div class="tablero__casilla "  id="h7"></div>
                        <div class="tablero__casilla"  id="a6"></div>
                        <div class="tablero__casilla --negra" id="b6"></div>
                        <div class="tablero__casilla" id="c6"></div>
                        <div class="tablero__casilla --negra" id="d6"></div>
                        <div class="tablero__casilla" id="e6"></div>
                        <div class="tablero__casilla --negra"  id="f6"></div>
                        <div class="tablero__casilla"  id="g6"></div>
                        <div class="tablero__casilla --negra" id="h6"></div>
                        <div class="tablero__casilla --negra" id="a5"></div>
                        <div class="tablero__casilla " id="b5"></div>
                        <div class="tablero__casilla --negra" id="c5"></div>
                        <div class="tablero__casilla " id="d5"></div>
                        <div class="tablero__casilla --negra" id="e5"></div>
                        <div class="tablero__casilla " id="f5"></div>
                        <div class="tablero__casilla  --negra" id="g5"></div>
                        <div class="tablero__casilla" id="h5"></div>
                        <div class="tablero__casilla" id="a4"></div>
                        <div class="tablero__casilla --negra" id="b4"></div>
                        <div class="tablero__casilla" id="c4"></div>
                        <div class="tablero__casilla --negra" id="d4"></div>
                        <div class="tablero__casilla" id="e4"></div>
                        <div class="tablero__casilla --negra" id="f4"></div>
                        <div class="tablero__casilla" id="g4"></div>
                        <div class="tablero__casilla --negra" id="h4"></div>
                        <div class="tablero__casilla --negra" id="a3"></div>
                        <div class="tablero__casilla " id="b3"></div>
                        <div class="tablero__casilla  --negra" id="c3"></div>
                        <div class="tablero__casilla " id="d3"></div>
                        <div class="tablero__casilla --negra" id="e3"></div>
                        <div class="tablero__casilla" id="f3"></div>
                        <div class="tablero__casilla --negra" id="g3"></div>
                        <div class="tablero__casilla" id="h3"></div>
                        <div class="tablero__casilla " id="a2"></div>
                        <div class="tablero__casilla  --negra" id="b2"></div>
                        <div class="tablero__casilla" id="c2"></div>
                        <div class="tablero__casilla --negra" id="d2"></div>
                        <div class="tablero__casilla " id="e2"></div>
                        <div class="tablero__casilla --negra" id="f2"></div>
                        <div class="tablero__casilla" id="g2"></div>
                        <div class="tablero__casilla --negra" id="h2"></div>
                        <div class="tablero__casilla --negra" id="a1"></div>
                        <div class="tablero__casilla" id="b1"></div>
                        <div class="tablero__casilla --negra" id="c1"></div>
                        <div class="tablero__casilla" id="d1"></div>
                        <div class="tablero__casilla --negra" id="e1"></div>
                        <div class="tablero__casilla " id="f1"></div>
                        <div class="tablero__casilla --negra" id="g1"></div>
                        <div class="tablero__casilla" id="h1"></div>
    
                    </div>
                </div>
                <div class="coordenadas2">
                    <div class="numeros">a</div>
                    <div class="numeros">b</div>
                    <div class="numeros">c</div>
                    <div class="numeros">d</div>
                    <div class="numeros">e</div>
                    <div class="numeros">f</div>
                    <div class="numeros">g</div>
                    <div class="numeros">h</div>
                </div>
            </div>
            <div class="puntos">
                <div class="puntos__piezas" id="contenedorPiezas"></div>
                <button class="iniciar" id="boton-iniciar" value="Iniciar">
                    Iniciar
                </button>
            </div>
        </div>
      -
      </div>`
  );
}

function iniciarAjedrez() {
  for (let i = 1; i < 9; i++) {
    conseguirObjeto(`a${i}`, `a${i}`);
    conseguirObjeto(`b${i}`, `b${i}`);
    conseguirObjeto(`c${i}`, `c${i}`);
    conseguirObjeto(`d${i}`, `d${i}`);
    conseguirObjeto(`e${i}`, `e${i}`);
    conseguirObjeto(`f${i}`, `f${i}`);
    conseguirObjeto(`g${i}`, `g${i}`);
    conseguirObjeto(`h${i}`, `h${i}`);
  }

  let peonesNegros = new Array();
  for (let i = 0; i < 8; i++) {
    peonesNegros[
      i
    ] = `<img src="IconosAjedrez/peonNegro.png" class="pieza" id="peonNegro${i}"></img>`;
  }

  let peonesBlancos = new Array();
  for (let i = 0; i < 8; i++) {
    peonesBlancos[
      i
    ] = `<img src="IconosAjedrez/peonBlanco.png" class="pieza" id="peonBlanco${i}"></img>`;
  }

  let caballosBlancos = new Array();
  for (let i = 0; i < 2; i++) {
    caballosBlancos[
      i
    ] = `<img src="IconosAjedrez/caballoBlanco.png" class="pieza" id="caballoBlanco${i}"></img>`;
  }

  let caballosNegros = new Array();
  for (let i = 0; i < 2; i++) {
    caballosNegros[
      i
    ] = `<img src="IconosAjedrez/caballoNegro.png" class="pieza" id="caballoNegro${i}"></img>`;
  }

  let torresBlancas = new Array();
  for (let i = 0; i < 2; i++) {
    torresBlancas[
      i
    ] = `<img src="IconosAjedrez/torreBlanca.png" class="pieza" id="torreBlanca${i}"></img>`;
  }

  let torresNegras = new Array();
  for (let i = 0; i < 2; i++) {
    torresNegras[
      i
    ] = `<img src="IconosAjedrez/torreNegra.png" class="pieza" id="torreNegra${i}"></img>`;
  }

  let alfilesNegros = new Array();
  for (let i = 0; i < 2; i++) {
    alfilesNegros[
      i
    ] = `<img src="IconosAjedrez/alfilNegro.png" class="pieza" id="alfilNegro${i}"></img>`;
  }
  let alfilesBlancos = new Array();
  for (let i = 0; i < 2; i++) {
    alfilesBlancos[
      i
    ] = `<img src="IconosAjedrez/alfilBlanco.png" class="pieza" id="alfilBlanco${i}"></img>`;
  }
  let reyBlancoStri;
  reyBlancoStri = `<img src="IconosAjedrez/reyBlanco.png" class="pieza" id="reyBlanco"></img>`;

  let reyNegroStri;
  reyNegroStri = `<img src="IconosAjedrez/reyNegro.png" class="pieza" id="reyNegro"></img>`;

  let damaBlancaStri;

  damaBlancaStri = `<img src="IconosAjedrez/damaBlanca.png" class="pieza" id="damaBlanca"></img>`;

  let damaNegraStri;

  damaNegraStri = `<img src="IconosAjedrez/damaNegra.png" class="pieza" id="damaNegra"></img>`;

  let verificar = true;

  //Verificacion

  //peones

  insertarPieza(peonesBlancos[0], a2);
  insertarPieza(peonesBlancos[1], b2);
  insertarPieza(peonesBlancos[2], c2);
  insertarPieza(peonesBlancos[3], d2);
  insertarPieza(peonesBlancos[4], e2);
  insertarPieza(peonesBlancos[5], f2);
  insertarPieza(peonesBlancos[6], g2);
  insertarPieza(peonesBlancos[7], h2);
  insertarPieza(peonesNegros[0], a7);
  insertarPieza(peonesNegros[1], b7);
  insertarPieza(peonesNegros[2], c7);
  insertarPieza(peonesNegros[3], d7);
  insertarPieza(peonesNegros[4], e7);
  insertarPieza(peonesNegros[5], f7);
  insertarPieza(peonesNegros[6], g7);
  insertarPieza(peonesNegros[7], h7);

  //caballos

  insertarPieza(caballosBlancos[0], b1);
  insertarPieza(caballosBlancos[1], g1);
  insertarPieza(caballosNegros[0], b8);
  insertarPieza(caballosNegros[1], g8);

  //torres

  insertarPieza(torresBlancas[0], a1);
  insertarPieza(torresBlancas[1], h1);
  insertarPieza(torresNegras[0], a8);
  insertarPieza(torresNegras[1], h8);

  //alfiles

  insertarPieza(alfilesBlancos[0], c1);
  insertarPieza(alfilesBlancos[1], f1);
  insertarPieza(alfilesNegros[0], c8);
  insertarPieza(alfilesNegros[1], f8);

  //reyes y damas

  insertarPieza(reyBlancoStri, e1);
  insertarPieza(reyNegroStri, e8);
  insertarPieza(damaBlancaStri, d1);
  insertarPieza(damaNegraStri, d8);

  //for (let i = 0; i < 8; i++) {
  //  conseguirObjeto(`peonBlanco${i}`, `peonBlanco${i}`);
  // }

  for (let i = 0; i < 8; i++) {
    conseguirObjeto(`peonNegro${i}`, `peonNegro${i}`);
  }

  for (let i = 0; i < 8; i++) {
    conseguirObjeto(`caballoBlanco${i}`, `caballoBlanco${i}`);
  }
  for (let i = 0; i < 8; i++) {
    conseguirObjeto(`caballoNegro${i}`, `caballoNegro${i}`);
  }
  for (let i = 0; i < 8; i++) {
    conseguirObjeto(`torreBlanca${i}`, `torreBlanca${i}`);
  }
  for (let i = 0; i < 8; i++) {
    conseguirObjeto(`torreNegra${i}`, `torreNegra${i}`);
  }
  for (let i = 0; i < 8; i++) {
    conseguirObjeto(`alfilBlanco${i}`, `alfilBlanco${i}`);
  }
  for (let i = 0; i < 8; i++) {
    conseguirObjeto(`alfilNegro${i}`, `alfilNegro${i}`);
  }

  conseguirObjeto(`reyNegro`, `reyNegro`);
  conseguirObjeto(`reyBlanco`, `Blanco`);
  conseguirObjeto(`damaBlanca`, `damaBlanca`);
  conseguirObjeto(`damaNegra`, `damaNegra`);

  movimientosPiezas();
}
