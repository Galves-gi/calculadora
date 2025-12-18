const formulario = document.querySelector('[data-formulario]')
const formularioBtnEnviar = document.querySelector('[data-enviar]')
const formularioInput = document.querySelector('[data-formulario-input]')

let operacao = []

formulario.addEventListener('click', (e)=>{
    e.preventDefault()

    operacao = e.target.value
    formularioInput.value += e.target.value

    console.log(operacao);
})

