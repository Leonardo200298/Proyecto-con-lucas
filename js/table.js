//llamados
document.querySelector("#boton-agregar").addEventListener('click', agregarUsuario);

const URL = 'https://62b382f5a36f3a973d234233.mockapi.io/api/usuarios';

async function cargarTabla() {
    try{
        let promise = await fetch(URL);
        let apiInfo = await promise.json();
        document.querySelector("#table").innerHTML = "";
        for (let index = 0; index < apiInfo.length; index++) {
            document.querySelector("#table").innerHTML += `<tr>
            <td>${apiInfo[index].name}</td>
            <td>${apiInfo[index].lastName}</td>
            <td>${apiInfo[index].age}</td>
            <td>${apiInfo[index].team}</td>
            <td><button class="borrar" id="${apiInfo[index].id}">borrar</button></td>
            <td><button class="editar" id="${apiInfo[index].id}">editar</button></td>
    
            </tr>`
        }
        document.querySelectorAll(".borrar").forEach(boton=>{
            boton.addEventListener('click',borrar);
        });
        document.querySelectorAll(".editar").forEach(botonE =>{
            botonE.addEventListener('click', editar);
        });
    }
    catch(error){
        console.log(error);
    }
}
async function agregarUsuario(e) {
    e.preventDefault();
    let formulario = document.querySelector("#form");
    let formData = new FormData(formulario);
    let nombre = formData.get("nombre");
    let apellido = formData.get("apellido");
    let edad = formData.get("edad");
    let equipo = formData.get("equipo");
    let obj = {
        "name": nombre,
        "lastName": apellido,
        "age": edad,
        "team": equipo
    };
    try {
        let res = await fetch(URL, {
            'method': 'POST',
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON.stringify(obj)

        })
        if (res.status == 201) {
            console.log("creado!");
        }
    }
    catch (error) {
        console.log(error);
    }
    cargarTabla();
}
async function borrar(e) {
    e.preventDefault();  
    try {

        let res = await fetch(`${URL}/${this.id}/`, {
            'method': 'DELETE',    
        })
        if (res.status === 200) {
            console.log("Borrado");
        }
        else {
            console.log("Fila no encontrada");
        }
    }
    catch (error) {
        console.log(error);
    }
    cargarTabla();
}
async function editar(e){
    e.preventDefault();
    let formulario = document.querySelector("#form");
    let formData = new FormData(formulario);
    let nombre = formData.get("nombre");
    let apellido = formData.get("apellido");
    let edad = formData.get("edad");
    let equipo = formData.get("equipo");
    let obj = {
        "name": nombre,
        "lastName": apellido,
        "age": edad,
        "team": equipo
    };
    try {

        let res = await fetch(`${URL}/${this.id}/`, {
            'method': 'PUT',
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON.stringify(obj)
        });
        if (res.status === 200) {
            console.log("Borrado");
        }
        else {
            console.log("Fila no encontrada");
        }
    }
    catch (error) {
        console.log(error);
    }
    cargarTabla();
}
cargarTabla();

