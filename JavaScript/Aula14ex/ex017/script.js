function tabuada() {
    let num = document.querySelector("input#tab")
    let res = document.getElementById("txtTab")
    if(num.value.length == 0){
        alert("impossivel gerar tabuada")
    }else{
        num = Number(num.value)
        res.innerHTML = ``
        for(let i = 1; i <=10; i++){
            let item = document.createElement("option")
            item.value = `tab${i}`
            item.text = `${num} X ${i} = ${num*i}`
            res.appendChild(item)
        }
    }
}