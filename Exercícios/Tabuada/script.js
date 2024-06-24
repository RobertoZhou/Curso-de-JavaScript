function gerarTabuada() {
    let tabela = window.document.querySelector("#seltab")
    let numTabuada = window.document.querySelector("#numTabuada")

    if(numTabuada.value == "") {
        alert("Por favor, digite um número!")

    } else {
        numTabuada = Number(numTabuada.value)
        tabela.innerHTML = ""

        for(let contador = 0; contador < 11; contador++) {
            let calculo = numTabuada * contador
            let item = document.createElement("option")
            item.text = `${numTabuada} x ${contador} = ${calculo}`
            item.value = `tab${contador}`
            tabela.append(item)
            }
        }
    }