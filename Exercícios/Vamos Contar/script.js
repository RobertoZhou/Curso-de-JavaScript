function contar() {
    let inicio = window.document.querySelector("#inicio")
    let fim = window.document.querySelector("#fim")
    let passos = window.document.querySelector("#passos")
    let msg = window.document.querySelector("#msg")
    
    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passos = Number(passos.value)

    if(typeof(inicio) != Number && typeof(fim) != Number && typeof(passos) != Number) {
        if(passos <= 0) {
            alert("Passo Inválido! Considerando PASSO 1!")
            passos = 1
        }
        msg.innerHTML = "Contando:</br>"
        if(inicio > fim) {
            // Contagem crescente
            for(var cont = inicio; cont >= fim; cont-=passos) {
                msg.innerHTML += `${cont} \u{1F449} `
            }
        } else {
            // Contagem regressiva
            for(var cont = inicio; cont <= fim; cont+=passos) {
                msg.innerHTML += `${cont} \u{1F449} `
            }
        }
        msg.innerHTML += `\u{1F3C1}`
    } else {
        msg.innerHTML = "impossível Contar!"
    }
}

