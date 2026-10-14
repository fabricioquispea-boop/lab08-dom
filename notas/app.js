// Laboratorio 08: DOM, eventos y objetos 
console.log("app.js cargado");

// Ejercicio 2: seleccionar y modificar el DOM 
const titulo = document.querySelector("#titulo"); 
titulo.textContent = "Hola TECSUP"; 
titulo.style.color = "blue";

const mensaje = document.querySelector(".mensaje"); 
mensaje.classList.add("destacado");

const lista = document.querySelector("#lista"); 
const nuevo = document.createElement("li"); 
nuevo.textContent = "JavaScript"; 
lista.appendChild(nuevo);

// Ejercicio 3: evento click
const btnSumar = document.querySelector("#btnSumar");
const btnReiniciar = document.querySelector("#btnReiniciar"); 
const contador = document.querySelector("#contador");
let clics = 0;

btnSumar.addEventListener("click", (evento) => {
    clics = clics + 1;
    contador.textContent = clics;
    console.log(evento.type, evento.target);
});

btnReiniciar.addEventListener("click", () => { 
    clics = 0;
    contador.textContent = clics;
});

// Ejercicio 4: eventos input y submit
const nombre = document.querySelector("#nombre"); 
const saludo = document.querySelector("#saludo");

nombre.addEventListener("input", () => { 
    saludo.textContent = "Hola, " + nombre.value;
});

const formulario = document.querySelector("#formulario"); 
const correo = document.querySelector("#correo");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", (evento) => { 
    evento.preventDefault();

if (!correo.value.includes("@")) { 
    resultado.textContent = "Correo no valido: falta @"; 
    resultado.classList.add("error");
} else {
        resultado.textContent = "Enviado: " + correo.value; 
        resultado.classList.remove("error");
}
});

// ---------- Ejercicio 5: Clases y objetos ----------
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  descripcion() {
    return `${this.nombre} - S/ ${this.precio.toFixed(2)}`;
  }
  conDescuento(porcentaje) {
    return this.precio * (1 - porcentaje);
  }
}

const laptop = new Producto("Laptop", 2500);
const mouse = new Producto("Mouse", 45);
const teclado = new Producto("Teclado", 120);
const monitor = new Producto("Monitor", 680);

const productos = [laptop, mouse, teclado, monitor];
const listaProductos = document.querySelector("#listaproductos");

productos.forEach((producto) => {
  const li = document.createElement("li");
  li.textContent = producto.descripcion();
  listaProductos.appendChild(li);
});

// ---------- Ejercicio 6: DOM, eventos y objetos juntos (mini carrito) ----------
class Carrito {
  constructor() {
    this.items = [];
  }
  agregar(producto) {
    this.items.push(producto);
  }
  total() {
    return this.items.reduce((suma, producto) => suma + producto.precio, 0);
  }
}

const carrito = new Carrito();
const formCarrito = document.querySelector("#formCarrito");
const prodNombre = document.querySelector("#prodNombre");
const prodPrecio = document.querySelector("#prodPrecio");
const listaCarrito = document.querySelector("#listaCarrito");
const totalCarrito = document.querySelector("#totalCarrito");

formCarrito.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nuevoProducto = new Producto(prodNombre.value, Number(prodPrecio.value));
  carrito.agregar(nuevoProducto);

  const li = document.createElement("li");
  li.textContent = nuevoProducto.descripcion();
  listaCarrito.appendChild(li);

  totalCarrito.textContent = "Total: S/ " + carrito.total().toFixed(2);
  formCarrito.reset();
});