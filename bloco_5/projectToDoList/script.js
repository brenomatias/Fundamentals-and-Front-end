// Requisito 3

let input = document.querySelector(".input-task"); // seleciona o local de append child 
let inputTask= document.createElement("input");
inputTask.type = "text";
inputTask.id = "texto-tarefa";
input.appendChild(inputTask);


// Requisito 4

let task = document.querySelector(".task-list"); // seleciona o local de append child 
let taskList= document.createElement("ol");
taskList.id = "lista-tarefas";
task.appendChild(taskList);

// Requisito 5

let button = document.querySelector(".button-input-task"); // seleciona o local de append child 
let buttonInput= document.createElement("button");
button.id = "criar-tarefa";
buttonInput.innerText = "Adicionar tarefa"
button.appendChild(buttonInput);


 function addAnother() {
    let text = inputTask.value;
    var ul = document.getElementById("lista-tarefas");
    var li = document.createElement("li");
    li.innerText = text;
    ul.appendChild(li)
    document.getElementById("myForm").reset(); // https://www.w3schools.com/Jsref/met_form_reset.asp
}

buttonInput.addEventListener ("click", addAnother);

