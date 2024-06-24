let listaNum = []

let num = window.document.querySelector("#num")
let tabela = window.document.querySelector("#seltab")
let msg = window.document.querySelector("#msg")
//  Verifica se e um número, entre 1 a 100
function isNumero(numero) {
    if(Number(numero) >= 1 && Number(numero) <= 100) {
        return true
    } else {
        return false
    }
}
//  Verificar se o valor está na Lista
function isLista(numero, lista) {
    if(lista.indexOf(Number(numero)) != -1) {
        return true  
    } else {
        return false
    }
} 

function adicionarNum() {
    if((isNumero(num.value)) && (!isLista(num.value, listaNum))) {
        listaNum.push(Number(num.value))
        let item = window.document.createElement("option")
        item.text = `Valor ${num.value} adicionado!`
        tabela.appendChild(item)
        msg.innerHTML = ""
    } else {
        window.alert("Valor inválido ou já encontrado na lista")
    }
    num.value = ""
    num.focus()
}


function analisarNum(){
    if(listaNum.length == 0) {
        alert("Adicione valores antes de finalizar!")
    } else {
        let total = listaNum.length
        let maior = listaNum[0]
        let menor = listaNum[0]
        let soma = 0

        // Somandos todos os valores da lista
        for(let n = 0; n < listaNum.length; n++) {
            soma += listaNum[n]
            if(listaNum[n] > maior) {
                maior = listaNum[n]
            }
            if(listaNum[n] < menor) {
                menor = listaNum[n]
            }
        }

        let media = soma / total

        msg.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        msg.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        msg.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        msg.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        msg.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}
