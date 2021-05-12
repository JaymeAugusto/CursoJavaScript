let array = []
let num = document.querySelector("input#txtnum")
let res = document.getElementById("txtselecao")
let fim = document.querySelector("p#txtfinaliza")

function adiciona() {
    fim.innerHTML = ``
    let igual = array.indexOf(Number(num.value))
    if(num.value.length == 0){
        alert("Verifique os valores")
    }else if(Number(num.value) < 1 || Number(num.value) > 100){
        alert("Verifique os valores")
    }else if (igual != -1) {
        alert("O valor ja esta na lista")
    }else{
        array.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} foi adicionado`
        res.appendChild(item)
    }
    num.value = ""
    num.focus()
}

function finaliza() {
    if (array.length == 0) {
        alert("nenhum item")
    }else{
        let posicoes = array.length
        let maior = array[0]
        let menor = array[0]
        let soma = 0
        let media = 0
        for(let i = 0; i < posicoes; i++){
            if (array[i] > maior)   maior = array[i]
            if (array[i] < menor)   menor = array[i]
            soma += array[i]
        }
        media = soma/posicoes
        fim.innerHTML += `<p>Ao todo, temos ${posicoes} valores cadastrados</p>`
        fim.innerHTML += `<p>O maior valor foi ${maior}</p>`
        fim.innerHTML += `<p>O menor valor foi ${menor}</p>`
        fim.innerHTML += `<p>A soma foi ${soma}</p>`
        fim.innerHTML += `<p>A media foi ${media}</p>`
    }
}