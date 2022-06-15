//const valorTotal = [];
let carritoDatos = [];
let precioTotal = [];

// funcion que me permitira el ingreso de los datos

function carritoTotal(){
    function Carrito(producto, precio){
        this.producto = producto;
        this.precio = precio;
    }

    let productoNuevo = prompt('producto');
    let precioNuevo = parseFloat(prompt('precio'));

    total = new Carrito (productoNuevo, precioNuevo)

    pushearInformacion(); //llama a la funcion de pusheo
}


//funcion que pushea los datos al carrito y tambien juntara solo el valor de precio para mas abajo sumarlos

function pushearInformacion() {
    precioTotal.push(total.precio);    
    carritoDatos.push(total);
    console.log(total);
}

//console.log(carritoDatos);


//Ciclo, arranca con la pregunta en si

let cantidad = parseFloat(prompt('cantidad'))

for (let i = 0 ; i < cantidad ; i++){ 
   
    carritoTotal()
    
    
}

//declaracion y ciclo para la SUMA

let suma = 0;
for (let i = 0; i < precioTotal.length; i++) {
    suma += precioTotal[i]
}


    // console.log(precioTotal); //Esto me muestra los valores por separado
    console.log ('El total de productos es: ' + cantidad)
    console.log( 'El valor total de los productos es: $' +suma); // mostrara la suma de la propiedad precio 
