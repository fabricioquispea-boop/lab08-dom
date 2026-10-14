# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos. Navegador usado: (escribe aqui cual usaste)
##	Ejercicio	2:	Seleccionar y modificar el DOM
| Instruccion                | Que cambio en la pantalla                                       | Se mantiene al recargar (Si/No) |
|-----------------------------|------------------------------------------------------------------|----------------------------------|
| textContent desde la consola | El título cambió momentáneamente                                 | No                               |
| textContent desde app.js     | El título pasó a decir "Hola TECSUP"                              | Sí                                |
| style.color                  | El título quedó en color azul                                    | Sí                                |
| classList.add                 | El párrafo quedó con fondo amarillo                               | Sí                                |
| createElement + appendChild   | Se agregaron tres elementos a la lista: HTML, CSS, JavaScript    | Sí                                |
##	Ejercicio	3:	Evento click
| Tipo de evento | Que accion lo dispara               | Cuanto suma por accion |
|------------------|-----------------------------------------|---------------------------|
| click            | Un clic en el boton Sumar 1              | +1                        |
| dblclick         | Un doble clic rapido en el boton         | +1 (un clic simple no hace nada) |
| mouseover        | Pasar el mouse por encima, sin hacer clic | +1                       |
##	Ejercicio	4:	Eventos input y submit
| Prueba                                   | Resultado                                              |
|--------------------------------------------|----------------------------------------------------------|
| Sin preventDefault()                      | El formulario recargaba la pagina y el mensaje desaparecia |
| Con preventDefault() y correo sin @        | Aparecio "Correo no valido: falta @" en rojo              |
| Con preventDefault() y correo con @        | Aparecio "Enviado: correo@ejemplo.com"                     |
##	Ejercicio	5:	Clases y objetos
| Objeto  | nombre   | precio | descripcion()           | conDescuento(0.25) |
|-----------|------------|----------|----------------------------|------------------------|
| laptop  | "Laptop" | 2500   | Laptop - S/ 2500.00      | 1875                   |
| mouse   | "Mouse"  | 45     | Mouse - S/ 45.00          | 33.75                  |
| teclado | "Teclado"| 120    | Teclado - S/ 120.00       | 90                     |
| monitor | "Monitor"| 680    | Monitor - S/ 680.00       | 510                    |
##	Ejercicio	6:	DOM, eventos y objetos juntos
| Prueba                | Total que muestra la pagina | Correcto (Si/No) |
|--------------------------|----------------------------------|------------------------|
| Cuaderno 12.50          | Total: S/ 12.50                  | Si                      |
| + Lapicero 3.20         | Total: S/ 15.70                  | Si                      |
| + Mochila 89.90         | Total: S/ 105.60                 | Si                      |
| Sin Number()            | El producto no aparece; consola muestra this.precio.toFixed is not a function | Si |
| Pieza  | Linea de tu codigo donde aparece                          | Para que sirve |
|----------|---------------------------------------------------------------|----------------------|
| DOM    | document.querySelector, createElement, appendChild              | Leer y mostrar elementos en la pagina |
| Evento | formCarrito.addEventListener("submit", ...)                     | Reaccionar cuando el usuario envia el formulario |
| Objeto | new Producto(...), carrito.agregar(...), carrito.total()        | Modelar y calcular los datos del carrito |