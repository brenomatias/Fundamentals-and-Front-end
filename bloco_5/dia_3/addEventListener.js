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

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';








let capturarando = ""; //resoluçao baseada neste vídeo https://www.youtube.com/watch?v=ZGMJqxIkAb0
function capturar(){
   if(divUm.classList == "tech") {
   capturarando = document.getElementById("input").value;
   document.querySelector("input").innerHTML = capturarando;
   } else if (divDois.classList == "tech"){
    document.getElementById("input").placeholder = "Alterar segunda tecnologia";
    capturarando = document.getElementById("input").value;
    document.getElementById("divDois").innerHTML = capturarando;
   } else if (divTres.classList == "tech"){
    capturarando = document.getElementById("input").value;
    document.getElementById("divTres").innerHTML = capturarando;
   }
}







divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.