/**  sin funcion

let continuar = true;

while (continuar) {
    let seleccion = prompt("Selecciona un producto: 1: Remera $15000\ 2: Pantalon $10000\ 3: Buzo $30000\ 4: Zapatillas $50000");

    if (seleccion === "1") {
        alert("Has seleccionado: Remera. Precio: $15000");
    } 
    
    else if (seleccion === "2") {
        alert("Has seleccionado: Pantalon. Precio: $10000");
    } 
    
    else if (seleccion === "3") {
        alert("Has seleccionado: Buzo. Precio: $30000");
    } 
    
    else if (seleccion === "4") {
        alert("Has seleccionado: Zapatillas. Precio: $50000");
    }
    else{
        alert("Selección inválida. Por favor, ingrese un número válido.");
        continue;}

    continuar = confirm("¿Quieres seleccionar otro producto?");
}

alert("Gracias por tu compra.");

*/

/** pre entrega 1

let continuar = true;

function MensajeProducto(seleccion) {
    switch (seleccion) {
        case "1":
            return "Has seleccionado: Remera. Precio: $15000";
        case "2":
            return "Has seleccionado: Pantalon. Precio: $10000";
        case "3":
            return "Has seleccionado: Buzo. Precio: $30000";
        case "4":
            return "Has seleccionado: Zapatillas. Precio: $50000";
        default:
            return "Selección inválida. Por favor, ingrese un número válido.";
    }
}

while (continuar) {
    let seleccion = prompt("Selecciona un producto: 1: Remera $15000\ 2: Pantalon $10000\ 3: Buzo $30000\ 4: Zapatillas $50000");
    let mensaje = MensajeProducto(seleccion);

    alert(mensaje);
    
    if (mensaje === "Selección inválida. Por favor, ingrese un número válido.") {
        continue;
    }

    continuar = confirm("¿Quieres seleccionar otro producto?");
}

alert("Gracias por tu compra.");

*/


const productos = [
    { id: 1, nombre: "Remera", precio: 15000 },
    { id: 2, nombre: "Pantalon", precio: 10000 },
    { id: 3, nombre: "Buzo", precio: 30000 },
    { id: 4, nombre: "Zapatillas", precio: 50000 }
];


const nombresRegistrados = ["Maite", "Laura", "Thiago", "Isabella", "Nicolas"];

let continuar = true;


function MensajeProducto(seleccion) {
    
    const producto = productos.find(p => p.id === parseInt(seleccion));
    
    
    if (producto) {
        return `Has seleccionado: ${producto.nombre}. Precio: $${producto.precio}`;
    } else {
        return "Selección inválida. Por favor, ingrese un número válido.";
    }
}


function VerificarNombre(nombre) {
    return nombresRegistrados.includes(nombre);
}


function solicitarNombre() {
    let nombre = prompt("Por favor, ingrese su nombre:");
    while (!VerificarNombre(nombre)) {
        alert("Nombre no registrado. Por favor, ingrese un nombre registrado, respetando mayusculas.");
        nombre = prompt("Por favor, ingrese su nombre:");
    }
    return nombre;
}


let nombreUsuario = solicitarNombre();
alert(`Bienvenido, ${nombreUsuario}.`);

while (continuar) {
    let seleccion = prompt("Selecciona un producto: \n1: Remera $15000\n2: Pantalon $10000\n3: Buzo $30000\n4: Zapatillas $50000");
    let mensaje = MensajeProducto(seleccion);

    alert(mensaje);
    
    if (mensaje === "Selección inválida. Por favor, ingrese un número válido.") {
        continue;
    }

    continuar = confirm("¿Quieres seleccionar otro producto?");
}

alert("Gracias por tu compra.");

