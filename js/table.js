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

// inputs 
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let edad = document.querySelector("#edad");
let equipo = document.querySelector("#equipo");


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
function agregar() {
    let personaNueva = {
        nombre: nombre.value,
        apellido: apellido.value,
        edad: Number(edad.value),
        equipo: equipo.value
    }
    objTable.push(personaNueva);
    mostrar();
}

function x3() {
    objTable.forEach(element => {
        console.log(element)
        objTable.push(element);

    });     
    mostrar();
}

function borrar() {
    objTable.pop();
    mostrar();
}

function vaciar() {
    objTable = [];
    mostrar();
}

function mostrar() {
    let htmlTable = document.querySelector("#table");   
    if (htmlTable) {
        htmlTable.innerHTML = "";
        for (const values of objTable) {
            htmlTable.innerHTML += "<tr>"+"<td>"+values.nombre +"</td>"
             +"<td>"+values.apellido+"</td>" +
             "<td>"+values.edad +"</td>"+
             "<td>"+values.equipo+"</td>"+"</tr>";
        }
    }
}
console.log(objTable)

