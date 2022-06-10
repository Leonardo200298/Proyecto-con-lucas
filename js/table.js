"use strict";
// Botones
let botonAgregar = document.querySelector("#boton-agregar");
botonAgregar.addEventListener('click', agregar);
let botonBorrar = document.querySelector("#boton-borrar");
botonBorrar.addEventListener('click', borrar);
let botonx3 = document.querySelector("#boton-agregar-x3");
botonx3.addEventListener('click', x3);
let vaciarTabla = document.querySelector("#boton-vaciar-tabla");
vaciarTabla.addEventListener('click', vaciar);

// Objeto json

let objTable = [{
    nombre: "Cristian",
    apellido: "Taboada",
    edad: 21,
    equipo: "Boca"
},
{
    nombre: "Rafael",
    apellido: "Cayuela",
    edad: 21,
    equipo: "Villa Dalmine"
},
{
    nombre: "Bryan",
    apellido: "Tolosa",
    edad: 20,
    equipo: "San Lorenzo"
}]

mostrar();
function agregar(e) {
    e.preventDefault();
    let formData = document.querySelector("#form");
    let forms = new FormData(formData);
    let personaNueva = {
        nombre: forms.get("nombre"),
        apellido: forms.get("apellido"),
        edad: forms.get("edad"),
        equipo: forms.get("equipo")
    }
    objTable.push(personaNueva);
    mostrar();
}

function x3(e) {
    e.preventDefault();
    let formData = document.querySelector("#form");
    let forms = new FormData(formData);
    let personaNueva = {
        nombre: forms.get("nombre"),
        apellido: forms.get("apellido"),
        edad: forms.get("edad"),
        equipo: forms.get("equipo")
    }
    for (let index = 0; index <= 2; index++) {
        objTable.push(personaNueva);

    }
    mostrar();
}

function borrar(e) {
    e.preventDefault();
    objTable.pop();
    mostrar();
}

function vaciar(e) {
    e.preventDefault();
    objTable = [];
    mostrar();
}

function mostrar() {
    let htmlTable = document.querySelector("#table");

    htmlTable.innerHTML = "";
    for (const values of objTable) {
        htmlTable.innerHTML += "<tr>" + "<td>" + values.nombre + "</td>"
            + "<td>" + values.apellido + "</td>" +
            "<td>" + values.edad + "</td>" +
            "<td>" + values.equipo + "</td>" + "</tr>";
    }

}


