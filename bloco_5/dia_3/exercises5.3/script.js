
  function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();


//Exercício 1:

const numberDay = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  function createNumbersOfTheWeek() {
   
    const numberDayList = document.querySelector('#days');
  
    for (let i = 0; i < numberDay.length; i += 1) {
      days.classList.add("day"); // adiciona a classe day 
      const numbers = numberDay[i];
      const numbersListItem = document.createElement('li'); // cria os elementos de lista 'li'
      numbersListItem.setAttribute("id", "daysId");
      numbersListItem.innerHTML = numbers;
      numberDayList.appendChild(numbersListItem);
    

      if (numberDay[i] === 25) { // adiciona as duas classes ao dia 25 https://www.codegrepper.com/code-examples/javascript/how+to+add+two+classes+in+javascript
          numbersListItem.classList.add("holiday", "friday")
      }  else if (numberDay[i] === 24 || numberDay[i] === 31 ){ // adiciona a classe holiday * note que o if está dentro do looping exterior pois pecorre toda a array;
        numbersListItem.classList.add("holiday")
    } else if (numberDay[i] === 4 || numberDay[i] === 11 || numberDay[i] === 18  ) {
        numbersListItem.className = "friday";
    }
    };
  };
  createNumbersOfTheWeek();
  
 // Exercício 2  // https://www.codegrepper.com/code-examples/javascript/append+button+to+div+javascript referencia


 function selectHoliday(Feriados){
 const myDiv = document.querySelector(".buttons-container");   // create the button object and add the text to it
 const button = document.createElement("button");
 button.innerHTML = "Feriados";  // add the button to the div
 myDiv.appendChild(button);
 button.setAttribute("id", "btn-holiday"); // set attribute https://www.w3schools.com/jsref/met_element_setattribute.asp
}

selectHoliday();

// Exercício 3  // referencia https://www.codegrepper.com/code-examples/javascript/javascript+change+color+for+class+name
let clickHoliday = document.getElementById("btn-holiday");
clickHoliday.addEventListener("click", changeHolidayColor);

function changeHolidayColor() {
	var holidays = document.getElementsByClassName('holiday'); 
	for(var i = 0; i < numberDay.length; i += 1){
		holidays[i].style.backgroundColor = "white";
	}
}


let reverseClickHoliday = document.getElementById("btn-holiday");
reverseClickHoliday.addEventListener("dblclick", reverseHoliday);

function reverseHoliday() {
	var holidays = document.getElementsByClassName('holiday'); 
	for(var i = 0; i < numberDay.length; i += 1){
		holidays[i].style.backgroundColor = "rgb(238,238,238)";
	}
}

// Exercício 4:

function selectFridays(Feriados){
    const fridaySelector = document.querySelector(".buttons-container");   // create the button object and add the text to it
    const fridayButton = document.createElement("button");
    fridayButton.innerHTML = "Sexta-feira";  
    fridaySelector.appendChild(fridayButton);
    fridayButton.setAttribute("id", "btn-friday"); // set attribute https://www.w3schools.com/jsref/met_element_setattribute.asp
   }
   
   selectFridays();

   // Exercício 5:
let clickFriday= document.getElementById("btn-friday");
clickFriday.addEventListener("click", changeFridayText);

function changeFridayText() {
	var fridays = document.getElementsByClassName('friday'); 
	for(var i = 0; i < numberDay.length; i += 1){
		fridays[i].innerText = "Sextou";
	}
}

// Exercício 6:

let mouseOver = document.getElementById("daysId")
mouseOver.addEventListener("mouseover", mouseEmCima);

function mouseEmCima (evento){

    evento.target.style.color = "red";
}