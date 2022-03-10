
//Buscador de artículos del blog

const articulos = [{ id: 1, articulo: "Curiosidades sobre los gatos", lectura: 10},
                   { id: 2, articulo: "Adoptar un gato: 10 cosas que debes saber", lectura: 7},
                   { id: 3, articulo: "Cinco buenas razones para adoptar un gato", lectura: 5}];
/*
const botonBusca = document.querySelector("#boton-buscador");

const inputBusca = document.querySelector("#input-buscador");

botonBusca.addEventListener("click", () =>{

    const busquedaRealizada = inputBusca;

    let busqueda = articulos.find(articulos => articulos.articulo <= busquedaRealizada);

    const resultadoBusqueda = document.querySelector(".resultadoBusqueda");

    let texto = '';

   if(busqueda.length === 0){

       texto = `No se encontraron articulos`;

   } else{

       texto = `Se han encontrado ${busqueda.length} articulos: \n`

      filtro.forEach(articulo => {

         texto += `${articulo.articulo} \n - `

      });
      
   }
   resultadoBusqueda.textContent = texto;
});
*/


//Filtro según tiempo de lectura

// const ordenLectura = document.querySelector(".lectura");

// ordenLectura.addEventListener("click", () =>{
//    const valorDeFiltro = parseInt(inputFiltra.value)
//    let filtro = articulos.filter(articulos => articulos.lectura <= valorDeFiltro);
//    const resultadoFiltrar = document.querySelector(".resultadoFiltro");
//    let texto = '';
//   if(filtro.length === 0){
//       texto = `No se encontraron articulos`;
//   } else{
//       texto = `Se han encontrado ${filtro.length} articulos: \n`
//      filtro.forEach(articulo => {
//         texto += `${articulo.articulo} \n - `
//      });
     
//   }
//   resultadoFiltrar.textContent = texto;
// });




//Calculadora de costos de los productos

const valoresASumar = []

function agregarValor() {
   var inputSuma = document.getElementById('valorSuma');
  valoresASumar.push(parseInt(inputSuma.value) )
  inputSuma.value = '';
  const subTotal = document.querySelector(".resultadoSubTotal");
  subTotal.textContent = `Valores agregados ${valoresASumar}, `;
}

function myFunction2() {
  var inputSuma = document.getElementById('valorSuma');
  valoresASumar.splice(-1, 1);
  inputSuma.value = '';
  const subTotal = document.querySelector(".resultadoSubTotal");
  subTotal.textContent = `Valores agregados: ${valoresASumar}, `;
}

const botonCalcular = document.querySelector("#sumar");

botonCalcular.addEventListener("click", () =>{
  
  let resultadoSumaArrays = valoresASumar[0] + valoresASumar[1];
  const subTotal = document.querySelector(".resultadoSubTotal");
  subTotal.textContent = `Precio total: ${resultadoSumaArrays}`;
  
  
});

/*/Envío de formulario con AJAX

$(document).ready(function() {

const URLHP = "http://hp-api.herokuapp.com/api/characters"

$("body").prepend('<button id="botonGet">GET</button>');

$("#botonGet").click(() => { 
    $.get(URLHP, function (respuesta, estado) {
          if(estado === "success"){
            let personajes = respuesta;
            for (const personaje of personajes) {
              $("body").prepend(`<div>
                                   <h3>${personaje}</h3>
                                  </div>`);
            }  
          }
    });
});
});
*/
