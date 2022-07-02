class ComboMenu {
    constructor(
        menu,
        agregado1,
        agregado2,
        aderezo,
        bebida,
        papas,
        precioVenta,
        cantidad
    ) {
        this.menu = menu.toUpperCase();
        this.agregado1 = agregado1;
        this.agregado2 = agregado2;
        this.aderezo = aderezo;
        this.bebida = bebida;
        this.papas = papas;
        this.precioVenta = precioVenta;
        this.cantidad = cantidad;
    }
}
let combo = [];

function agregarProductos() {
    let numeroProductos = parseInt(prompt("Cuantos combos desea registrar"));
    for (let index = 0; index < numeroProductos; index++) {
        let menu = prompt("Elija entre hamburguesa, hamburguesa con queso, hotdog");
        let agregado1 = prompt("Elija entre queso cheddar, queso dambo");
        let agregado2 = prompt("Elija entre tomate, lechuga, pepino");
        let aderezo = prompt("Elija entre mayonesa, ketchup, mostaza, salsa golf");
        let bebida = prompt(
            "Elija entre coca regular, coca-zero, sprite, agua, cerveza"
        );
        let papas = prompt("Elija entre papas grandes, medianas, chicas");
        let precioVenta = prompt("Ingrese el precio del combo seleccionado");
        let cantidad = prompt("Ingrese la cantidad");
        let productoARegistrar = new ComboMenu(
            menu,
            agregado1,
            agregado2,
            aderezo,
            bebida,
            papas,
            precioVenta,
            cantidad
        );
        combo.push(productoARegistrar);
    }
    return combo;
}

function mostrarCombo(combo) {
    for (const producto of combo) {
        console.log(producto);
    }
}
agregarProductos();
mostrarCombo(combo);