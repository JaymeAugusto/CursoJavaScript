function calcular(){
    var txtv = window.document.getElementById("txtvel")
    var res = window.document.getElementById("res")
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}hm/h</strong></p>`
    if(vel > 60){
        res.innerHTML += `Voce esta multado por excesso de velocidade `
    }
    res.innerHTML += `<p>Dirija sempre com o cinto de segurança</p>`
}