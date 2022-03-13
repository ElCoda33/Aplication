const crearSobreMi = () =>{
    let link = document.getElementById("link");
    if (link) head.removeChild(link);
    link = document.getElementById("link");
  if(link)eliminarLink("link");
    main1.innerHTML = "";
    main1.insertAdjacentHTML(
      "afterbegin",
      `
  <div class="main">
      <article class="articulo">
          <h1 class="articulo__titulo">
              Here i talk you about me
          </h1>
          <div class="contenedor__seccion">
              <h3 class="seccion__titulo">
                  It all started with my curiosity
              </h3>
              <p class="secccion__texto">
                  Hello, my name is Lucas Pérez
              </p>
          </div>
      </article>
  <aside class="aparte">
          <b class="aparte__titulo">I work with this technologies</b>
          <img class="aparte__icono" src="media/css3i.png" alt="css">
          <img class="aparte__icono" src="media/html5i.png" alt="html">
  
  </aside>
  <footer class="pie">
  
  </footer>
  </div`
    );
  }