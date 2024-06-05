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

