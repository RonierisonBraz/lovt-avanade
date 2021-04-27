// console.log('JS externo funcionou!');
// console.log(document);

// alert('seja bem vindo');

let nomeUsuario = prompt('Qual seu nome?'); 

console.log(nomeUsuario);

let elementHeader = document.querySelector('header .olaUsuario');
console.log(elementHeader);

elementHeader.innerText = `olá, ${nomeUsuario}`;

let logo = document.getElementById('logo');
console.log(logo);

logo.style.color = "orange";

const toggleMode = () => {
    document.body.classList.toggle("dark-mode");
}