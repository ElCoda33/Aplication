let coordenadaLetras = ["a", "b", "c", "d", "e", "f", "g", "h"];

const movimientosPeones = () => {
  for (let i = 0; i < 8; i++) {
    document
      .getElementById(`peonBlanco${i}`)
      .addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("peon", e.target.id);
      });
    document
      .getElementById(`peonNegro${i}`)
      .addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("peon", e.target.id);
      });
  }
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
        let peon = e.dataTransfer.getData("peon");
        casilla.appendChild(document.getElementById(peon));
      });
    }
  }
};
