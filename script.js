//exercício 1

function aloMundo() {
    alert("Alô, Mundo!")
}

//exercício 2

function mostraNumero() {

    let numeroInformado = document.getElementById("numero").value
    let imprimeNumero = document.getElementById("imprimeNumero")

    imprimeNumero.textContent = `O número informado foi ${numeroInformado}.`
}

//exercício 3

function somaNumeros() {

    let num1 = parseFloat(document.getElementById("primeiroNumero").value)

    let num2 = parseFloat(document.getElementById("segundoNumero").value)

    let resultado = document.getElementById("soma")

    resultado.textContent = `A soma de ${num1} e ${num2} é: ${num1 + num2}`
}


//exercício 4

function calculaMedia() {

    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let nota3 = parseFloat(document.getElementById("nota3").value)
    let nota4 = parseFloat(document.getElementById("nota4").value)


    let resultado = document.getElementById("media")



    media.textContent = `A media das notas foi ${(nota1 + nota2 + nota3 + nota4) / 4}`
}


//exercício 5

function converteCentimetros() {

    let metros = parseFloat(document.getElementById("metros").value)

    let centimetros = document.getElementById("centimetros")



    centimetros.textContent = `${metros}m convertido para centímetros é igual a: ${metros * 100}cm`
}


//exercício 6

function calculaArea() {

    let raio = parseFloat(document.getElementById("raio").value)
    let resultadoArea = document.getElementById("area")
    let calculaArea = Math.PI * raio * raio


    resultadoArea.textContent = `A área de um círculo com ${raio}cm é ${calculaArea.toFixed(2)}cm²`
}

//exercício 7

function dobroArea() {

    let ladoQuadrado = parseFloat(document.getElementById("ladoQuadrado").value)
    let resultadoDobroArea = document.getElementById("resultado-dobro")
    let areaQuadrado = ladoQuadrado * ladoQuadrado

    resultadoDobroArea.textContent = `A área de um quadrado de lado ${ladoQuadrado}cm é ${areaQuadrado}cm². O dobro da área desse quadrado é ${areaQuadrado * 2}cm² `
}

//exercício 8

function calculaSalario() {

    let valorHora = parseFloat(document.getElementById("valorHora").value)
    let horasTrabalhadas = parseFloat(document.getElementById("horasTrabalhadas").value)

    let resultadoSalario = document.getElementById("resultado-salario")
    let salario = valorHora * horasTrabalhadas

    resultadoSalario.textContent = `O salario do referido mês será R$${salario} `
}

//exercício 9

function converteCelsius() {

    let temperatura = parseFloat(document.getElementById("temperatura").value)

    let temperaturaCelsius = document.getElementById("temperatura-celsius")
    let conversaoFahrenheitParaCelsius = (5 * (temperatura - 32) / 9)

    temperaturaCelsius.textContent = `${temperatura}° Fahrenheit equivale a ${conversaoFahrenheitParaCelsius.toFixed(1)}° Celsius `
}

//exercício 10

function converteFahrenheit() {

    let tempCelsius = parseFloat(document.getElementById("temp-celsius").value)

    let tempFahrenheit = document.getElementById("temp-fahrenheit")
    let conversaoCelsiusParaFahrenheit = (tempCelsius * 9 / 5) + 32

    tempFahrenheit.textContent = `${tempCelsius}° Celsius equivale a ${conversaoCelsiusParaFahrenheit.toFixed(1)}° Fahrenheit `
}

//exercício 11

function calculaTudo() {

    let primeiroNumInteiro = parseFloat(document.getElementById("num1-inteiro").value)

    let segundoNumInteiro = parseFloat(document.getElementById("num2-inteiro").value)

    let numReal = parseFloat(document.getElementById("num-real").value)

    let resultadoTudo = document.getElementById("resultado-calcula-tudo")

    let produtoNumeros = (primeiroNumInteiro * 2) * (segundoNumInteiro / 2)

    let somaTriplo = (primeiroNumInteiro * 3) + numReal

    let cuboTerceiro = Math.pow(numReal, 3)

    resultadoTudo.innerHTML = `<p>1 - O produto do dobro do primeiro com metade do segundo é: ${produtoNumeros}.</p>
        <p>2 - A soma do triplo do primeiro com o terceiro é: ${somaTriplo}.</p>
        <p>3 - O terceiro número elevado ao cubo é: ${cuboTerceiro}.</p>`
}


//exercício 12

function calculaPesoIdeal() {

    let altura = parseFloat(document.getElementById("altura").value)

    let resultadoPesoIdeal = document.getElementById("resultado-peso-ideal")
    let calculoPesoIdeal = (72.7 * altura) - 58

    resultadoPesoIdeal.textContent = `O peso ideal para um homem que tem ${altura.toFixed(2)}m é ${calculoPesoIdeal.toFixed(2)}kg.`
}

//exercício 13

function calculaPesoIdeal2() {

    let altura = parseFloat(document.getElementById("altura2").value)

    let resultadoPesoIdeal2 = document.getElementById("resultado-peso-ideal2")
    let calculoPesoIdealHomem = (72.7 * altura) - 58
    let calculoPesoIdealMulher = (62.1 * altura) - 44.7

    resultadoPesoIdeal2.textContent = `O peso ideal para alguém que tem ${altura.toFixed(2)}m se você for homem é ${calculoPesoIdealHomem.toFixed(2)}kg, mas se for mulher é ${calculoPesoIdealMulher.toFixed(2)}kg.`
}

//exercício 14

function calculaExcedente() {

    let pesoPesca = parseFloat(document.getElementById("pesoPesca").value)
    let resultadoPesca = document.getElementById("resultado-pesca")
    let excesso = pesoPesca - 50
    let multa = excesso * 4

    if (excesso > 0) {
        resultadoPesca.textContent = `Sua pesca excedeu em ${excesso} e a multa a ser paga é de R$${multa.toFixed(2)}`
    } else {
        resultadoPesca.textContent = "Você não excedeu a quantidade máxima permitida."
    }
}

//exercício 15

function calculaSalarioEDescontos() {

    let valorPorHora = parseFloat(document.getElementById("valor-hora").value)
    let horasDeTrabalho = parseFloat(document.getElementById("horas-de-trabalho").value)

    let salarioFinal = document.getElementById("salario-final")

    let salarioBruto = valorPorHora * horasDeTrabalho

    let descIR = salarioBruto * 0.11

    let descINSS = salarioBruto * 0.08

    let descSindicato = salarioBruto * 0.05

    let totalDescontos = descIR + descINSS + descSindicato

    let salarioLiquido = salarioBruto - totalDescontos


    salarioFinal.innerHTML = `<table>

            <tr>
                <td>+ Salário Bruto: </td>
                <td>R$ ${salarioBruto.toFixed(2)}</td>
            </tr>
            <tr>
                <td>- IR (11%): </td>
                <td>R$ ${descIR.toFixed(2)}</td>
            </tr>
            <tr>
                <td>- INSS (8%): </td>
                <td>R$ ${descINSS.toFixed(2)}</td>
            </tr>
            <tr>
                <td>- Sindicato ( 5%): </td>
                <td>R$ ${descSindicato.toFixed(2)}</td>
            </tr>
            <tr>
                <td><b>= Salário Liquido:</b> </td>
                <td><b>R$ ${salarioLiquido.toFixed(2)}</b></td>
            </tr>

        </table>`

}


//exercício 16

function calculaValorPintura() {

    let areaPintura = parseFloat(document.getElementById("area-para-pintar").value)
    let valorPintura = document.getElementById("valor-pintura")

    const valorLataTinta = 80
    const quantLataTinta = 18

    let quantTintaParaPintura = areaPintura / 3

    let quantLatas = Math.ceil(quantTintaParaPintura / quantLataTinta)

    let custoTotal = quantLatas * valorLataTinta


    valorPintura.innerHTML = `<p>Para pintar ${areaPintura}m² são necessários ${quantTintaParaPintura.toFixed(1)} litros de tinta.</p>
    <p>Você vai precisar de ${quantLatas} lata(s) de tinta e seu custo será de R$${custoTotal.toFixed(2)}</p>`
}

//exercício 17

function calculaPintura() {

    let areaTotalPintura = parseFloat(document.getElementById("total-area-pintura").value)
    let valorFinalPintura = document.getElementById("valor-total-pintura")

    const precoLata = 80
    const quantLata = 18
    const precoGalao = 25
    const quantGalao = 3.6

    let quantTintaParaPintura = (areaTotalPintura / 6) * 1.1

    let quantLatas = Math.ceil(quantTintaParaPintura / quantLata)

    let quantGaloes = Math.ceil(quantTintaParaPintura / quantGalao)

    let custoTotalEmLatas = quantLatas * precoLata

    let custoTotalEmGaloes = quantGaloes * precoGalao

    let latasInteiras = Math.floor(quantTintaParaPintura / quantLata)

    let litrosRestantes = quantTintaParaPintura - (latasInteiras * quantLata)

    let galoesMistura = Math.ceil(litrosRestantes / quantGalao)

    let custoMistura = (latasInteiras * precoLata) + (galoesMistura * precoGalao)

    valorFinalPintura.innerHTML = `<p>Para pintar ${areaTotalPintura}m² são necessários ${quantTintaParaPintura.toFixed(1)} litros de tinta.</p>
    <p>Se você preferir comprar <b>latas</b> de 18 litros, vai precisar de ${quantLatas} lata(s) e seu custo será de R$${custoTotalEmLatas.toFixed(2)}.</p>
    <p>Se preferir comprar <b>galões</b> de 3.6 litros, vai precisar de ${quantGaloes} galão(ões) e o custo será de R$${custoTotalEmGaloes.toFixed(2)}.</p>
    <p>Porém, se você quiser <b>misturar</b> latas e galões poderá comprar ${latasInteiras} lata(s) e ${galoesMistura} galão(ões). Seu custo será de R$${custoMistura.toFixed(2)}.</p>`
}

//exercício 18

function calculaTempoDownload() {

    let tamanhoArquivoEmMegabits = (parseFloat(document.getElementById("tamanho-arquivo").value)) * 8
    let velocidadeInternet = parseFloat(document.getElementById("velocidade-internet").value)
    let tempoDeDownload = document.getElementById("tempo-de-download")

    let tempoSegundos = tamanhoArquivoEmMegabits / velocidadeInternet

    let minutos = Math.floor(tempoSegundos / 60)
    let segundos = Math.floor(tempoSegundos % 60)

    tempoDeDownload.innerHTML = `O download levará ${minutos} minuto(s) e ${segundos} segundo(s) para concluir.`

}
