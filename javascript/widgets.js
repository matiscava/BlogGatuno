
//Buscador de articulos
$(document).ready(function(){
    $('#buscador').keyup(function(){
       var nombres = $('.titulosArt');
       var buscando = $(this).val();
       var item='';
       for( var i = 0; i < nombres.length; i++ ){
           item = $(nombres[i]).html().toLowerCase();
            for(var x = 0; x < item.length; x++ ){
                if( buscando.length == 0 || item.indexOf( buscando ) > -1 ){
                    $(nombres[i]).parents('.item').show(); 
                }else{
                     $(nombres[i]).parents('.item').hide();
                }
            }
       }
    });
  });

  //Desplegable


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//Artículos por orden alfabético

let titulos = document.getElementsByClassName("titulosBlog");

let articulosBlog = Object.values(titulos);

function ordenArticulos(a, b){
    if (a.articulosBlog < b.articulosBlog) {return -1;}
    if (a.articulosBlog > b.articulosBlog) {return 1;}
    return 0;
 }
 var articulosOrdenados = articulosBlog.sort(ordenArticulos);

 console.log(articulosOrdenados)


//Envío de formulario de contacto

const nombre = document.getElementsByClassName(".nombreAside");

const correo = document.getElementsByClassName (".correoAside");

const URLGET   = "https://jsonplaceholder.typicode.com/posts"
//Declaramos la información a enviar
const infoPost =  { nombre: $(".nombreAside"), correo: $("correoAside") }
//Agregamos un botón con jQuery
$(".botonFormAside").click(() => { 
    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            $("body").prepend(`<div>
Gracias ${respuesta.nombre} ! Tus datos fueron guardados con éxito!
</div>`);
        }  
    });
});

