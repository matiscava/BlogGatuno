const articulosArray = [
  {
    titulo: "Curiosidades sobre los gatos",
    publicado: 2020,
    tiempo: 7,
    img: "./imagenes/articulo_4_inicio.webp",
    link: "#",
    parrafo: "No cabe duda que los gatos son una excelente compañía. Son perfectos cómplices para las personas que buscan un compañero con quien descansar, que le guste pasar momentos tranquilos y sobretodo aquel que busca un amigo fiel."
  },
  {
    titulo: "Adoptar un gato: 10 cosas que debes saber" ,
    publicado: 2015,
    tiempo: 10 ,
    img: "./imagenes/articulo_1_inicio.webp",
    link: "#",
    parrafo: "No cabe duda que los gatos son una excelente compañía. Son perfectos cómplices para las personas que buscan un compañero con quien descansar, que le guste pasar momentos tranquilos y sobretodo aquel que busca un amigo fiel."
  },
  {
    titulo: "Cinco buenas razones para adoptar un gato" ,
    publicado: 1980,
    tiempo: 5 ,
    img: "./imagenes/articulo_2_inicio.webp",
    link: "#",
    parrafo: "No cabe duda que los gatos son una excelente compañía. Son perfectos cómplices para las personas que buscan un compañero con quien descansar, que le guste pasar momentos tranquilos y sobretodo aquel que busca un amigo fiel."
  }
];

const contenedorArticulos = document.querySelector('#contenedorArticulos');


const generarHTMLArticulo = (array) => {
  let htmlArticulos = '';

  array.map( (articulo) => {
    htmlArticulos += `<div class="item artBlog artBlogUno animate__animated  animate__slideInUp">
      <div class="texto"> 
        <img src=${articulo.img} alt="gato curioso" id="gatoArt" class="gatoArt">
        <h3><label class="titulosArt titulosBlog">${articulo.titulo}</label></h3>
        <p class="metadatos">${articulo.tiempo} min de lectura</p>
        <p class="parrafoArt" style="color: #00011f98 ">Publicado en ${articulo.publicado}</p>
        <p class="parrafoArt">${articulo.parrafo}</p>
        <a href=${articulo.link} class="botonArtBlog">Leer más...</a>
      </div>
    </div>
    `
  });

  return htmlArticulos;
}

let htmlArticulos = generarHTMLArticulo(articulosArray);

contenedorArticulos.innerHTML = htmlArticulos;

const ordenarAlfabeticamente = ( array ) => {
  contenedorArticulos.innerHTML = "";
  let arrayOrdenado = array.sort( ( a , b) => {
    if (a.titulo > b.titulo) {
      return 1;
    }
    if (a.titulo < b.titulo) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })
  let html = generarHTMLArticulo(arrayOrdenado);

  contenedorArticulos.innerHTML = html;
}


const ordenarPorTiempo = ( array ) => {
  contenedorArticulos.innerHTML = "";

  let arrayOrdenado = array.sort( ( a , b) => {
    if (a.tiempo > b.tiempo) {
      return 1;
    }
    if (a.tiempo < b.tiempo) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })
  let html = generarHTMLArticulo(arrayOrdenado);
  contenedorArticulos.innerHTML = html;
}

const ordenarPorFecha = ( array ) => {
  contenedorArticulos.innerHTML = "";

  let arrayOrdenado = array.sort( ( a , b) => {
    if (a.publicado > b.publicado) {
      return 1;
    }
    if (a.publicado < b.publicado) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })
  let html = generarHTMLArticulo(arrayOrdenado);

  contenedorArticulos.innerHTML = html;
}