var a = document.getElementById("sla")
a.addEventListener("click", mudadecor)
a.addEventListener("mouseenter", moveu)
a.addEventListener("mouseout", saiu)
function mudadecor(){
    a.style.color = "red"
}
function moveu(){
    a.style.color = "blue"
    a.innerText = "Azulllllllllllllllllllllllllllllll"
}
function saiu(){
    a.style.color = "black"
    a.innerText = "Olá eu vou mudar de cor se vc passar o mouse me mmimmmmm"
}