function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if(fano.value.length == 0 || fano.value > ano){
        alert("[ERRO] Verifique os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if(fsex[0].checked){
            genero = "homem"
            if(idade >= 0 && idade < 10){
                img.setAttribute("src", "foto-bebe-m.png")
            }else if(idade < 21) {
                img.setAttribute("src", "foto-jovem-m.png")
            }else if(idade < 50){
                img.setAttribute("src", "foto-adulto-m.png")
            }else{
                img.setAttribute("src", "foto-idoso-m.png")
            }
        }else{
            genero = "mulher"
            if(idade >= 0 && idade < 10){
                img.setAttribute("src", "foto-bebe-f.png")
            }else if(idade < 21) {
                img.setAttribute("src", "foto-jovem-f.png")
            }else if(idade < 50){
                img.setAttribute("src", "foto-adulto-f.png")
            }else{
                img.setAttribute("src", "foto-idoso-f.png")
            }
        }
        res.innerHTML =`<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}