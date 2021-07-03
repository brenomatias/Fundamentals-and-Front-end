// addEventListener(tipoEvento, função);
const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

divUm.addEventListener("click", toggleClass3);
divDois.addEventListener("click", toggleClass1);  // resoluçao baseada neste vídeo https://www.youtube.com/watch?v=BWvWSRCnYyg
divTres.addEventListener("click", toggleClass2);

function toggleClass3 (){
    if (divUm.classList == "tech"){
        divUm.classList.remove("tech");
    } else {
        divUm.classList.add("tech");
    }
}


function toggleClass1 (){
if (divDois.classList == "tech"){
    divDois.classList.remove("tech");
} else {
    divDois.classList.add("tech");
}
}

function toggleClass2 (){
    if (divTres.classList == "tech"){
        divTres.classList.remove("tech");
    } else {
        divTres.classList.add("tech");
    }
}











function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.