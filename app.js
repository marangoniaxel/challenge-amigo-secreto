// creando el challenge!

let amigos = [];
//lista para almacenar a los amigos que van a ser sorteados.
const inputNombre = document.getElementById("amigo");
const botonAgregar = document.getElementById("addAmigo");
const listaHTML = document.getElementById("listaAmigos");

const botonSortear = document.getElementById("sorteoAmigo");
const listaSorteo = document.getElementById("resultado");
//conectar las funciones html y js.



function agregarAmigo() {

    let nombre = inputNombre.value.trim();
    
    if (nombre === ""){
        alert("Por favor ingrese un nombre.")
        return;
    }

    if (amigos.includes(nombre)) {
        alert("El nombre ya esta en la lista.")
        return;
    }

    amigos.push(nombre);


    let li = document.createElement("li");
    li.textContent = nombre;
    listaHTML.appendChild(li);

    inputNombre.value = "";
    inputNombre.focus();
    
}

//funcion para agregar nombres a la lista

function sortearAmigo(){

    if (amigos.length === 0){
        return alert("No se puede sortear sin participantes.");
        
    }

    let sorteo = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[sorteo];
    listaSorteo.innerHTML = "";
    let li = document.createElement("li")
    li.textContent = ganador;
    listaSorteo.appendChild(li);
}
//funciona para realizar el sorteo.

botonAgregar.addEventListener("click",agregarAmigo);

inputNombre.addEventListener ("keydown", function(event) {
    if (event.key === "Enter"){
        event.preventDefault();
        agregarAmigo();
    }
});
// da la funcion al boton añadir y tambien lo hace con el enter para hacerlo mas practico.


botonSortear.addEventListener("click", sortearAmigo);

