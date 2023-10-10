// Función para agregar una nueva tarea

const nuevaTareaInput = document.getElementById("nuevaTarea");
const tareasPendientes = document.getElementById("tareasPendientes");
const tareasCompletadas = document.getElementById("tareasCompletadas");
const tareasPendientesDiv = document.getElementById("tareasPendientesDiv");
const tareasCompletadasDiv = document.getElementById("tareasCompletadasDiv");

function agregarTarea() {

    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        const botonEliminar = document.createElement("button");
        const botonCompletada = document.createElement("button");

        nuevaTarea.textContent = nuevaTareaTexto;
        botonEliminar.textContent = "Eliminar";
        botonCompletada.textContent = "Completar";

        botonCompletada.addEventListener("click", () => {
            moveTask(nuevaTarea, tareasPendientes, tareasCompletadas );
        });
        
        botonEliminar.addEventListener("click", () => {
            nuevaTarea.remove();
        });

        nuevaTarea.appendChild(botonCompletada);
        nuevaTarea.appendChild(botonEliminar);

        tareasPendientes.appendChild(nuevaTarea);
        
        nuevaTareaInput.value = "";
    }
}

function moveTask(nuevaTarea, fromList, toList) {
    fromList.removeChild(nuevaTarea);
    toList.appendChild(nuevaTarea);
}

// Función para mostrar tareas completadas
function listaCompletadas() {
    tareasPendientesDiv.style.display = "none";
    tareasCompletadasDiv.style.display = "block";
}

// Función para mostrar tareas pendientes
function listaPendientes() {
    tareasPendientesDiv.style.display = "block";
    tareasCompletadasDiv.style.display = "none";
}

// Mostrar las tareas pendientes por defecto
listaPendientes();
    
    