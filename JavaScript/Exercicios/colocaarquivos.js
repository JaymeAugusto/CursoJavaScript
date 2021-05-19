var a;
var b;
var azul
for(var i=0; i<200;i++){
    azul += i;
}
window.AbortController
window.innerHeight
window.innerWidth
window.length
window.onload
window.location
window.frames
window.azul
window.clearInterval
window.setInterval
window.setTimeout
window.requestAnimationFrame
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

window.onload = function inicio(){
    var tabuleiro = document.getElementById("tabuleiro")
    var frame = tabuleiro.getContext("2d")
    var velocidade = 80
    var tamanhoTelaW = window.innerWidth
    var tamanhoTelaH = window.innerHeight
    document.addEventListener("keydown",keyPush)
    jogando = setInterval(game,velocidade)
    const vel = 1
    var tamanhopeca = 10
    var qtdpecaX = (tamanhoTelaW*0.9)/tamanhopeca
    var qtdpecaY = (tamanhoTelaH*0.9)/tamanhopeca
    var click = true

    //MAÇAS
    var maca1X = qtdpecaX/2
    var maca1Y = qtdpecaY/2
    var maca2X = maca2Y = -1
    var maca3X = maca3Y = -1
    var maca4X = maca4Y = -1
    var pri2 = pri3 = pri4 = true
    var comeca = true
    
    //PLAYER 1
    var p1Pontos = document.getElementById("Player1")
    var player1X = player1Y = 0
    var pontop1X = qtdpecaX - 5
    var pontop1Y = qtdpecaY/2
    var rastrop1 = []
    var caldap1 = 3
    var anteriorp1
    var invisivelp1 = false
    var contp1 = 10


    //PLAYER 2
    var p2Pontos = document.getElementById("Player2")
    var player2X = player2Y = 0
    var pontop2X = 5
    var pontop2Y = 20
    var rastrop2 = []
    var caldap2 = 3
    var anteriorp2

    async function game(){
        frame.fillStyle = "black"
        frame.fillRect(0,0,tabuleiro.width, tabuleiro.height)

        frame.fillStyle = "red"
        frame.fillRect(maca1X*tamanhopeca,maca1Y*tamanhopeca, tamanhopeca,tamanhopeca)

        if(caldap1-3 >= 5 || caldap2-3 >= 5){
            if(pri2 == true){
                maca2X = maca2Y = 5
                pri2 = false
            }
        frame.fillStyle = "blue"
        frame.fillRect(maca2X*tamanhopeca,maca2Y*tamanhopeca, tamanhopeca,tamanhopeca)
        }

        if(caldap1-3 >= 15 || caldap2-3 >= 15){
            if(pri3 == true){
                maca3X = maca3Y = 10
                pri3 = false
            }
            frame.fillStyle = "chocolate"
            frame.fillRect(maca3X*tamanhopeca,maca3Y*tamanhopeca, tamanhopeca,tamanhopeca)
        }

        if(caldap1-3 >= 50 || caldap2-3 >= 50){
            if(pri4 == true){
                maca4X = maca4Y = 20
                pri4 = false
            }
            frame.fillStyle = "deeppink"
            frame.fillRect(maca4X*tamanhopeca,maca4Y*tamanhopeca, tamanhopeca,tamanhopeca)   
        }

        //MAÇAAAAAAAAAAS

        //MAÇA 1
        if(maca1X  == pontop1X && maca1Y == pontop1Y){
            caldap1++
            maca1X = Math.floor(Math.random()*qtdpecaX)
            maca1Y = Math.floor(Math.random()*qtdpecaY)
            p1Pontos.innerHTML = `Pontos: ${caldap1-3}`
        }
        if(maca1X  == pontop2X && maca1Y == pontop2Y){
            caldap2++
            maca1X = Math.floor(Math.random()*qtdpecaX)
            maca1Y = Math.floor(Math.random()*qtdpecaY)
            p2Pontos.innerHTML = `Pontos: ${caldap2-3}`
        }

        //MAÇA 2
        if(maca2X  == pontop1X && maca2Y == pontop1Y){
            caldap1+= 2
            maca2X = Math.floor(Math.random()*qtdpecaX)
            maca2Y = Math.floor(Math.random()*qtdpecaY)
            p1Pontos.innerHTML = `Pontos: ${caldap1-3}`
        }
        if(maca2X  == pontop2X && maca2Y == pontop2Y){
            caldap2+= 2
            maca2X = Math.floor(Math.random()*qtdpecaX)
            maca2Y = Math.floor(Math.random()*qtdpecaY)
            p2Pontos.innerHTML = `Pontos: ${caldap2-3}`
        }

        //MAÇA 3
        if(maca3X  == pontop1X && maca3Y == pontop1Y){
            caldap1+= 5
            maca3X = Math.floor(Math.random()*qtdpecaX)
            maca3Y = Math.floor(Math.random()*qtdpecaY)
            p1Pontos.innerHTML = `Pontos: ${caldap1-3}`
        }
        if(maca3X  == pontop2X && maca3Y == pontop2Y){
            caldap2+= 5
            maca3X = Math.floor(Math.random()*qtdpecaX)
            maca3Y = Math.floor(Math.random()*qtdpecaY)
            p2Pontos.innerHTML = `Pontos: ${caldap2-3}`
        }

        //MAÇA 4
        if(maca4X  == pontop1X && maca4Y == pontop1Y){
            caldap1+= 10
            maca4X = Math.floor(Math.random()*qtdpecaX)
            maca4Y = Math.floor(Math.random()*qtdpecaY)
            p1Pontos.innerHTML = `Pontos: ${caldap1-3}`
        }
        if(maca4X  == pontop2X && maca4Y == pontop2Y){
            caldap2+= 10
            maca4X = Math.floor(Math.random()*qtdpecaX)
            maca4Y = Math.floor(Math.random()*qtdpecaY)
            p2Pontos.innerHTML = `Pontos: ${caldap2-3}`
        }



        //jogador 1

        p1Pontos.innerHTML = `Pontos: ${caldap1 - 3}`
        pontop1X += player1X
        pontop1Y += player1Y

        if(pontop1X < 0){
            pontop1X = qtdpecaX -1
        }
        if(pontop1X > qtdpecaX -1){
            pontop1X = 0
        }
        if(pontop1Y < 0){
            pontop1Y = qtdpecaY -1
        }
        if(pontop1Y > qtdpecaY -1){
            pontop1Y = 0
        }

        //JOGADOR 1
        if(invisivelp1){
            contp1--
            if(contp1 == 0){
                invisivelp1 = false
                contp1 = 10
            }
            frame.fillStyle = " rgba(0, 255, 255, 0.200)"
            for(var i = 0; i < rastrop1.length; i++){
                frame.fillRect(rastrop1[i].x*tamanhopeca, rastrop1[i].y*tamanhopeca,
                tamanhopeca-1,tamanhopeca-1)
                if(rastrop1[i].x == pontop1X && rastrop1[i].y == pontop1Y){
                    player1X = player1Y = 0
                    if(rastrop1.length > 3){
                        anteriorp1 = 0
                        pontop1X = 63
                        pontop1Y = 20
                        caldap1 = 3
                        p1Pontos.innerHTML = `Pontos: ${caldap1-3}`
                    }
                }
            }

            rastrop1.push({x:pontop1X, y:pontop1Y})
            while(rastrop1.length > caldap1){
                rastrop1.shift()
            }

        }else{
            frame.fillStyle = "aqua"
            for(var i = 0; i < rastrop1.length; i++){
                frame.fillRect(rastrop1[i].x*tamanhopeca, rastrop1[i].y*tamanhopeca,
                tamanhopeca-1,tamanhopeca-1)
                if(rastrop1[i].x == pontop1X && rastrop1[i].y == pontop1Y){
                    player1X = player1Y = 0
                    if(rastrop1.length > 3){
                        anteriorp1 = 0
                        pontop1X = 63
                        pontop1Y = 20
                        caldap1 = 3
                        p1Pontos.innerHTML = `Pontos: ${caldap1-3}`
                    }
                }
            }

            for(var i = 0; i < rastrop2.length; i++){
                if(rastrop2[i].x == pontop1X && rastrop2[i].y == pontop1Y){
                    player1X = player1Y = 0
                    anteriorp1 = 0
                    pontop1X = 63
                    pontop1Y = 20
                    caldap2 += caldap1-3
                    caldap1 = 3
                    p1Pontos.innerHTML = `Pontos: ${caldap1-3}`
                }
            }

            rastrop1.push({x:pontop1X, y:pontop1Y})
            while(rastrop1.length > caldap1){
                rastrop1.shift()
            }
        }    


        //inteligente

        p2Pontos.innerHTML = `Pontos: ${caldap2 - 3}`
        pontop2X += player2X
        pontop2Y += player2Y

        if(pontop2X < 0){
            pontop2X = qtdpecaX -1
        }
        if(pontop2X > qtdpecaX -1){
            pontop2X = 0
        }
        if(pontop2Y < 0){
            pontop2Y = qtdpecaY -1
        }
        if(pontop2Y > qtdpecaY -1){
            pontop2Y = 0
        }

        //inteligencia
        
        if(!comeca){
            if(caldap1-3 >= 50 || caldap2-3 >= 50){
                if(pontop2X > maca4X && anteriorp2 != 39){ //esquerda
                    player2X = -vel
                    player2Y = 0
                    anteriorp2 = 37
                }
                else if(pontop2X < maca4X && anteriorp2 != 37){ //direita
                    player2X = vel
                    player2Y = 0
                    anteriorp2 = 39
                }
                else if(pontop2Y > maca4Y && anteriorp2 != 40){ //cima
                    player2X = 0
                    player2Y = -vel
                    anteriorp2 = 38
                }
                else if(pontop2Y < maca4Y && anteriorp2 != 38){ //baixo
                    player2X = 0
                    player2Y = vel
                    anteriorp2 = 40 
                }
            }else if(caldap1-3 >= 15 || caldap2-3 >= 15){
                if(pontop2X > maca3X && anteriorp2 != 39){ //esquerda
                    player2X = -vel
                    player2Y = 0
                    anteriorp2 = 37
                }
                else if(pontop2X < maca3X && anteriorp2 != 37){ //direita
                    player2X = vel
                    player2Y = 0
                    anteriorp2 = 39
                }
                else if(pontop2Y > maca3Y && anteriorp2 != 40){ //cima
                    player2X = 0
                    player2Y = -vel
                    anteriorp2 = 38
                }
                else if(pontop2Y < maca3Y && anteriorp2 != 38){ //baixo
                    player2X = 0
                    player2Y = vel
                    anteriorp2 = 40 
                }
            }else if(caldap1-3 >= 5 || caldap2-3 >= 5){
                if(pontop2X > maca2X && anteriorp2 != 39){ //esquerda
                    player2X = -vel
                    player2Y = 0
                    anteriorp2 = 37
                }
                else if(pontop2X < maca2X && anteriorp2 != 37){ //direita
                    player2X = vel
                    player2Y = 0
                    anteriorp2 = 39
                }
                else if(pontop2Y > maca2Y && anteriorp2 != 40){ //cima
                    player2X = 0
                    player2Y = -vel
                    anteriorp2 = 38
                }
                else if(pontop2Y < maca2Y && anteriorp2 != 38){ //baixo
                    player2X = 0
                    player2Y = vel
                    anteriorp2 = 40 
                }
            }else{
                if(pontop2X > maca1X && anteriorp2 != 39){ //esquerda
                    player2X = -vel
                    player2Y = 0
                    anteriorp2 = 37
                }
                else if(pontop2X < maca1X && anteriorp2 != 37){ //direita
                    player2X = vel
                    player2Y = 0
                    anteriorp2 = 39
                }
                else if(pontop2Y > maca1Y && anteriorp2 != 40){ //cima
                    player2X = 0
                    player2Y = -vel
                    anteriorp2 = 38
                }
                else if(pontop2Y < maca1Y && anteriorp2 != 38){ //baixo
                    player2X = 0
                    player2Y = vel
                    anteriorp2 = 40 
                }
            }
        }    
        //JOGADOR 2
        frame.fillStyle = "rgb(255, 255, 255)"
        for(var j = 0; j < rastrop2.length; j++){
            frame.fillRect(rastrop2[j].x*tamanhopeca, rastrop2[j].y*tamanhopeca,
            tamanhopeca-1,tamanhopeca-1)
        }

        for(var j = 0; j < rastrop1.length; j++){
            if(rastrop1[j].x == pontop2X && rastrop1[j].y == pontop2Y){
                player2X = player2Y = 0
                anteriorp2 = 0
                pontop2X = 1
                pontop2Y = 20
                caldap1 += caldap2-3
                caldap2 = 3
                p2Pontos.innerHTML = `Pontos: ${caldap2-3}`
            }
        }

        rastrop2.push({x:pontop2X, y:pontop2Y})
        while(rastrop2.length > caldap2){
            rastrop2.shift()
        }    
    }

    function keyPush(event){
        if(click != true){return}
        //JOGADOR 1
        if(anteriorp1 == 37 && event.keyCode == 39){}
        else if(anteriorp1 == 39 && event.keyCode == 37){}
        else if(anteriorp1 == 38 && event.keyCode == 40){}
        else if(anteriorp1 == 40 && event.keyCode == 38){}
        //JOGADOR 2
        else if(anteriorp2 == 65 && event.keyCode == 68){}
        else if(anteriorp2 == 68 && event.keyCode == 65){}
        else if(anteriorp2 == 83 && event.keyCode == 87){}
        else if(anteriorp2 == 87 && event.keyCode == 83){}
        else if(event.keyCode == 13){
            if(comeca == true){
                tempo()
                comeca = false
                document.getElementById("gameover").style.opacity = 0
                player1X = -vel
                player2X = vel
            }
        }
        else if(!comeca){
            switch (event.keyCode) {
                //JOGADOR 1
                case 80: //Espaço
                    if(caldap1-3 > 5){
                        invisivelp1 = true
                        caldap1 -= 5
                    }    
                break;
                case 37: //esquerda
                    player1X = -vel
                    player1Y = 0
                    anteriorp1 = 37
                break;
                case 38: //cima
                    player1X = 0
                    player1Y = -vel
                    anteriorp1 = 38
                break;
                case 39: //direita
                    player1X = vel
                    player1Y = 0
                    anteriorp1 = 39
                break;
                case 40: //baixo
                    player1X = 0
                    player1Y = vel
                    anteriorp1 = 40
                break;
                //JOGADOR 2
                case 32: //Espaço
                    if(caldap2-3 > 5){
                        invisivelp2 = true
                        caldap2 -= 5
                    }
                break;
                case 65: //esquerda
                    player2X = -vel
                    player2Y = 0
                    anteriorp2 = 65
                break;
                case 87: //cima
                    player2X = 0
                    player2Y = -vel
                    anteriorp2 = 87
                break;
                case 68: //direita
                    player2X = vel
                    player2Y = 0
                    anteriorp2 = 68
                break;
                case 83: //baixo
                    player2X = 0
                    player2Y = vel
                    anteriorp2 = 83
                break;
                case 27: //pausa
                    alert("JOGO PAUSADO")
                break;
                default:
                break;
            }
        }
    }

    function tempo(){
        var seg = 180
        s = document.getElementById("segundo")
        m = document.getElementById("minuto")

        cronometro = setInterval(function(){
            seg--
            secs = seg
            mins = 0
            while(secs>=60){
                mins++
                secs-=60
            }

            if(mins < 10) m.innerHTML = `0${mins}`
            else m.innerHTML = `${mins}`
            if(secs < 10) s.innerHTML = `0${secs}`
            else s.innerHTML = `${secs}`

            if(mins <= 0 && secs <= 0){
                var win
                if(caldap1 > caldap2){
                    win = 1
                }else if(caldap1 < caldap2){
                    win = 2
                }else{
                    win = 0
                }
                document.getElementById("gameover").style.opacity = 1
                document.getElementById("gameover").innerHTML = `
                <h1 id="titulo">FIM DE JOGO</h1>`

                clearInterval(cronometro)
                clearInterval(jogando)

                click = false

                if( win == 1){
                    document.getElementById("gameover").innerHTML += `
                    <p> Jogador 1: ${caldap1-3} ponto(s)</p>
                    <p> Jogador 2: ${caldap2-3} ponto(s)</p>`
                }else if( win == 2){
                    document.getElementById("gameover").innerHTML += `
                    <p> Jogador 2: ${caldap2-3} ponto(s)</p>
                    <p> Jogador 1: ${caldap1-3} ponto(s)</p>`
                }else{
                    document.getElementById("gameover").innerHTML += `
                    <p> Jogador 1: ${caldap1-3} ponto(s)</p>
                    <p> Jogador 2: ${caldap2-3} ponto(s)</p>`
                }
                document.getElementById("gameover").innerHTML += `
                <input type="button" value="Novo Jogo" onclick="novojogo()" id="botao">`
            }

        },1000)
    }
}


function novojogo(){
    location.reload()
}