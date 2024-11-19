/*
Problema 1:
  
Un comercio necesita obtener información, relacionada con el importe a pagar por un determinado cliente. Se pide generar la 
siguiente salida impresa: 
• El importe a pagar por el cliente. Si el cliente es categoría “A” y el monto a pagar supera los 500 pesos recibirá un 
descuento del 5 %. Si el cliente es categoría “B” y el importe a pagar oscila entre 80 y 250 pesos recibirá un descuento 
del 2 %. 
Para ello Ud. dispone de la siguientes entradas:
• Categoría (cat): representa la categoría del cliente, que puede asumir los siguientes valores “A” o “B”. 
• Importe (imp): representa el importe a pagar por el cliente. 

*/

function importePorTipoCliente() {
    let categoria = prompt("Dame categoria del cliente").toUpperCase();

    let importe = Number(prompt("Importe a pagar"));

    if (categoria === "A" && importe > 500) {
        let descuento = importe * 0.05;

        let importeTotal = importe - descuento;
        console.log("El cliente es categoria A");
        console.log("El importe total es de: " + importeTotal + " pesos.Con un 5% de descuento aplicado");
    } else if (categoria === "B" && importe >= 80 && importe <= 250) {
        let descuento = importe * 0.02;
        let importeTotal = importe - descuento;
        console.log("El cliente es categoria B");
        console.log("El importe total es de: " + importeTotal + "pesos. Con un 2% de descuento aplicado");
    } else {
        console.log("Entrada invalida.");
    }
}
importePorTipoCliente();