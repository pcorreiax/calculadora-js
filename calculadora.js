const teclas = document.querySelectorAll('.teclas')
const visor = document.querySelector('.visor')
const preview = document.querySelector('.preview')

const valorInicial = visor.innerText = 0;
const limiteVisor = 16

//Escuta o teclado para utilizar a aplicação sem o mouse

document.addEventListener('keydown', e => {

const teclasPermitidas = ['0', '1','2','3','4','5','6','7','8','9','c','C', 'Backspace', 'Enter', '.', ',', '+','-', '/', '*']

    if(teclasPermitidas.some( tecla => tecla === e.key)){
        switch (e.key) {
            case '+':
            case '-':
            case '/':
            case '*':
                preencheOperadoresTeclado(e)
                break;        
            case 'Backspace':
                backspace()
                break;
            case 'C':
            case 'c':
                limpar()
                break;
            case 'Enter' :
                enter();
                break;
            default:
                preencheVisorTeclado(e)
                break;
        }
    }    
})



//Adiciona função aos botões clicados com o mouse
for (const tecla of teclas) {
        tecla.addEventListener('click', e => {
            switch (e.target.dataset.char) {
                case '+':
                case '-':
                case '/':
                case '*':
                    preencheOperadoresMouse(e)
                    break;        
                case "backspace":
                    backspace()
                    break;
                case "limpar":
                    limpar()
                    break;
                case "enter":
                    enter()
                    break;
                default:
                    preencheVisorMouse(e)
                    break;
            }
        })
}

function preencheVisorTeclado(e){

    if (visor.innerText.length < limiteVisor){
        visor.innerText === '0' ? visor.innerText = e.key : visor.innerText += e.key
    }

    if(visor.innerText.length > limiteVisor -3){
        visor.style.fontSize = "35px"
    }
}


function preencheVisorMouse(e){

    if (visor.innerText.length < limiteVisor){
        visor.innerText === '0' ? visor.innerText = e.target.dataset.char : visor.innerText += e.target.dataset.char
    }

    if(visor.innerText.length > limiteVisor -3){
        visor.style.fontSize = "35px"
    }
}

function preencheOperadoresTeclado(e) {
    if(preview.innerText.slice(-1) === '+' || preview.innerText.slice(-1) === '-' || preview.innerText.slice(-1) === '/' || preview.innerText.slice(-1) === '*'){
        preview.innerText = preview.innerText.slice(0, -1)
        preview.innerText += e.key
    }else{
        preview.innerText = `${visor.innerText}  ${e.key}`
        visor.innerText = 0
    }
}

function preencheOperadoresMouse(e) {
    if(preview.innerText.slice(-1) === '+' || preview.innerText.slice(-1) === '-' || preview.innerText.slice(-1) === '/' || preview.innerText.slice(-1) === '*'){
        preview.innerText = preview.innerText.slice(0, -1)
        preview.innerText += e.target.dataset.char
    }else{
        preview.innerText = `${visor.innerText}  ${e.target.dataset.char}`
        visor.innerText = 0
    }
}

function limpar(){
    visor.innerText = 0
    visor.style.fontSize = "55px"
    preview.innerText = ''
}

function backspace(){
     const valorCorrigido = visor.innerText.slice(0, -1)
     valorCorrigido > '0' ?  visor.innerText = valorCorrigido : visor.innerText = 0
     
    if(visor.innerText.length < limiteVisor -3){
        visor.style.fontSize = "55px"
    }
}
function enter(){
    preview.innerText += ` ${visor.innerText}`
    visor.innerHTML =  eval(preview.innerText)
    preview.innerText += ' = '
}