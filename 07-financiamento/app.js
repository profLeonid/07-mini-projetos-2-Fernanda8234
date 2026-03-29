'use strict'

const meses = function(tempo){
    let listaNumeros = []
    for (let n2 = 1; n2 <= tempo; n2++) {
    listaNumeros.push(n2)
    }
    return listaNumeros  // precisa retornar o array
}

const parcela = function(capital, tempo){
    let resultado = []
    let calculo // parcela fixa sem juros
    for (let i = 1; i <= tempo; i++) {
        calculo = capital / tempo
        resultado.push(calculo)
    }
    return resultado
}

const jurosMensal = function(capital, taxa, tempo){
    let resultado = []
    let saldo = capital // Precisa começar com o valor total

    for (let i = 1; i <= tempo; i++) {
        // 1. CALCULA O JURO (180, 165...)
        let jurosDoMes = saldo * (taxa / 100)

        // 2. ABATE A DÍVIDA (1000 por mês)
        saldo = saldo - (capital / tempo)

        // 3. GUARDA O JURO NO ARRAY (Pra aparecer no console)
        resultado.push(jurosDoMes)
    }
    return resultado
}

const totalMensal = function(capital, taxa, tempo){
    let resultado = []
    let saldoDevedor = capital // uma variável para o saldo diminuir
    const parcelaFixa = capital / tempo // calculamos os 1000 aqui fora

    for (let i = 1; i <= tempo; i++) {
        // 1. CONTA DO JURO (180, 165...)
        let jurosDoMes = saldoDevedor * (taxa / 100)

        // 2. CONTA DO TOTAL (1000 + 180 = 1180)
        let calculo = parcelaFixa + jurosDoMes

        // 3. ABATE O TOTAL (12000 - 1000 = 11000)
        saldoDevedor = saldoDevedor - parcelaFixa

        resultado.push(calculo)
    }
    return resultado
}

const saldoDevedor = function(capital, tempo){
    let resultado = []
    let saldo = capital
    let parcelas = capital / tempo

    for (let i = 1; i <= tempo; i++) {
        saldo = saldo - parcelas
        resultado.push(saldo)
    }
    return resultado
}

const criarLinha = function(meses, parcelas, jurosMensal, totalMensal, saldoDevedor){
    const tabela = document.getElementById('tabela')
    const tr = document.createElement('tr')

    const tdMeses = document.createElement('td')
    tdMeses.textContent = meses

    const tdParcelas = document.createElement('td')
    tdParcelas.textContent = parcelas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    tdParcelas.className = 'col-parcela'

    const tdJurosMensal = document.createElement('td')
    tdJurosMensal.textContent = jurosMensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    tdJurosMensal.className = 'col-juros'

    const tdTotalMensal = document.createElement('td')
    tdTotalMensal.textContent = totalMensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    tdTotalMensal.className = 'col-total'

    const tdSaldoDevedor = document.createElement('td')
    tdSaldoDevedor.textContent = saldoDevedor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    tdSaldoDevedor.className = 'col-saldo'
    
    tr.replaceChildren(tdMeses, tdParcelas, tdJurosMensal, tdTotalMensal, tdSaldoDevedor)
    tabela.appendChild(tr)
}

const handleClick = function(){
    const tabela = document.getElementById('tabela')
    
    const capital = Number(document.getElementById('capital').value)
    const taxa = Number(document.getElementById('taxa').value)
    const tempo = Number(document.getElementById('tempo').value)

    tabela.replaceChildren()

    const listaMeses = meses(tempo)
    const listaParcelas = parcela(capital, tempo)
    const listaJurosMensal = jurosMensal(capital, taxa, tempo)
    const listaTotalMensal = totalMensal(capital, taxa, tempo)
    const listaSaldoDevedor = saldoDevedor(capital, tempo)
    for(let i = 0; i <= tempo; i++){
        criarLinha(listaMeses[i], listaParcelas[i], listaJurosMensal[i], listaTotalMensal[i], listaSaldoDevedor[i])
    }
}