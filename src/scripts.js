// Pega os elementos do formulário
const sortForm = document.getElementById('sort')
const inputs = document.querySelectorAll('input')
const numero = document.getElementById('numeros')
const de = document.getElementById('de')
const ate = document.getElementById('ate')
const errorText = document.getElementById('errorText')
const checkbox = document.getElementById('repetir')

// Pega os elementos da área onde aparecem os números sorteados
const sortedForm = document.getElementById('sortedForm')
const numbersSortedContainer = document.getElementById('numbersSorted-container')
const results = document.getElementById('results')

// Função para o envio do formulário
sortForm.onsubmit = (e) => {
    e.preventDefault()

    if (Number(numero.value) > Number(ate.value) - Number(de.value) + 1 && checkbox.checked) {
        numero.setCustomValidity('O número não pode ser maior que as possibilidades')
        errorText.textContent = 'O número não pode ser maior que as possibilidades'
        errorText.classList.remove('hidden')
        console.log(Number(ate.value) - Number(de.value));
        
        return
    }

    sort()
}

// Faz com que os inputs recebam apenas números
inputs.forEach(input => {
    input.oninput = () => {
        input.value = input.value.replace(/\D/g, '')
    }
})

// Os 3 próximos códigos lidam com erros padrões na digitação do usuário
numero.onblur = () => {
    if(Number(numero.value) > 100) {
        numero.setCustomValidity('O número não pode ser maior que 100')
        errorText.textContent = 'O número não pode ser maior que 100'
        errorText.classList.remove('hidden')
    } else if (Number(numero.value) <= 0) {
        numero.setCustomValidity('O número deve ser maior que 0')
        errorText.textContent = 'O número deve ser maior que 0'
        errorText.classList.remove('hidden')
    } else {
        numero.setCustomValidity('')
        errorText.classList.add('hidden')
    }
}

de.onblur = () => {
    if(Number(de.value) >= 999)  {
        de.setCustomValidity('O campo "de" deve ter números abaixo de 999')
        errorText.textContent = 'O campo "de" deve ter números abaixo de 999'
        errorText.classList.remove('hidden')
    } else if (Number(de.value) < 0) {
        de.setCustomValidity('O campo "de" deve ter números maior ou igual a 0')
        errorText.textContent = 'O campo "de" deve ter números maior ou igual a 0'
        errorText.classList.remove('hidden')
    } else {
        de.setCustomValidity('')
        errorText.classList.add('hidden')
    }
}

ate.onblur = () => {
    if(Number(ate.value) > 999)  {
        ate.setCustomValidity('O campo "À" deve ter números abaixo de 1000')
        errorText.textContent = 'O campo "À" deve ter números abaixo de 1000'
        errorText.classList.remove('hidden')
    } else if (Number(ate.value) <= 0) {
        ate.setCustomValidity('O campo "À" deve ter números maior que 0')
        errorText.textContent = 'O campo "À" deve ter números maior que 0'
        errorText.classList.remove('hidden')
    } else {
        ate.setCustomValidity('')
        errorText.classList.add('hidden')
    }
}

// Função para o sorteio de números
function sort () {
    let sorteados = [] // Guarda os números sorteados no array
    let i = 0

    // Função em que sorteia os números até o valor estipulado
    function sortStep() {
        if(i < Number(numero.value)) {
            let numberSorted

            // Caso a checkbox esteja marcada ele não irá repetir os números sorteados
            if(checkbox.checked) {
                do {
                    numberSorted = Math.floor(Math.random() * (Number(ate.value) - Number(de.value) + 1)) + Number(de.value)
                } while (sorteados.includes(numberSorted));
            } else {
                numberSorted = Math.floor(Math.random() * (Number(ate.value) - Number(de.value) + 1)) + Number(de.value)
            }

            sorteados.push(numberSorted)
            criaElementos(numberSorted, i + 1)
            i++
            setTimeout(sortStep, 200) // Adiciona um tempo de 0,2 segundos para cada sorteio
        }
    }

    sortStep()
}

// Função que exibe os números sorteados na tela
function criaElementos(sortedNumber, i) {
    sortedForm.classList.remove('hidden')
    sortForm.classList.add('hidden')

    results.textContent = `${i}º RESULTADO`

    const h2 = document.createElement('h2')
    h2.textContent = sortedNumber
    h2.classList.add('overlineL', 'text-content-brand')
    h2.setAttribute('id', 'sort_number')

    numbersSortedContainer.append(h2)

    if(numbersSortedContainer.children.length == 1) {
        numbersSortedContainer.classList.add('grid-cols-1')
        numbersSortedContainer.classList.remove('grid-cols-3')
    } else {
        numbersSortedContainer.classList.remove('grid-cols-1')
        numbersSortedContainer.classList.add('grid-cols-3')
    }
}

// Se o usuário desejar sortear outros números esta função vai resetar os valores dos inputs e fazer reaparecer o formulário
sortedForm.onsubmit = (e) => {
    e.preventDefault()

    sortForm.classList.remove('hidden')
    sortedForm.classList.add('hidden')

    numero.value = 1
    de.value = 1
    ate.value = 100
    checkbox.checked = false
    numbersSortedContainer.innerHTML = ''
}