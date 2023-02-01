const visor = document.querySelector('.visor');
const teclasNumericas = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const historico = document.querySelector('.historico');

visor.innerText = 0;
const limiteDoVisor = 11;

if(visor.innerText < limiteDoVisor){
    for (const tecla of teclasNumericas) {
        tecla.addEventListener('click', (e) => clickNumber(e)) 
    }
}

function clickNumber(e){
    const tamanhoAtualdoVisor = visor.innerText.length;
    
    if(tamanhoAtualdoVisor < 11) 
    visor.innerText === '0' ? visor.innerText = e.target.innerText  : visor.innerText += e.target.innerText; 
}

//Função do botão Clear
clear.addEventListener('click', ()=> {
    visor.innerText = 0
    historico.innerText = ''
})

//Função do botão Backspace
backspace.addEventListener('click', ()=> {
    
    const novoValor = visor.innerText.slice(0, -1)
    novoValor.length > 0 ? visor.innerText = novoValor : visor.innerText = 0
})