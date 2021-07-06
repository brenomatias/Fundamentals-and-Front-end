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
    let ol = document.getElementById("lista-tarefas");
    let li = document.createElement("li");
    li.classList.add("taskItem");
    li.id = "task-item"
    li.innerText = text;
    ol.appendChild(li)
    document.getElementById("myForm").reset(); // https://www.w3schools.com/Jsref/met_form_reset.asp
}
buttonInput.addEventListener ("click", addAnother);

// Quesito 7 // referencia https://github.com/tryber/sd-012-project-todo-list/blob/duribeiro-todo-list/script.js



let ol = document.getElementById("lista-tarefas");
ol.addEventListener('click', selectItem); 

function selectItem(event){ 
let itemSelected = document.querySelector('.selected');
if (itemSelected !== null) {
        itemSelected.classList.remove('selected');
}
 event.target.classList.add('selected'); // note que o event está fora do if (passa pelo if primeiro a função)
paintTask();
}

// depois alterar cor de classe(.selected) no css)

//quesito 8 
// ja foi feito no 7

//Quesito 9

let completeOl = document.getElementById("lista-tarefas");
completeOl.addEventListener('dblclick', selectCompleted);

function selectCompleted (event){ 
let completedSelected = document.querySelector('.completed');
event.target.classList.add('completed');   
}

//Quesito 10

let clickClear = document.querySelector(".button-clear"); 
    let buttonClear = document.createElement("button");
    buttonClear.innerHTML = "Limpar tarefas";  
    clickClear.appendChild(buttonClear);
    buttonClear.id = "apaga-tudo";
    buttonClear.addEventListener("click", clearBox);
  
    function clearBox() {
        let allItemsList = document.querySelectorAll('td'); // seleciona todos elementos do estilo (elementos que vao disparar a função)
        for (let i = 0; i < allItemsList.length; i += 1) { // faz o loop por todos elementos de pixel 
              clear
            }
          }
          