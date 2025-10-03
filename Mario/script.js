let personagem = document.querySelector('.personagem')

let posicao = {
    cima: 0,
    esquerda: 0
}

document.addEventListener("keydown",(event) =>{
    console.log(event.key)

    if(event.key == "ArrowUp"){
        posicao.cima -= 100
    }
    
    else if(event.key == "ArrowDown"){
        posicao.cima += 100
    }

    else if(event.key == "ArrowLeft"){
        posicao.esquerda -= 100
    }

    else if(event.key == "ArrowRight"){
        posicao.esquerda += 100
    }
    console.log("Cima: " + posicao.cima + "\n Esquerda" + posicao.esquerda)

    personagem.style.top = posicao.cima + "px";
    personagem.style.left = posicao.esquerda + "px";
})