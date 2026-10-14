console.log("app.js cargado");

// Clase propia: Tarea
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

// Evento input: habilita el boton solo con texto
campoTarea.addEventListener("input", function (evento) {
  btnAgregar.disabled = evento.target.value.trim() === "";
  mensajeError.textContent = "";
});

// Evento submit: valida y agrega la tarea
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

  // Evento click: marca/desmarca completada
  btnCompletar.addEventListener("click", function () {
    tarea.alternarEstado();
    li.textContent = tarea.etiqueta();
    li.classList.toggle("completada", tarea.completada);
    li.appendChild(btnCompletar);
    li.appendChild(btnEliminar);
  });

  // Evento click: elimina la tarea
  btnEliminar.addEventListener("click", function () {
    const indice = tareas.indexOf(tarea);
    if (indice !== -1) tareas.splice(indice, 1);
    li.remove();
  });

  li.appendChild(btnCompletar);
  li.appendChild(btnEliminar);
  listaTareas.appendChild(li);
}