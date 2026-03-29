'use strict'

const numeros = function(){
    let listaNumeros = []
    for (let n2 = 1; n2 <= 10; n2++) {
    listaNumeros.push(n2)
    }
    return listaNumeros  // precisa retornar o array
}

const adicao = function(numero){
    let resultado = []
    for (let n2 = 1; n2 <= 10; n2++) {
        resultado.push(numero + n2)
    }
    return resultado  // precisa retornar o array
}

// calcula a subtração dos números
const subtracao = function(numero){
    let resultado = []
    // processamento do calculo
    for (let n2 = 1; n2 <= 10; n2++) {
        resultado.push((numero - n2).toFixed(2)) // limita o resultado a 2 casas decimais
    }
    return resultado
}

// calcula a multiplicação dos números
const multiplicacao = function(numero){
    let resultado = []
    // processamento do calculo
    for (let n2 = 1; n2 <= 10; n2++) {
        resultado.push((numero * n2).toFixed(2)) // limita o resultado a 2 casas decimais
    }
    return resultado
}

// calcula a divisão dos números
const divisao = function(numero){    
    let resultado = []
    // processamento do calculo
    for (let n2 = 1; n2 <= 10; n2++) {
        if (n2 === 0) return false // evita erro de divisão por zero
        resultado.push((numero / n2).toFixed(2)) // limita o resultado a 2 casas decimais
    }
    return resultado
}

const validacaoOperacoesBasicas = function(valor1, valor2, operador){
    let n1 = Number(String(valor1).replace(',', '.')) 
    let n2 = Number(String(valor2).replace(',', '.'))
    let resultado = []
    
    if(n1 == '' || isNaN(n1) || n2 == '' || isNaN(n2)){
        console.log('Erro: Digite um número válido')
        return false
    }
    else {
       
        if (operador === 'soma') {
            return soma(n1, n2)
        } else if (operador === 'subtração') {
            return subtracao(n1, n2)
        } else if (operador === 'multiplicação') {
            return multiplicacao(n1, n2)
        } else if (operador === 'divisão') {
            return divisao(n1, n2)
        } 
    }
    return resultado
}

const criarLinha = function(numeros, adicao, subtracao, multiplicacao, divisao){
    const tabela = document.getElementById('tabela')
    const tr = document.createElement('tr')

    const tdNumeros = document.createElement('td')
    tdNumeros.textContent = numeros

    const tdAdicao = document.createElement('td')
    tdAdicao.textContent = adicao

    const tdSubtracao = document.createElement('td')
    tdSubtracao.textContent = subtracao

    const tdMultiplicacao = document.createElement('td')
    tdMultiplicacao.textContent = multiplicacao

    const tdDivisao = document.createElement('td')
    tdDivisao.textContent = divisao

    tr.replaceChildren(tdNumeros, tdAdicao, tdSubtracao, tdMultiplicacao, tdDivisao)
    tabela.appendChild(tr)
}

const handleClick = function(){
    const tabela = document.getElementById('tabela')
    tabela.innerHTML = ''
    
    const numero = Number(document.getElementById('numero').value)
    const listaNumeros = numeros(numero)
    const listaAdicao = adicao(numero)
    const listaSubtracao = subtracao(numero)
    const listaMultiplicacao = multiplicacao(numero)
    const listaDivisao = divisao(numero)
    for(let i = 0; i <= 10; i++){
        criarLinha(listaNumeros[i], listaAdicao[i], listaSubtracao[i], listaMultiplicacao[i], listaDivisao[i])
    }
}
