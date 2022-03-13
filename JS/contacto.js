const crearContacto = () => {
  let link = document.getElementById("link");
  if (link) head.removeChild(link);
  link = document.getElementById("link");
  if (!link) insertarLink("CSS/estilosContacto.css", "link");
  main1.innerHTML = "";
  main1.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="main">
            <article class="articulo">
                <form action="" class="formulario-contacto">
                    <input type="text" class="formulario__input" placeholder="Enter name" required>
                    <input type="email" class="formulario__input" placeholder="Enter email"required>
                    <input type="text" class="formulario__input" placeholder="Reason"required>
                    <textarea name="" id="" cols="30" rows="10" class="formulario__input --text-area" placeholder="Enter message"required></textarea>
                    <input type="submit" value="Send" class="formulario__boton" name="" id="boton-form"required>
                </form>
            </article>
        <aside class="aparte">
                <b class="aparte__titulo">I work with this technologies</b>
                <img class="aparte__icono" src="media/css3i.png" alt="css">
                <img class="aparte__icono" src="media/html5i.png" alt="html">
    
        </aside>
        </div>
        <footer class="pie">
    
        </footer>
    
        `
  );
};
