const teclas = document.querySelectorAll('.teclas')
let visor = document.querySelector('.visor')

const valorInicial = visor.innerText = 0 
for (const tecla of teclas) {
        tecla.addEventListener('click', e => {
            switch (e.target.dataset.char) {
                case "somar":
                    somar()
                    break;
                case "diminuir":
                    diminuir()
                    break;
                case "dividir":
                    dividir()
                    break;
                case "multiplicar":
                    multiplicar()
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

function preencheVisor(e){
    const limiteVisor = 10
    if (visor.innerText.length < limiteVisor){
        visor.innerText === '0' ? visor.innerText = e.target.dataset.char : visor.innerText += e.target.dataset.char
    }
}

function limpar(){
    visor.innerText = 0
}

function backspace(){
     const valorCorrigido = visor.innerText.slice(0, -1)
     valorCorrigido > 0 ?  visor.innerText = valorCorrigido : visor.innerText = 0
}