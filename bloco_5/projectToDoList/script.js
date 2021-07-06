// Requisito 3

let input = document.querySelector(".input-task"); // seleciona o local de append child 
let inputResize= document.createElement("input");
inputResize.type = "text";
input.id = "texto-tarefa";
input.appendChild(inputResize);
