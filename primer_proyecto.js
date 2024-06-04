let continuar = true;

while (continuar) {
    let seleccion = prompt("Selecciona un producto: 1:Remera\ 2:Pantalon\ 3:Buzo");

    if (seleccion === "1") {
        alert("Has seleccionado: Remera. Precio: $15000");
    } else if (seleccion === "2") {
        alert("Has seleccionado: Pantalon. Precio: $10000");
    } else if (seleccion === "3") {
        alert("Has seleccionado: Buzo. Precio: $30000");
    } else {
        alert("Selección inválida. Por favor, ingrese un número válido.");
        continue;
    }

    continuar = confirm("¿Quieres seleccionar otro producto?");
}

alert("Gracias por tu compra.");

