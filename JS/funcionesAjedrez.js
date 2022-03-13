function eDrag(casilla,pieza){
    casilla.addEventListener("dragover", e =>{
        e.preventDefault();
    })  
    casilla.addEventListener("drop", e =>{
        console.log(e)

    })  
}








const movimientoPieza = ()=>{

}


function insertarPieza(pieza, casilla) {
    casilla.insertAdjacentHTML("afterbegin", pieza);
  
  }


  const movimientoPeon=(pieza, casilla)=>{

}

function iniciarAjedrez(){
    
    for(let i=1;i<9;i++){
        conseguirObjeto(`a${i}`,`a${i}`);
        conseguirObjeto(`b${i}`,`b${i}`);
        conseguirObjeto(`c${i}`,`c${i}`);
        conseguirObjeto(`d${i}`,`d${i}`);
        conseguirObjeto(`e${i}`,`e${i}`);
        conseguirObjeto(`f${i}`,`f${i}`);
        conseguirObjeto(`g${i}`,`g${i}`);
        conseguirObjeto(`h${i}`,`h${i}`);
      }
      
    
      let peonesNegros= new Array();
      for(let i=0;i<8;i++){
      peonesNegros[i] =`<img src="../IconosAjedrez/peonNegro.png" class="pieza" id="peonNegro${i}"></img>`
      }  
      
      let peonesBlancos = new Array();
      for(let i=0;i<8;i++){
      peonesBlancos[i] =`<img src="../IconosAjedrez/peonBlanco.png" class="pieza" id="peonBlanco${i}"></img>`
      }
      
      let caballosBlancos = new Array();
      for(let i=0;i<2;i++){
      caballosBlancos[i] =`<img src="../IconosAjedrez/caballoBlanco.png" class="pieza" id="caballoBlanco${i}"></img>`
      }
    
      let caballosNegros = new Array();
      for(let i=0;i<2;i++){
      caballosNegros[i] =`<img src="../IconosAjedrez/caballoNegro.png" class="pieza" id="caballoNegro${i}"></img>`
      }
      
      let torresBlancas = new Array();
      for(let i=0;i<2;i++){
      torresBlancas[i] =`<img src="../IconosAjedrez/torreBlanca.png" class="pieza" id="torreBlanca${i}"></img>`
      }
      
      let torresNegras = new Array();
      for(let i=0;i<2;i++){
      torresNegras[i] =`<img src="../IconosAjedrez/torreNegra.png" class="pieza" id="torreNegra${i}"></img>`
      }
    
      let alfilesNegros = new Array();
      for(let i=0;i<2;i++){
      alfilesNegros[i] =`<img src="../IconosAjedrez/alfilNegro.png" class="pieza" id="alfilNegro${i}"></img>`
      
      }
      let alfilesBlancos = new Array();
      for(let i=0;i<2;i++){
      alfilesBlancos[i] =`<img src="../IconosAjedrez/alfilBlanco.png" class="pieza" id="alfilBlanco${i}"></img>`
      
      }
      let reyBlanco;
      reyBlanco =`<img src="../IconosAjedrez/reyBlanco.png" class="pieza" id="reyBlanco"></img>`;
      
      let reyNegro;
      reyNegro =`<img src="../IconosAjedrez/reyNegro.png" class="pieza" id="reyNegro"></img>`;
    
      
      let damaBlanca;
      
      damaBlanca =`<img src="../IconosAjedrez/damaBlanca.png" class="pieza" id="damaBlanca"></img>`;
      
      let damaNegra;
      
      damaNegra =`<img src="../IconosAjedrez/damaNegra.png" class="pieza" id="damaNegra"></img>`;
      
      let verificar=true;
    
      
    
        
        //Verificacion
          
        if(verificar){
            
            //peones
    
            insertarPieza(peonesBlancos[0],a2);
            insertarPieza(peonesBlancos[1],b2);
            insertarPieza(peonesBlancos[2],c2);
            insertarPieza(peonesBlancos[3],d2);
            insertarPieza(peonesBlancos[4],e2);
            insertarPieza(peonesBlancos[5],f2);
            insertarPieza(peonesBlancos[6],g2);
            insertarPieza(peonesBlancos[7],h2);
            insertarPieza(peonesNegros[0],a7);
            insertarPieza(peonesNegros[1],b7);
            insertarPieza(peonesNegros[2],c7);
            insertarPieza(peonesNegros[3],d7);
            insertarPieza(peonesNegros[4],e7);
            insertarPieza(peonesNegros[5],f7);
            insertarPieza(peonesNegros[6],g7);
            insertarPieza(peonesNegros[7],h7);
            
            //caballos
      
            insertarPieza(caballosBlancos[0],b1);
            insertarPieza(caballosBlancos[1],g1);
            insertarPieza(caballosNegros[0],b8);
            insertarPieza(caballosNegros[1],g8);
            
            //torres
            
            insertarPieza(torresBlancas[0],a1);
            insertarPieza(torresBlancas[1],h1);
            insertarPieza(torresNegras[0],a8);
            insertarPieza(torresNegras[1],h8);
      
            //alfiles
      
            insertarPieza(alfilesBlancos[0],c1);
            insertarPieza(alfilesBlancos[1],f1);
            insertarPieza(alfilesNegros[0],c8);
            insertarPieza(alfilesNegros[1],f8);
      
            //reyes y damas
      
            insertarPieza(reyBlanco,e1);
            insertarPieza(reyNegro,e8);
            insertarPieza(damaBlanca,d1);
            insertarPieza(damaNegra,d8);
          
            let peonBlanco0 = document.getElementById("peonBlanco0");
  
  
  
            
  
            verificar=false;
            insertarScript("ajedrez2.js");
            eDrag(a3,peonBlanco0);
          }
    
    
          
        
        
    
        
      
}