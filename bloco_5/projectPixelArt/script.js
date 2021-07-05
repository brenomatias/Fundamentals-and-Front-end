let color1 = document.getElementsByClassName("color")[0].style.border = " 1px solid black"; // Até rePadding é o exercício 2 
let black = document.querySelector("#black").style.backgroundColor = "black";
let blackPadding = document.querySelector("#black").style.padding = "60px 60px";


let color2 = document.getElementsByClassName("color")[1].style.border = " 1px solid black";
let green = document.querySelector("#green").style.backgroundColor = "green";
let greenPadding = document.querySelector("#green").style.padding = "60px 60px"

let color3 = document.getElementsByClassName("color")[2].style.border = " 1px solid black";
let yellow = document.querySelector("#yellow").style.backgroundColor = "yellow";
let yellowPadding = document.querySelector("#yellow").style.padding = "60px 60px";  

let color4 = document.getElementsByClassName("color")[3].style.border = " 1px solid black";
let blue = document.querySelector("#blue").style.backgroundColor = "blue";
let bluePadding = document.querySelector("#blue").style.padding = "60px 60px";

let colorPixel1 = document.getElementsByClassName("pixel")[0].style.backgroundColor = "black";
let colorPixel2 = document.getElementsByClassName("pixel")[1].style.backgroundColor = "white";
let colorPixel3 = document.getElementsByClassName("pixel")[2].style.backgroundColor = "white";
let colorPixel4 = document.getElementsByClassName("pixel")[3].style.backgroundColor = "white";
let colorPixel5 = document.getElementsByClassName("pixel")[4].style.backgroundColor = "white";
let colorPixel6 = document.getElementsByClassName("pixel")[5].style.backgroundColor = "white";
let colorPixel7 = document.getElementsByClassName("pixel")[6].style.backgroundColor = "white";
let colorPixel8 = document.getElementsByClassName("pixel")[7].style.backgroundColor = "white";
let colorPixel9 = document.getElementsByClassName("pixel")[8].style.backgroundColor = "white";
let colorPixel10 = document.getElementsByClassName("pixel")[9].style.backgroundColor = "white";
let colorPixel11 = document.getElementsByClassName("pixel")[10].style.backgroundColor = "white";
let colorPixel12 = document.getElementsByClassName("pixel")[11].style.backgroundColor = "white";
let colorPixel13 = document.getElementsByClassName("pixel")[12].style.backgroundColor = "white";
let colorPixel14 = document.getElementsByClassName("pixel")[13].style.backgroundColor = "white";
let colorPixel15 = document.getElementsByClassName("pixel")[14].style.backgroundColor = "white";
let colorPixel16 = document.getElementsByClassName("pixel")[15].style.backgroundColor = "white";
let colorPixel17 = document.getElementsByClassName("pixel")[16].style.backgroundColor = "white";
let colorPixel18 = document.getElementsByClassName("pixel")[17].style.backgroundColor = "white";
let colorPixel19 = document.getElementsByClassName("pixel")[18].style.backgroundColor = "white";
let colorPixel20 = document.getElementsByClassName("pixel")[19].style.backgroundColor = "white";
let colorPixel21 = document.getElementsByClassName("pixel")[20].style.backgroundColor = "white";
let colorPixel22 = document.getElementsByClassName("pixel")[21].style.backgroundColor = "white";
let colorPixel23 = document.getElementsByClassName("pixel")[22].style.backgroundColor = "white";
let colorPixel24 = document.getElementsByClassName("pixel")[23].style.backgroundColor = "white";
let colorPixel25 = document.getElementsByClassName("pixel")[24].style.backgroundColor = "white";

let selectClass1 = document.getElementsByClassName("color")[0];
selectClass1.classList.add("selected");


// desafio 7 // referencia https://stackoverflow.com/questions/50883690/remove-class-from-one-element-while-adding-that-class-to-another-element-using

let colorsArray = document.querySelectorAll(".color");

for (let i = 0; i < colorsArray.length; i += 1) { 
  colorsArray[i].addEventListener("click", addClassColors);
   function addClassColors(evt) {
    clearClass(); // invoca a função de remoção
    evt.target.classList.add("selected");
  }
}

function clearClass(){
  for (let i = 0; i < colorsArray.length; i += 1) {
    colorsArray[i].classList.remove("selected");
  }
}

// desafio 8 
let pixelArray = document.querySelectorAll(".pixel"); 

for (let i = 0; i < pixelArray.length; i += 1) { // passa por todos elementos do araray contendo os valores pixel
  pixelArray[i].addEventListener("click", addColorPixel);
   function addColorPixel(evt) {
    let backColor = document.querySelector(".selected").style.backgroundColor // armazena a variavel da cor de fundo do elemento que foi criado
    evt.target.style.backgroundColor = backColor; // o evento target (o que foi cliclado receb a cor do selected)
  }
}

