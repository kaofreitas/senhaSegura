const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letraMaiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWX';
const letraMinuscula = 'abcdefghijklmnopqrstuvwx';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-enha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('forca');


botoes[0].onclik = diminuiTamanho;
botoes[1].onlick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha >1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if(tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}