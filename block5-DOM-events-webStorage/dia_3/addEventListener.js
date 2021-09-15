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
    capturarando = document.getElementById("input").value;
   if(divUm.classList == "tech") {
   document.getElementById("divUm").innerHTML = capturarando;
   } else if (divDois.classList == "tech") {
    document.getElementById("divDois").innerHTML = capturarando;      
   }else if (divTres.classList == "tech") {
    document.getElementById("divTres").innerHTML = capturarando;      
   }
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

let clickSportry = document.getElementById("mySpotrybefy");
clickSportry.addEventListener("dblclick", receberClick);

function receberClick (){
   // window.location.href = "https://brenomatias.github.io/"; // https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
   window.open("https://brenomatias.github.io/", "blank"); // redireciona para página em branco https://www.codegrepper.com/code-examples/javascript/redirect+target+_blank+javascript
}

//5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

let mouseOver = document.getElementById("mySpotrybefy");
mouseOver.addEventListener("mouseover", mouseEmcima);
function mouseEmcima(){
    mouseOver.style.color = "red";
}
// para voltar a cor no caso teria que um mouse leave.

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.