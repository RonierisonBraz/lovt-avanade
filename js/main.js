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

// document.querySelector("#btn-submit-contact").addEventListener("click", (evento) => {
//     evento.preventDefault(); //cancelando o envio temporariamente


//     let nomeValue = document.querySelector("#input_nome").value;
//     let emailValue = document.querySelector("#input_email").value;

//     console.log(nomeValue);
//     console.log(emailValue);

//     //validação dos campos 
//     //exibição de mensagens de erros
//     //envio do formulário
// });

let formContact = document.querySelector("form_contact");

formContact.addEventListener("submit", (evento) => {
    //interromp o envio do formuário 
    evento.preventDefault();

    //validar se todos os campos estão preenchido
    //validar se o nome tem 2 ou mais caracteres
    //validar se teefone tem no minimo 8 caracteres
    //validar se o campo email tem @ (Google - validação com Regex)

})

