# Tarea: Mi componente interactivo

## Componente elegido

**Lista de tareas (To-Do List).**

Este componente permite agregar tareas, marcarlas como completadas y eliminarlas. Se desarrolló con HTML, CSS y JavaScript, aplicando DOM, eventos, clases y objetos.

## Versión 1: solo DOM

### ¿Qué agregué?

Creé dos tareas iniciales con JavaScript utilizando `querySelector()`, `createElement()`, `textContent` y `appendChild()`.

### ¿Por qué?

Para aprender cómo JavaScript puede crear elementos HTML y agregarlos a la página sin escribir cada tarea directamente en el HTML.

### Código principal

```js
// Version 1: solo DOM
const listaTareas = document.querySelector("#listaTareas");

const tareasIniciales = [
  "Estudiar JavaScript",
  "Completar el laboratorio"
];

tareasIniciales.forEach((texto) => {
  const li = document.createElement("li");
  li.textContent = texto;
  listaTareas.appendChild(li);
});
```

### ¿Qué cambió en la página?

Se mostraron dos tareas creadas dinámicamente. En esta primera versión todavía no había botones para agregar, completar ni borrar tareas.

## Versión 2: con eventos

### ¿Qué agregué?

Agregué un formulario para añadir tareas, además de botones para completarlas y eliminarlas. Utilicé los eventos `input`, `submit` y `click`. En esta versión cada tarea se maneja como texto, sin usar todavía la clase `Tarea`.

### ¿Por qué?

Para hacer que la página respondiera a las acciones del usuario sin recargarse.

### Código principal

```js
// Version 2: DOM y eventos, sin clases
const formTarea = document.querySelector("#formTarea");
const campoTarea = document.querySelector("#campoTarea");
const btnAgregar = document.querySelector("#btnAgregar");
const listaTareas = document.querySelector("#listaTareas");
const mensajeError = document.querySelector("#mensajeError");

campoTarea.addEventListener("input", () => {
  btnAgregar.disabled = campoTarea.value.trim() === "";
  mensajeError.textContent = "";
});

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const texto = campoTarea.value.trim();

  if (texto === "") {
    mensajeError.textContent = "Escribe una tarea antes de agregarla.";
    return;
  }

  const li = document.createElement("li");
  const textoTarea = document.createElement("span");
  textoTarea.textContent = texto;

  const btnCompletar = document.createElement("button");
  btnCompletar.textContent = "Completar";

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Borrar";

  btnCompletar.addEventListener("click", () => {
    textoTarea.classList.toggle("completada");
  });

  btnEliminar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(textoTarea);
  li.appendChild(btnCompletar);
  li.appendChild(btnEliminar);
  listaTareas.appendChild(li);

  formTarea.reset();
  btnAgregar.disabled = true;
});
```

### ¿Qué cambió en la página?

Ahora el usuario pudo agregar tareas, marcarlas como completadas y eliminarlas. También se evitó el envío del formulario con recarga mediante `preventDefault()`.

## Versión 3: con clases y objetos

### ¿Qué agregué?

Creé la clase `Tarea`, que tiene los atributos `texto` y `completada`, y los métodos `alternarEstado()` y `etiqueta()`. Cada tarea agregada se representa con un objeto de esa clase. También se mantiene la validación del texto y se actualiza el DOM con los botones.

### ¿Por qué?

Para organizar los datos y el comportamiento de cada tarea en un solo lugar, facilitando el mantenimiento y la ampliación del programa.

### Código principal

```js
// Version 3: DOM, eventos, clases y objetos
class Tarea {
  constructor(texto) {
    this.texto = texto;
    this.completada = false;
  }

  alternarEstado() {
    this.completada = !this.completada;
  }

  etiqueta() {
    return this.completada ? `✔ ${this.texto}` : this.texto;
  }
}

const tareas = [];
const formTarea = document.querySelector("#formTarea");
const campoTarea = document.querySelector("#campoTarea");
const btnAgregar = document.querySelector("#btnAgregar");
const listaTareas = document.querySelector("#listaTareas");
const mensajeError = document.querySelector("#mensajeError");

campoTarea.addEventListener("input", function (evento) {
  btnAgregar.disabled = evento.target.value.trim() === "";
  mensajeError.textContent = "";
});

formTarea.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const texto = campoTarea.value.trim();

  if (texto === "") {
    mensajeError.textContent = "Escribe una tarea antes de agregarla.";
    return;
  }

  const tarea = new Tarea(texto);
  tareas.push(tarea);
  renderizarTarea(tarea);

  formTarea.reset();
  btnAgregar.disabled = true;
});

function renderizarTarea(tarea) {
  const li = document.createElement("li");
  li.textContent = tarea.etiqueta();

  const btnCompletar = document.createElement("button");
  btnCompletar.textContent = "Completar";

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Borrar";

  btnCompletar.addEventListener("click", function () {
    tarea.alternarEstado();
    li.textContent = tarea.etiqueta();
    li.classList.toggle("completada", tarea.completada);
    li.appendChild(btnCompletar);
    li.appendChild(btnEliminar);
  });

  btnEliminar.addEventListener("click", function () {
    const indice = tareas.indexOf(tarea);
    if (indice !== -1) tareas.splice(indice, 1);
    li.remove();
  });

  li.appendChild(btnCompletar);
  li.appendChild(btnEliminar);
  listaTareas.appendChild(li);
}
```

### ¿Qué cambió en la página?

Cada tarea ahora tiene sus propios datos y métodos. Al presionar Completar, cambia el estado del objeto y su presentación; al presionar Borrar, la tarea se elimina de la lista de objetos y del DOM. Esta versión integra DOM, eventos y objetos.

## Dónde uso DOM, eventos y objetos

| Parte | Línea o elemento del código | ¿Para qué sirve? |
|---|---|---|
| DOM | `document.querySelector()` | Selecciona los elementos HTML. |
| DOM | `document.createElement("li")` | Crea un elemento para mostrar una tarea. |
| DOM | `appendChild()` | Agrega elementos a la página. |
| DOM | `li.remove()` | Elimina una tarea de la interfaz. |
| Evento | `addEventListener("input", ...)` | Detecta los cambios en el campo de texto. |
| Evento | `addEventListener("submit", ...)` | Detecta el envío del formulario. |
| Evento | `addEventListener("click", ...)` | Ejecuta acciones al presionar botones. |
| Objeto | `new Tarea(texto)` | Crea una tarea nueva. |
| Objeto | `tarea.alternarEstado()` | Cambia el estado de la tarea. |
| Objeto | `tarea.etiqueta()` | Devuelve el texto que se muestra en la página. |

## Pruebas realizadas

Completa la columna «Resultado obtenido» después de probar la página en el navegador. Marca «Sí» o «No» según el resultado real.

| Acción | Resultado esperado | Resultado obtenido | ¿Cumple? |
|---|---|---|---|
| Agregar una tarea válida | La tarea aparece con los botones Completar y Borrar. | Pendiente de probar. | Pendiente |
| Dejar el campo vacío | No se agrega ninguna tarea y el botón Agregar queda deshabilitado. | Pendiente de probar. | Pendiente |
| Presionar Completar | La tarea muestra ✔ y aparece tachada. | Pendiente de probar. | Pendiente |
| Volver a presionar Completar | La tarea vuelve al estado pendiente. | Pendiente de probar. | Pendiente |
| Presionar Borrar | La tarea desaparece de la lista. | Pendiente de probar. | Pendiente |
| Agregar varias tareas | Cada tarea se muestra de forma independiente y tiene sus botones. | Pendiente de probar. | Pendiente |

## ¿Por qué diseñé mi clase así?

La clase `Tarea` tiene los atributos `texto` y `completada` porque cada tarea necesita guardar su descripción y saber si ya fue completada. El método `alternarEstado()` cambia el estado de verdadero a falso o viceversa. El método `etiqueta()` devuelve el texto que se presenta al usuario. De este modo, cada tarea reúne sus propios datos y comportamientos, lo que permite organizar el código y crear nuevas tareas sin repetir la lógica.

## Observaciones

El desarrollo se dividió en tres versiones. En la primera se practicó la creación de elementos con el DOM; en la segunda se agregaron eventos para responder a las acciones del usuario; y en la tercera se incorporaron clases y objetos. Se usaron `preventDefault()` para evitar la recarga del formulario y `trim()` para comprobar que el texto no estuviera vacío ni tuviera solo espacios.

## Conclusiones

Con esta tarea comprendí que JavaScript puede crear y modificar elementos de una página mediante el DOM. Los eventos permiten responder a acciones como agregar, completar y borrar tareas. También aprendí que las clases y los objetos ayudan a organizar los datos y el comportamiento de cada tarea. Desarrollar el componente en tres versiones permitió integrar progresivamente los conceptos del Laboratorio 08.

## Historial de versiones

- **Versión 1:** estructura de la lista y creación de elementos con el DOM.
- **Versión 2:** eventos para agregar, completar y eliminar tareas.
- **Versión 3:** clase `Tarea`, objetos y validación de datos.
