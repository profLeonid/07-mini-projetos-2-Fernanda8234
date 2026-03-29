'use strict'

const tabela = document.getElementById('tabela')

const criarListaNumeros = function(qntd){
    let listaNumeros = []

    for(let i=1; i <=qntd; i++){
        listaNumeros.push(i)
    }

    return listaNumeros 
}

const criarListaPares = function(qntd){
    let listaPares = []

    for(let i=2; i <= qntd; i += 2){
        listaPares.push(i)
    }
    return listaPares
}

const criarListaImpares = function(qntd){
    let listaImpares = []

    for(let i=1; i <= qntd; i+=2){
        listaImpares.push(i)
    }
    return listaImpares
}

const criarListaMultiplacador = function(qntd){
    let listaMultiplacador = []

    for(let i = 1; i <= qntd; i ++){
        
        listaMultiplacador.push(i * 5)
    }
    return listaMultiplacador
}

const criarListaPotencial = function(qntd){
    let listaPotencial = []

    for(let i = 0; i < qntd; i++){
      
        listaPotencial.push(2 ** i)
    }
    return listaPotencial
}

const criarLinha = function(numero, par, impar, multiplicador, potencial) {
    const tr = document.createElement('tr')

    const tdNumero = document.createElement('td')
    tdNumero.textContent = numero

    const tdPar = document.createElement('td')
    tdPar.textContent = par

    const tdImpar = document.createElement('td')
    tdImpar.textContent = impar

    const tdMultiplicador = document.createElement('td')
    tdMultiplicador.textContent = multiplicador

    const tdPotencial = document.createElement('td')
    tdPotencial.textContent = potencial

    tr.replaceChildren(tdNumero, tdPar, tdImpar, tdMultiplicador, tdPotencial)
    tabela.appendChild(tr)
}

const handleClick = function(){
    const qntd = Number(document.getElementById('quantidade').value)
    tabela.innerHTML = ''

    const listaNumeros = criarListaNumeros(qntd)
    const listaPares = criarListaPares(qntd)
    const listaImpares = criarListaImpares(qntd)
    const listaMultiplacador = criarListaMultiplacador(qntd)
    const listaPotencial = criarListaPotencial(qntd)

    for(let i = 0; i < qntd; i++){
        criarLinha(listaNumeros[i], listaPares[i], listaImpares[i], listaMultiplacador[i], listaPotencial[i])
    }
}
