//Prototipos base -------------------------------------
//Constructor de Persona (cliente y domiciliario)
function Persona(nombre, email, clave, actividad) {
  this.nombre = nombre;
  this.email = email;
  this.clave = clave;
  this.actividad = actividad;
}
//Metodos de Persona
Persona.prototype.seeCredentials = function () {
  return console.log(
    `La informacion de persona es:\nNombre:${this.nombre}\nEmail:${this.email}\nClave: ${this.clave}\nActividad: ${this.actividad}`
  );
};
//Shadowing
Persona.prototype.autenticacion = function () {
  return console.log("***PERSONA AUTENTICADA***");
};
Persona.prototype.actualizarEstado = function () {
  return console.log("***ESTADO ACTUALIZADO***");
};

// Crear una instancia de Persona
const personaInfo = new Persona(
  "ROCKY",
  "ROCKY@gmail.com",
  "12345",
  "HUMANO RESPIRANDO"
);
// Llamar a los atributos y métodos
console.log(personaInfo.nombre);
console.log(personaInfo.email);
console.log(personaInfo.clave);
console.log(personaInfo.actividad);
personaInfo.autenticacion();
personaInfo.actualizarEstado();
personaInfo.seeCredentials();

//Constructor de cliente
function Cliente(nombre, email, clave, direccion, telefono) {
  //Propiedades
  this.nombre = nombre;
  this.email = email;
  this.clave = clave;
  this.direccion = direccion;
  this.telefono = telefono;
}
//Metodos de Cliente
Cliente.prototype.realizarPedido = function () {
  return console.log("Realiza pedido");
};
Cliente.prototype.verHistorialPedidosPuntos = function () {
  return console.log("Ver historial pedidos");
};
Cliente.prototype.autenticacion = function () {
  return console.log("Autentica");
};

//Constructor de Restaurante (Restaurante digital y Restaurante Fisico)
function Restaurante(nombre, menu, entrega) {
  this.nombre = nombre;
  this.menu = menu;
  this.entrega = entrega;
}

//Metodos de restaurante
Restaurante.prototype.verMenu = function () {
  return console.log(`¿Cual menu desea ver?\n${this.menu}`);
};
Restaurante.prototype.tiempoEntrega = function () {
  return console.log(
    `La entrega de su producto tardará ${this.entrega} minutos`
  );
};

//Shadowing
Restaurante.prototype.agregarPlato = function () {
  return console.log("***NOJODA COMELONNN***");
};
Restaurante.prototype.actualizarPlato = function () {
  return console.log("TE HABIAS EQUIVOCADO QUE ?");
};

// Crear una instancia de Restaurante
const restauranteInfo = new Restaurante(
  "LA TORRE DEL PESCAO",
  "1.Fisico\n2.Digital",
  "15"
);
// Llamar a los atributos y métodos
console.log(restauranteInfo.nombre);
console.log(restauranteInfo.menu);
console.log(restauranteInfo.entrega);
restauranteInfo.verMenu();
restauranteInfo.tiempoEntrega();
restauranteInfo.agregarPlato();
restauranteInfo.actualizarPlato();

//Constructor de Restaurante Digital
function RestauranteDigital(nombre, menuQr) {
  //Propiedades
  this.nombre = nombre;
  this.menuQr = menuQr;
}
//Metodos de Restaurante Digital
RestauranteDigital.prototype.agregarPlato = function () {
  return console.log("Agrega plato");
};
RestauranteDigital.prototype.actualizarPlato = function () {
  return console.log("Actualiza plato");
};

// Constructor de Restaurante Fisico
function RestauranteFisico(nombre, direccion, menuFisico) {
  //Propiedades
  this.nombre = nombre;
  this.direccion = direccion;
  this.menuFisico = menuFisico;
}
//Metodos de Restaurante Fisico
RestauranteFisico.prototype.agregarPlato = function () {
  return console.log("Agrega plato");
};
RestauranteFisico.prototype.actualizarPlato = function () {
  return console.log("Actualiza plato");
};
RestauranteFisico.prototype.eliminarPlato = function () {
  return console.log("Elimina plato");
};

//Prototipos derivados----------------------------------

// Constructor de Pedido
function Pedido(cliente, restaurante, detallesPedido, estadoPedido) {
  //Propiedades
  this.cliente = cliente;
  this.restaurante = restaurante;
  this.detallesPedido = detallesPedido;
  this.estadoPedido = estadoPedido;
}
//Metodos de Pedido
Pedido.prototype.actualizarEstado = function () {
  return console.log("Actualiza estado");
};
Pedido.prototype.calcularTotal = function () {
  return console.log("Calcula total");
};

// Constructor de Plato
function Plato(nombre, precio, ingredientes) {
  //Propiedades
  this.nombre = nombre;
  this.precio = precio;
  this.ingredientes = ingredientes;
}
//Metodos de Plato
Plato.prototype.obtenerInfo = function () {
  return console.log("Obtiene informacion");
};

// Constructor de MenuQr
function MenuQr(plato, Url) {
  //Propiedades
  Plato.prototype.plato = plato;
  this.Url = Url;
}
//Metodos de MenuQr
MenuQr.prototype.generarQr = function () {
  return console.log("Genera QR");
};

// Constructor de Menu Fisico
function MenuFisico(plato) {
  //Propiedades
  this.plato = plato;
  this.email = email;
}
//Metodos
MenuFisico.prototype.impresion = function () {
  return console.log("Imprime");
};
MenuFisico.prototype.visualizacion = function () {
  return console.log("Visualiza");
};

// Constructor de Repartidor
function Repartidor(nombre, email, clave, vehículo, disponibilidad) {
  //Propiedades
  this.nombre = nombre;
  this.email = email;
  this.clave = clave;
  this.vehículo = vehículo;
  this.disponibilidad = disponibilidad;
}
//Metodos de Repartidor
Repartidor.prototype.aceptarEnvío = function () {
  return console.log("Acepta envío");
};
Repartidor.prototype.actualizarUbicación = function () {
  return console.log("Actualiza ubicación");
};
Repartidor.prototype.completarEntrega = function () {
  return console.log("Completa entrega");
};
Repartidor.prototype.autenticacion = function () {
  return console.log("Autentica");
};
Repartidor.prototype.actualizarEstado = function () {
  return console.log("Actualiza estado");
};
