/* const btns = document.querySelectorAll('[data-btn]')
const formularioInput = document.querySelector('[data-formulario-input]')

let listaConta = []
let operacao = ''
let indiceOperador
let ultimoOperador = 0

btns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        
        e.preventDefault()

        operacao += e.target.value //concatenação
        formularioInput.value = operacao //ultimo valor
        console.log(operacao);
        
        if (operacao.slice(-1) === '+' || operacao.slice(-1) === '-' || operacao.slice(-1) === '/' || operacao.slice(-1) === '*') {

            indiceOperador = operacao.length

            //console.log(`pegou ${operacao.slice(-1)} na posição ${indiceOperador}`); // pega o indice e o operador emcontrado

            const dividido = operacao.substring(ultimoOperador,indiceOperador - 1)
            
            listaConta.push(dividido)
            listaConta.push(operacao.slice(-1))

            ultimoOperador = indiceOperador
            console.log(listaConta)
            
        }else if(operacao.slice(-1) === '='){

            indiceOperador = operacao.length
            const conta = operacao.substring(0,indiceOperador - 1)
            formularioInput.value = ''
            formularioInput.value = eval(conta)

        }

    })
}) */


/* 
Etapas:

- html ok
- pegar o valor do click ok
- Exibir no input ok
- descubrir qual e/são operador(es) da conta ok
- separar os números a partir dos operadores ok
- realizar ação quando apertar no '='
- ação por cada operação
- realizar a operação matemática


*/

const btns = document.querySelectorAll('[data-btn]')
const formularioInput = document.querySelector('[data-formulario-input]')
let operacao = ''

btns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        
        e.preventDefault()

        operacao += e.target.value //concatenação
        formularioInput.value = operacao //ultimo valor
        console.log(operacao);

        if(operacao.slice(-1) === '='){

            const conta = operacao.substring(0,operacao.length - 1)
            formularioInput.value = ''
            formularioInput.value = eval(conta)
        }

    })
})

// mensagem quando começar * /
// usar teclado
// limpar (com teclado e toda as vezes que click no input)
// permitir copiar no input