
/*
Formas de acessar o DOM:

Case Sensitive= reconhece letras maisculas e minusculas

por tag: getElementByTagName()
por ID: getElentById()
por Nome: getElemntByName()
por classe: getElemntByClassName()
por seletor: querySelector()

*/


/* as principais varaveis:*/

let name = window.document.getElementById('name')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

/* mudando os campos */
nome.style.width = '100%'
email.style.width = '100%'

function validaName() {
    let txtName = document.querySelector('#txtName')
    if (nome.value.length < 3) {
        txtName.innerHTML = 'Nome Inválido'
        txtName.style.color = 'red'
    } else
        txtName.innerHTML = 'Nome Válido'
    txtName.style.color = 'green'
    nomeOk = true

}


function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function send() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}


