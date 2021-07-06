// Requisito 3

let input = document.querySelector(".input-task"); // seleciona o local de append child 
let inputResize= document.createElement("input");
inputResize.type = "text";
input.id = "texto-tarefa";
input.appendChild(inputResize);

// Requisito 4

let task = document.querySelector(".task-list"); // seleciona o local de append child 
let taskList= document.createElement("ol");
task.id = "texto-tarefa";
task.appendChild(taskList);