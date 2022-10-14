function formatMoney(value) {
    value = Math.ceil(value * 100) / 100 //arredonda para cima
    value = value.toFixed(2) // fixa duas casas apenas
    return 'R$ ' + value
}

function formatSprit(value) { // separa quando falar Pessoa ou Pessoas 
    if (value == 1) {
        return value + ' Pessoa'
    } else
        return value + ' Pessoas'
}

function update() {

    // declara variaveis
    let conta = Number(document.getElementById('yourBill').value)
    let porcentagemGorjeta = document.getElementById('tipInput').value
    let divisao = Number(document.getElementById('splitInput').value)

    // calculos

    let valorGorjeta = conta * (porcentagemGorjeta / 100)
    let gorjetaTotal = conta + valorGorjeta
    let gorjetaIndividual = gorjetaTotal / divisao

    // mostrando resultados inserirdos no html

    document.getElementById('tipPercent').innerHTML = porcentagemGorjeta + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(valorGorjeta)
    document.getElementById('totalWithTip').innerHTML = formatMoney(gorjetaTotal)
    document.getElementById('splitValue').innerHTML = formatSprit(divisao)
    document.getElementById('billEach').innerHTML = formatMoney(gorjetaIndividual)

}