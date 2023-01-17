function Adicionar (Caracter) {
    const ValorDisplay = document.querySelector(".Display").value

    document.querySelector(".Display").value = ValorDisplay + Caracter
}

function Limpar () {
    document.querySelector(".Display").value = ""
}

function Calcular() {
    const ValorDisplay = document.querySelector(".Display").value

    document.querySelector(".Display").value = eval(ValorDisplay)
}

function Inverter() {
    const ValorDisplay = document.querySelector(".Display").value
    document.querySelector(".Display").value = ValorDisplay * -1
}