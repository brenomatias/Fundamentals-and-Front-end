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
buttonInput.addEventListener ("click", addAnotherTask);

 function addAnotherTask() {

    let text = inputTask.value; // define uma variável para armazenar p valor do input 
    if (text === ''){
      alert("Insira uma tarefa!")
    }
    let ol = document.getElementById("lista-tarefas");
    let li = document.createElement("li");
    li.classList.add("taskItem");
    li.id = "task-item"
    li.innerText = text;
    ol.appendChild(li)
    document.getElementById("myForm").reset(); // https://www.w3schools.com/Jsref/met_form_reset.asp
}

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

//Quesito 10 // referencia https://github.com/tryber/sd-012-project-todo-list/blob/julio-barros-todo-list/script.js

let clickClear = document.querySelector(".button-clear"); 
let buttonClear = document.createElement("button");
buttonClear.innerHTML = "Limpar tarefas";  
clickClear.appendChild(buttonClear);
buttonClear.id = "apaga-tudo";
buttonClear.addEventListener("click", clearBox);

function clearBox () { //https://github.com/tryber/sd-012-project-todo-list/blob/julio-barros-todo-list/script.js
let itemsToClear = document.getElementsByTagName('li'); // cria um array de elementos
let list = document.querySelector('#lista-tarefas'); // define o node da lista
    if (itemsToClear.length > 0) {
        while (list.firstChild) { // enquanto a lista tiver uma child o código será executado
          list.removeChild(list.firstChild);
        }
      } else {
        alert('A lista está vazia!');
      }
}
  
// Quesito 11 

let clickClearCompleted = document.querySelector(".button-clear-completed"); 
let buttonClearCompleted = document.createElement("button");
buttonClearCompleted.innerHTML = "Limpar tarefas completas";  
clickClearCompleted.appendChild(buttonClearCompleted);
buttonClearCompleted.id = "remover-finalizados";
buttonClearCompleted.addEventListener("click", clearBoxCompleted);

function clearBoxCompleted () { 
    let itemsCompletedToClear = document.getElementsByClassName('completed'); // cria array de items selecionados (com a classe 'completed')
    let listCompletedToClear = document.querySelector('#lista-tarefas'); // seleciona os elementos 
    if (itemsCompletedToClear.length > 0) {
        while (listCompletedToClear.firstChild) { // enquanto a lista tiver uma child o código será executado
            itemsCompletedToClear[0].parentNode.removeChild(itemsCompletedToClear[0]);
        }
      } else {
        alert('Você não possui tarefas completas!');
      }
}

// Quesito 12 referencia https://github.com/tryber/sd-012-project-todo-list/blob/luciano-lanes-lopes-project-todo-list/script.js

let clickSave = document.querySelector(".button-save"); 
let buttonSave = document.createElement("button");
buttonSave.innerHTML = "Salvar tarefas";  
clickSave.appendChild(buttonSave);
buttonSave.id = "salvar-tarefas";
buttonSave.addEventListener("click", saveTasks);

function saveTasks() { 
  let taskListSaveLocal = document.getElementById('lista-tarefas');
      localStorage.setItem('tasks', taskListSaveLocal.innerHTML);
  }  
function retrieveTasks() {
  let taskListSaveLocal = document.getElementById('lista-tarefas');
  taskListSaveLocal.innerHTML = localStorage.getItem('tasks');
}

window.onload = retrieveTasks(); // Execute a JavaScript immediately after a page has been loaded:

// Quesito 13 - primeiro precisamos selecionar o elemento -> com a classe selected

let clickUp = document.querySelector(".button-up"); 
let buttonUp = document.createElement("button");
buttonUp.innerHTML = "Mover para cima";  
clickUp.appendChild(buttonUp);
buttonUp.id = "mover-cima";
buttonUp.addEventListener("click", moveUp);

function moveUp (){ // referencia https://github.com/tryber/sd-012-project-todo-list/blob/caroline-benichio-todo-list/script.js
let ol = document.querySelector('#lista-tarefas');
    let taskUp = document.querySelector('.selected');
    if (ol.firstChild != taskUp && taskUp != null) { // The logical AND (&&) operator (logical conjunction) for a set of operands is true if and only if all of its operands are true
      ol.insertBefore(taskUp, taskUp.previousSibling); // insertBefore ---> https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
    } // != null é quando a classe é a selected (o item clicado)
  }

let clickDown = document.querySelector(".button-down"); // mover item está relacionado com a posição das childs nos nós
let buttonDown = document.createElement("button");
buttonDown.innerHTML = "Mover para baixo";  
clickDown.appendChild(buttonDown);
buttonDown.id = "mover-cima";
buttonDown.addEventListener("click", moveDown);

function moveDown () {
  let ol = document.querySelector('#lista-tarefas');
  let taskDown = document.querySelector('.selected');
  if (ol.lastChild != taskDown && taskDown != null) {
    ol.insertBefore(taskDown.nextSibling, taskDown);
  }
}

// Quesito 14