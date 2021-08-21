const imagemExibida = document.querySelector('.imagem-exibida');
const barraDeImagens = document.querySelector('.barra-imagens');

const btn = document.querySelector('button');
const sobreposicao = document.querySelector('.sobreposicao');

/* Looping por imagens */
for(let i = 1; i < 6; i++){
    const novaImagem = document.createElement('img');
    novaImagem.setAttribute('src', "images/pic" + i + ".jpg");
    barraDeImagens.appendChild(novaImagem);

    novaImagem.onclick = function(e){
        imagemExibida.src = e.target.src;
    }
}



/* Conectando o botão Escurecer / Clarear */
btn.onclick = function () {
    const nomeDaClasseDoBotao = btn.getAttribute("class");
    if(nomeDaClasseDoBotao === "escurecer"){
        btn.setAttribute("class", "clarear");
        btn.textContent = "Clarear";
        sobreposicao.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else if (nomeDaClasseDoBotao === "clarear") {
        btn.setAttribute("class", "escurecer");
        btn.textContent ="Escurecer";
        sobreposicao.style.backgroundColor = "rgba(0,0,0,0)";
    }
}