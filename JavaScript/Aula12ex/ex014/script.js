function carregar(){
    var img = window.document.getElementById("imagem")
    var msg = window.document.getElementById("msg")
    var data = new Date()
    var hora = 14
    msg.innerHTML = `<h2>Agora são ${hora} Horas.</h2>`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = "#e2cd9f"
    }else if(hora >= 12 && hora <=18){
        //BOA TARDE
        img.src = "tarde.png"
        document.body.style.background = "#b9846f"
    }else{
        //BOA NOITE
        img.src = "noite.png"
        document.body.style.background = "#515154"
    }
}
