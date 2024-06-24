function verificar() {
    let data = new Date()
    let ano = data.getFullYear() // Pega o Ano atual
    let formAno = window.document.getElementById("txtano")
    let res = window.document.querySelector("div#res")
    if(formAno.value.length == 0 || Number(formAno.value > ano)) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        let formSexo = window.document.getElementsByName("radsex")
        let idade = ano - Number(formAno.value)
        let genero = " "
        // Criando a tag img
        let img = window.document.createElement("img")
        // Atribuindo a tag img o id foto
        img.setAttribute("id", "foto")

        if(formSexo[0].checked) {
            genero = "Homem"
            if(idade >=0 && idade < 10) {
                // Criança
                img.setAttribute("src", "bebeM.jpg")
            } else if(idade < 21) {
                // Jovem
                img.setAttribute("src", "jovemM.jpg")
            } else if(idade < 50) {
                // Adulto
                img.setAttribute("src", "adultoM.jpg")
            } else {
                // Idoso
                img.setAttribute("src", "idosoM.jpg")
            }
        } else if(formSexo[1].checked) {
            genero = "Mulher"
            if(idade >=0 && idade < 10) {
                // Criança
                img.setAttribute("src", "bebeF.jpg")
            } else if(idade < 21) {
                // Jovem
                img.setAttribute("src", "jovemF.jpg")
            } else if(idade < 50) {
                // Adulta
                img.setAttribute("src", "adultaF.jpg")
            } else {
                // Idosa
                img.setAttribute("src", "idosaF.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}