const teclas = document.querySelectorAll('.teclas')
const visor = document.querySelector('.visor')
const preview = document.querySelector('.preview')

const valorInicial = visor.innerText = 0;
for (const tecla of teclas) {
        tecla.addEventListener('click', e => {
            switch (e.target.dataset.char) {
                case '+':
                case '-':
                case '/':
                case '*':
                    preencheOperadores(e)
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
                    preencheVisor(e)
                    break;
            }
        })
}

const limiteVisor = 16

function preencheVisor(e){

    if (visor.innerText.length < limiteVisor){
        visor.innerText === '0' ? visor.innerText = e.target.dataset.char : visor.innerText += e.target.dataset.char
    }

    if(visor.innerText.length > limiteVisor -3){
        visor.style.fontSize = "35px"
    }
}

function preencheOperadores(e) {
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