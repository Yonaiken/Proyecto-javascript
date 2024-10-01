// const btnCart = document.querySelector('.container-icon')
// const containerCartProducts = document.querySelector('.container-cart-products')

// btnCart.addEventListener('click', () => {
//     containerCartProducts.classList.toggle('hidden-cart')
// })

//Presentacion de los articulos:
console.log('Multitienda ShopUniverso');
console.log('Productos disponibles :');
console.log("1 GOMAS NIKE. Precio: $80.000");
console.log("2 AUDIFONOS. Precio: $20.000");
console.log("3 RELOJ. Precio: $50.000");
console.log("4 SMARTWACH. Precio: $90.000");
console.log("5 PERFUMES. Precio: $50.000");
console.log("6 GORRA. Precio: $20.000");
console.log("");


// Variables de artículos
let opcion1 = false;
let cantidadArticulo1 = 0;
let valorArticulo1 = 0;
const NOMBRE_ARTICULO1 = "Zapatos Nike";

let opcion2 = false;
let cantidadArticulo2 = 0;
let valorArticulo2 = 0;
const NOMBRE_ARTICULO2 = "Audífonos";

let opcion3 = false;
let cantidadArticulo3 = 0;
let valorArticulo3 = 0;
const NOMBRE_ARTICULO3 = "Reloj";

let opcion4 = false;
let cantidadArticulo4 = 0;
let valorArticulo4 = 0;
const NOMBRE_ARTICULO4 = "Smartwatch";

let opcion5 = false;
let cantidadArticulo5 = 0;
let valorArticulo5 = 0;
const NOMBRE_ARTICULO5 = "Perfumes";

let opcion6 = false;
let cantidadArticulo6 = 0;
let valorArticulo6 = 0;
const NOMBRE_ARTICULO6 = "Gorras";

// Función para seleccionar los productos y cantidades
function seleccionarProductos() {
    if (confirm(`¿Deseas agregar ${NOMBRE_ARTICULO1} al carrito?`)) {
        opcion1 = true;
        cantidadArticulo1 = parseInt(prompt(`¿Cuántos ${NOMBRE_ARTICULO1} deseas?`));
    }

    if (confirm(`¿Deseas agregar ${NOMBRE_ARTICULO2} al carrito?`)) {
        opcion2 = true;
        cantidadArticulo2 = parseInt(prompt(`¿Cuántos ${NOMBRE_ARTICULO2} deseas?`));
    }

    if (confirm(`¿Deseas agregar ${NOMBRE_ARTICULO3} al carrito?`)) {
        opcion3 = true;
        cantidadArticulo3 = parseInt(prompt(`¿Cuántos ${NOMBRE_ARTICULO3} deseas?`));
    }

    if (confirm(`¿Deseas agregar ${NOMBRE_ARTICULO4} al carrito?`)) {
        opcion4 = true;
        cantidadArticulo4 = parseInt(prompt(`¿Cuántos ${NOMBRE_ARTICULO4} deseas?`));
    }

    if (confirm(`¿Deseas agregar ${NOMBRE_ARTICULO5} al carrito?`)) {
        opcion5 = true;
        cantidadArticulo5 = parseInt(prompt(`¿Cuántos ${NOMBRE_ARTICULO5} deseas?`));
    }

    if (confirm(`¿Deseas agregar ${NOMBRE_ARTICULO6} al carrito?`)) {
        opcion6 = true;
        cantidadArticulo6 = parseInt(prompt(`¿Cuántos ${NOMBRE_ARTICULO6} deseas?`));
    } 
}

// Función para mostrar los productos seleccionados en el carrito
function articulosSeleccionados() {
    let total = 0;
    console.log("Productos en el carrito:");

    if (opcion1) {
        valorArticulo1 = cantidadArticulo1 * 80000;
        console.log(`${NOMBRE_ARTICULO1}: ${cantidadArticulo1} unidades - Subtotal: $${valorArticulo1}`);
        total += valorArticulo1;
    }
    if (opcion2) {
        valorArticulo2 = cantidadArticulo2 * 20000;
        console.log(`${NOMBRE_ARTICULO2}: ${cantidadArticulo2} unidades - Subtotal: $${valorArticulo2}`);
        total += valorArticulo2;
    }
    if (opcion3) {
        valorArticulo3 = cantidadArticulo3 * 50000;
        console.log(`${NOMBRE_ARTICULO3}: ${cantidadArticulo3} unidades - Subtotal: $${valorArticulo3}`);
        total += valorArticulo3;
    }
    if (opcion4) {
        valorArticulo4 = cantidadArticulo4 * 90000;
        console.log(`${NOMBRE_ARTICULO4}: ${cantidadArticulo4} unidades - Subtotal: $${valorArticulo4}`);
        total += valorArticulo4;
    }
    if (opcion5) {
        valorArticulo5 = cantidadArticulo5 * 50000;
        console.log(`${NOMBRE_ARTICULO5}: ${cantidadArticulo5} unidades - Subtotal: $${valorArticulo5}`);
        
        total += valorArticulo5;
    }
    if (opcion6) {
        valorArticulo6 = cantidadArticulo6 * 20000;
        console.log(`${NOMBRE_ARTICULO6}: ${cantidadArticulo6} unidades - Subtotal: $${valorArticulo5}`);
        
        total += valorArticulo6;
    }

    // Mostrar el total
    console.log("Total a pagar : " + "$"+ total);
    console.log("Gracias por su compra. ¡FELIZ DIA!");
    
    
}

// Ejecutar la selección de productos y mostrar el carrito
seleccionarProductos();
articulosSeleccionados();






// let  input;
// let total = 0;

// while(true) {
    
//     input = prompt("igresa una opcion del (1 al 4) para agregar un articulo  o escribe 'terminar' para finlizar:");

//     if(input.toLowerCase() === 'terminar') {
//         break;
//     }
//     let valorArticulo = parseFloat(input);

//     if(!isNaN(valorArticulo) && valorArticulo > 0) {
//         total += valorArticulo;
//         console.log(total);
//     }else {
//         alert("Por favor ingrese un numero valido")
//     }
// }
// console.log("El total de los articulos ingresados es "+ total.toFixed(2))