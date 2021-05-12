function contar(){
    var inicio = document.querySelector("input#ini")
    var fim = document.querySelector("input#fim")
    var passo = document.querySelector("input#pas")
    var res = document.querySelector("div#conta")
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossivel Contar`
    }else{
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        if(passo <= 0){
            alert("Passo Inválido Considerando passo 1")
            passo = 1
        }
        res.innerHTML = `Contando:<br> `
        if (inicio < fim) {
            for(let i = inicio; i<=fim; i+= passo){
                res.innerHTML += ` ${i} \u{1F449}`
            } 
        }else{
            for(let i = inicio; i>=fim; i-= passo){
                res.innerHTML += ` ${i} \u{1F449}`
            } 
        }
        res.innerHTML += ` \u{1F3C1}`
    }
    
}