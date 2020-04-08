/*
//DOM
let links = document.querySelectorAll("a");
links.forEach(function(link){
 console.log(link);
});

//querySelectorAll devuelve una lista

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log(this);
    });
});*/
//Obtener los elementos de la clase .close
//Recorrerlos
//Agregar un evento a cada uno de ellos
let elementos = document.querySelectorAll(".close");
    elementos.forEach(function(elemento){
        elemento.addEventListener('click', function(evento){
        evento.preventDefault();
            let content = document.querySelector('.content');
          
// Quitarle las clases de animacion que ya tiene
            content.classList.remove("bounceInLeft");
            content.classList.remove("animated");

//Agregar clases para animar su salida
            content.classList.add("animated");
            content.classList.add("bounceOutLeft");

            setTimeout(function(){
                location.href = "../";
            },600);
            
            

       return false;
    });
});
/*
let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
    icono.classList.remove("fa-pizza-slice");
    icono.classList.add("fa-pizza-slice");

});
*/