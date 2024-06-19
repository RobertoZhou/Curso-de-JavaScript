function carregar(){
    let msg = window.document.querySelector("#msg")
    let img = window.document.querySelector("#imagem")
    let data = new Date()
    let horaAtual = data.getHours() // Pegando a hora atual
    msg.innerHTML = `Agora são ${horaAtual} horas.`
    if(horaAtual >= 0 && horaAtual < 12) {
        // BOM DIA
        img.src = "manha.jpg"
        window.document.body.style.backgroundColor = "#e2cd9f"
    } else if(horaAtual >= 12 && horaAtual <= 18) {
        // BOA TARDE
        img.src = "tarde.jpg"
        window.document.body.style.backgroundColor = "#aa73dd"
    } else {
        // BOA NOITE
        img.src = "noite.jpg"
        window.document.body.style.backgroundColor = "#155154"
    }
}
