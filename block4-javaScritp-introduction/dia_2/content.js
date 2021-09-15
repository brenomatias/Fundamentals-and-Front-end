let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log(tasksList.length);

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa no fim
console.log(tasksList);

tasksList.unshift('Ficar de boa'); // adiciona mais uma tarefa no inicio
console.log(tasksList);

tasksList.pop();  // remove a última tarefa
console.log(tasksList);

tasksList.shift();
console.log(tasksList);  // remove a última tarefa remove ultimo 

let indexOfTask = tasksList.indexOf('Reunião'); //procurar o índice de um item no Array
console.log(indexOfTask);
