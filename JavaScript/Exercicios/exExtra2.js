function teste(){
    var Nome = (window.document.querySelector("input#iNome").value)
    var senha = window.document.querySelector("input#iSenha")
    var res = window.document.querySelector("div#res")
    var n2 = Number(senha.value)
    if(Nome == "jayme" && n2 == 1234){
        res.innerHTML = `Acesso Autorizado<br>`
        res.innerText += `Bem Vindo ${Nome}`
    }else{
        res.innerHTML = "<strong> VAI TOMA NO CU</strong>"
    }
}