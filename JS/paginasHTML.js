const ajedrezHTML = `
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
    `;

const contactoHTML = `
<div class="articulo">
      <form action="" class="formulario-contacto">
        <input
          type="text"
          class="formulario__input"
          placeholder="Enter name"
          id="nombre"
          required
        />
        <input
          type="email"
          class="formulario__input"
          placeholder="Enter email"
          id="email"
          required
        />
        <input
          type="text"
          class="formulario__input"
          placeholder="Reason"
          id="razon"
          required
        />
        <textarea
          name=""
          id="mensaje"
          cols="30"
          rows="10"
          class="formulario__input --text-area"
          placeholder="Enter message"
          required
        ></textarea>
        <input
          type="submit"
          value="Send"
          class="formulario__boton"
          name=""
          id="boton-form"
          required
        />
      </form>
    </div>

    <aside class="aparte">
      <b class="aparte__titulo">I work with this technologies</b>
      <img class="aparte__icono" src="media/css3i.png" alt="css" />
      <img class="aparte__icono" src="media/html5i.png" alt="html" />
      <img class="aparte__icono" src="media/js.png" alt="js" />
    </aside>
    <footer class="pie"></footer>

`;

const proyectosHTML = `
<div class="articulo">
  <h1 class="articulo__titulo">My proyects</h1>
  <div class="contenedor__articulo">
    <h3>I have created a chess</h3>
    <p class="articulo__seccion">
      <a id="botonA" class="seccion__link-ajedrez">Enter here to see chess</a>
    </p>
    <h3>Here you can create your HTML elements and add some style to them:</h3>
    <p class="articulo__seccion">
      <a
        class="seccion__link-ajedrez"
        target="blank"
        href="Crear Elementos/crearElementos.html"
        >Enter to program</a
      >
    </p>
  </div>
</div>
<aside class="aparte">
  <b class="aparte__titulo">I work with this technologies</b>
  <img class="aparte__icono" src="media/css3i.png" alt="css" />
  <img class="aparte__icono" src="media/html5i.png" alt="html" />
  <img class="aparte__icono" src="media/js.png" alt="js" />
</aside>
<footer class="pie"></footer>


`;

const sobreMiHTML = `      
<div class="articulo">
  <h1 class="articulo__titulo">Here i talk you about me</h1>
  <div class="contenedor__seccion">
    <h3 class="seccion__titulo">It all started with my curiosity</h3>
    <p class="secccion__texto">Hello, my name is Lucas Pérez</p>
  </div>
</div>
<aside class="aparte">
  <b class="aparte__titulo">I work with this technologies</b>
  <img class="aparte__icono" src="media/css3i.png" alt="css" />
  <img class="aparte__icono" src="media/html5i.png" alt="html" />
  <img class="aparte__icono" src="media/js.png" alt="js" />
</aside>
<footer class="pie"></footer>
          `;
