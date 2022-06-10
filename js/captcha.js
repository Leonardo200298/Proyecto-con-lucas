"use strict";
let idH1 = document.querySelector("#numberGenerate");
let randomNumber;
for (let index = 10000; index < 50000; index++) {
    randomNumber = Math.ceil(Math.random() * index);
    idH1.innerHTML = randomNumber;
}
function captcha() {
    let button = document.querySelector("#button");
    button.addEventListener('click', Verify);
}
function Verify(e) {
    e.preventDefault();
    let formulario = document.querySelector("#form");
    let formData = new FormData(formulario);
    let inputValue = Number(formData.get("inputValue"));
    let verify = document.querySelector("#verificated");
    if (inputValue === randomNumber) {
        verify.classList.add('passed');
        verify.innerHTML = "Enviado!!";
        //resetea formulario
        formulario.reset();
    }else {
        verify.innerHTML = "Captcha incorrecto";
    }

}

captcha();