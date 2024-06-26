//Prototipos base -------------------------------------
//Constructor persona
function Persona (nombre,email,clave,credentials){
  this.nombre = nombre;
  this.email = email;
  this.clave = clave;
  this.credentials = credentials;
}

//Metodos de persona
Persona.prototype.datosPersona = function(){
  return console.log(`Credenciales de persona:\nSu nombre: ${this.nombre}\nSu Email: ${this.email}\nSu clave: ${this.clave}`);
}

// Crear una instancia de Persona
const personaInfo = new Persona ("pepe", "pepe@gmail.com","1234")
// Llamar a los métodos y atributos
console.log(personaInfo.nombre);  
console.log(personaInfo.email);  
console.log(personaInfo.clave);  
personaInfo.datosPersona();

//Constructor de usuario
function Usuario(nombre, email, puntosAcumulados, clave) {
  //Propiedades
  this.nombre = nombre;
  this.email = email;
  this.puntosAcumulados = puntosAcumulados;
  this.clave = clave;
}

//Metodos de usuario
Usuario.prototype.acumularPuntos = function () {
  return console.log("Has acumulado" + this.puntosAcumulados);
};
Usuario.prototype.canjearPuntos = function () {
  return console.log("Canjea puntos");
};



//Constructor de administrador
function Administrador(nombre, email, clave) {
  //Propiedades
  this.nombre = nombre;
  this.email = email;
  this.clave = clave;
}
//Metodos de administrador
Administrador.prototype.agregarProducto = function () {
  return console.log("Agrega producto");
};
Administrador.prototype.modificarProducto = function () {
  return console.log("Modifica producto");
};
Administrador.prototype.eliminarUsuario = function () {
  return console.log("Elimina usuario");
};

// Constructor de Producto
function Producto(id,nombre,puntosNecesarios,cantidadDisponible,precio,stock) {
  this.id = id;
  this.nombre = nombre;
  this.puntosNecesarios = puntosNecesarios;
  this.cantidadDisponible = cantidadDisponible;
  this.precio = precio;
  this.stock = stock;
}
//Metodos de producto
Producto.prototype.actualizarId = function () {
  return console.log("Se actualiza Id");
};
Producto.prototype.verPrecio = function () {
  return console.log(`El precio es: ${this.precio}`);
};

Producto.prototype.obtenerInfo = function () {
    return console.log("INFORMACIÓN");
}

// Crear una instancia de Producto
const miProducto = new Producto(1, "Producto1", 100, 50, 200, 300);

// Llamar a los métodos y atributos
console.log(miProducto.id);  // Imprime: 1
console.log(miProducto.nombre);  // Imprime: "Producto1"
miProducto.actualizarId();  // Imprime: "Se actualiza Id"
miProducto.verPrecio();  // Imprime: "El precio es: 200"
miProducto.obtenerInfo();  // Imprime: "INFORMACIÓN"


//Prototipos derivados----------------------------------
//Constructor de Producto Fisico
function ProductoFisico(
  nombre,
  puntosNecesarios,
  cantidadDisponible,
  precio,
  stock
) {
  //Propiedades
  this.nombre = nombre;
  this.puntosNecesarios = puntosNecesarios;
  this.cantidadDisponible = cantidadDisponible;
  this.precio = precio;
  this.stock = stock;
}
//Metodos de Productos fisicos
ProductoFisico.prototype.actualizarStock = function () {
  return console.log("Se actualiza stock");
};
ProductoFisico.prototype.obtenerInfo = function () {
  return console.log("Se obtiene info");
};
ProductoFisico.prototype.enviarProducto = function () {
  return console.log("Envia un producto");
};

//Constructor de Producto Digital
function ProductoDigital(
  nombre,
  puntosNecesarios,
  url,
  cantidadDisponible,
  stock
) {
  //Propiedades
  this.nombre = nombre;
  this.puntosNecesarios = puntosNecesarios;
  this.url = url;
  this.cantidadDisponible = cantidadDisponible;
  this.stock = stock;
}
//Metodos de Productos Digitales
ProductoDigital.prototype.obtenerInfo = function () {
  return console.log("Se obtiene info");
};
ProductoDigital.prototype.descargar = function () {
  return console.log("descarga");
};
ProductoDigital.prototype.obtenerProductEmail = function () {
  return console.log("Obtiene email de producto");
};

//Constructor de Actividad
function Actividad(tipo, puntosOtorgados) {
  //Propiedades
  this.tipo = tipo;
  this.puntosOtorgados = puntosOtorgados;
}
//Metodos de Actividad
Actividad.prototype.completarActividad = function () {
  return console.log("Completa actividad");
};

//Constructor de Categoria DelProducto
function CategoriaDelProducto(nombre, descripcion) {
  //Propiedades
  this.nombre = nombre;
  this.descripcion = descripcion;
}
//Metodos de Categoria Del Producto
CategoriaDelProducto.prototype.listaProductos = function () {
  return console.log("Lista productos");
};

//Constructor de Orden De Canje
function OrdenDeCanje(usuario, producto, fecha) {
  //Propiedades
  CategoriaDelProducto.prototype.usuario = usuario;
  this.producto = producto;
  this.fecha = fecha;
}
//Metodos Orden De Canje
OrdenDeCanje.prototype.confirmarOrden = function () {
  return console.log("Confirma orden");
};
OrdenDeCanje.prototype.cancelarOrden = function () {
  return console.log("Cancela orden");
};
