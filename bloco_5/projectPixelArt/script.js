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

// 4 - Adicione à página um quadro de pixels, com 25 pixels.

let table = document.querySelector('#pixel-board');
function pixelTable() {
  let rowsAndColumns = 5; // define o número de linhas e colunas 
  for (let i = 0; i < rowsAndColumns; i += 1) {
    let pixelsRow = document.createElement('tr'); // cria elemento de linha no pai
    table.appendChild(pixelsRow); // adiciona as linhas ao pai (pixel-board)
    for (let j = 0; j < rowsAndColumns; j += 1) { 
      let pixel = document.createElement('td'); // cria elemento de coluna 
      pixel.classList.add('pixel');
      pixelsRow.appendChild(pixel);  
    }
  }
}
pixelTable();

// desafio 6

let selectClass1 = document.getElementsByClassName("color")[0];
selectClass1.classList.add("selected");


// desafio 7 // referencia https://stackoverflow.com/questions/50883690/remove-class-from-one-element-while-adding-that-class-to-another-element-using

let colorsArray = document.querySelectorAll(".color"); // selector all cria uma array com todos elementos com a classe "color"

for (let i = 0; i < colorsArray.length; i += 1) { 
  colorsArray[i].addEventListener("click", addClassColors);
   function addClassColors(event) {
    clearClass(); // invoca a função de remoção
    event.target.classList.add("selected"); // seleciona o target (elemento clicado e adciona a classe "selected")
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
   function addColorPixel(event) {
    let backColor = document.querySelector(".selected").style.backgroundColor // armazena a variavel da cor de fundo do elemento que foi criado
    event.target.style.backgroundColor = backColor; // o evento target (o que foi cliclado receb a cor do selected)
  }
}

// deasfio 9

