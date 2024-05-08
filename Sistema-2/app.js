//Prototipos base -------------------------------------
//Constructor de cliente

function Persona (nombre,email,clave,actividad,credentials){
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
    this.actvidad = actividad;
    this.credentials = credentials;
}
//Metodos de Persona


function Cliente (nombre,email,clave,direccion,telefono) {
    //Propiedades
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
    this.direccion = direccion;
    this.telefono = telefono
}
//Metodos de Cliente
Cliente.prototype.realizarPedido = function () {
    return console.log("Realiza pedido");
}
Cliente.prototype.verHistorialPedidosPuntos = function () {
    return console.log("Ver historial pedidos");
}
Cliente.prototype.autenticacion = function () {
    return console.log("Autentica");
}

//Constructor de Restaurante Digital
function RestauranteDigital (nombre,menuQr) {
    //Propiedades
    this.nombre = nombre;
    this.menuQr = menuQr;
}
//Metodos de Restaurante Digital
RestauranteDigital.prototype.agregarPlato = function() {
    return console.log("Agrega plato");
}
RestauranteDigital.prototype.actualizarPlato = function (){
    return console.log("Actualiza plato");
}

// Constructor de Restaurante Fisico
function RestauranteFisico (nombre,direccion,menuFisico) {
    //Propiedades
    this.nombre = nombre;
    this.direccion = direccion;
    this.menuFisico = menuFisico;
}
//Metodos de Restaurante Fisico
RestauranteFisico.prototype.agregarPlato = function() {
    return console.log("Agrega plato");
}
RestauranteFisico.prototype.actualizarPlato = function (){
    return console.log("Actualiza plato");
}
RestauranteFisico.prototype.eliminarPlato = function () {
    return console.log("Elimina plato");
}

//Prototipos derivados----------------------------------

// Constructor de Pedido
function Pedido (cliente, restaurante, detallesPedido, estadoPedido){
    //Propiedades
    this.cliente = cliente;
    this.restaurante = restaurante;
    this.detallesPedido = detallesPedido;
    this.estadoPedido = estadoPedido;
}
//Metodos de Pedido
Pedido.prototype.actualizarEstado = function (){
    return console.log("Actualiza estado");
}
Pedido.prototype.calcularTotal = function (){
    return console.log("Calcula total");
}

// Constructor de Plato
function Plato (nombre,precio,ingredientes){
    //Propiedades
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;
}
//Metodos de Plato
Plato.prototype.obtenerInfo = function(){
    return console.log("Obtiene informacion");
}

// Constructor de MenuQr
function MenuQr (plato, Url){
    //Propiedades
    Plato.prototype.plato = plato;
    this.Url = Url;
}
//Metodos de MenuQr
MenuQr.prototype.generarQr = function (){
    return console.log("Genera QR");
}

// Constructor de Menu Fisico
function MenuFisico (plato){
    //Propiedades
    this.plato = plato;
    this.email = email;
}
//Metodos
MenuFisico.prototype.impresion = function (){
    return console.log("Imprime");
}
MenuFisico.prototype.visualizacion = function (){
    return console.log("Visualiza");
}

// Constructor de Repartidor
function Repartidor (nombre, email, clave, vehículo, disponibilidad){
    //Propiedades
    this.nombre = nombre;
    this.email = email;
    this.clave = clave;
    this.vehículo = vehículo;
    this.disponibilidad = disponibilidad;
}
//Metodos de Repartidor
Repartidor.prototype.aceptarEnvío = function (){
    return console.log("Acepta envío");
}
Repartidor.prototype.actualizarUbicación = function (){
    return console.log("Actualiza ubicación");
}
Repartidor.prototype.completarEntrega = function (){
    return console.log("Completa entrega");
}
Repartidor.prototype.autenticacion = function (){
    return console.log("Autentica");
}
Repartidor.prototype.actualizarEstado = function (){
    return console.log("Actualiza estado");
}