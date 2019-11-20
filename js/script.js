/** 
 * Arquivo: script.js
 * Autor: Paulo Alves
 * Descrição: regra de negócio responsável pela execução de funções para a alteração do semáforo
 * Data: 31/10/2019
*/
let img = document.querySelector('img#semaforo')
let res = document.querySelector('div#res')

function sinalVerde(){
    img.src = './resources/fotos/verde.jpg'
    setTimeout(() => {
        sinalAmarelo()
        res.innerHTML = `<strong>ATENÇÃO!</strong>`
        res.style.color = "#FFC125"
    }, 5000);
}

function sinalAmarelo(){
    img.src = './resources/fotos/amarelo.jpg'
    setTimeout(() => {
        sinalVermelho()
        res.innerHTML = `<strong>PARE!</strong>`
        res.style.color = "#FF0000"
    }, 3000);
}

function sinalVermelho(){
    img.src = './resources/fotos/vermelho.jpg'
    setTimeout(() => {
        sinalVerde()
        res.innerHTML = `<strong>SIGA!</strong>`
        res.style.color = "#00EE00"
    }, 5000);
}

function pararSemaforo(){
    location.reload();
}