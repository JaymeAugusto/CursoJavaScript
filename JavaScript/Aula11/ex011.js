function verificar(){
    var txt = window.document.querySelector('input#txtpa')
    var res = window.document.querySelector('div#res')
    var pais = (txtpa.value)
    res.innerHTML = `Você é do pais ${pais}<br>`
    if (pais == 'Brasil' || pais == "brasil"){
        res.innerHTML += 'Vocé e <strong>BRASILEIRO</strong>'      
    }
    else {
        res.innerHTML += 'Você é <strong>ESTRANGEIRO</strong>'
    }
}