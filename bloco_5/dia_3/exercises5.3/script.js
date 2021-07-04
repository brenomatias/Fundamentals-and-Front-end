
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


  function createNumbersOfTheWeek() {
    const numberDay = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    const numberDayList = document.querySelector('#days');
  
    for (let i = 0; i < numberDay.length; i += 1) {
      days.classList.add("day"); // adiciona a classe day 
      const numbers = numberDay[i];
      const numbersListItem = document.createElement('li'); // cria os elementos de lista 'li'
      numbersListItem.innerHTML = numbers;
      numberDayList.appendChild(numbersListItem);
    
      if (numberDay[i] === 24 || numberDay[i] === 25 || numberDay[i] === 31 ){ // adiciona a classe holiday * note que o if está dentro do looping exterior pois pecorre toda a array;
        numbersListItem.classList.add("holiday")
    } else if (numberDay[i] === 4 || numberDay[i] === 11 || numberDay[i] === 18 || numberDay[i] === 25 ) {
        numbersListItem.classList.add("friday")
    }
    };
  };
  createNumbersOfTheWeek();
  
 // Exercício 2  // https://www.codegrepper.com/code-examples/javascript/append+button+to+div+javascript referencia

 const myDiv = document.querySelector(".buttons-container"); 
 // create the button object and add the text to it
 const button = document.createElement("button");
 button.innerHTML = "Feriados";
 // add the button to the div
 myDiv.appendChild(button);
 button.setAttribute("id", "btn-holiday"); // set attribute https://www.w3schools.com/jsref/met_element_setattribute.asp

 const holidayClick = document.getElementById("btn-holiday");
 holidayClick.addEventListener("click", receberClick2);
 
 function receberClick2() {
    const numberDay ="feriado"
    const numberDayList = document.querySelector('#btn-holiday');
  
    for (let i = 0; i < numberDay.length; i += 1) {
      days.classList.add("day"); // adiciona a classe day 
      const numbers = numberDay[i];
      const numbersListItem = document.createElement('li'); // cria os elementos de lista 'li'
      numbersListItem.innerHTML = numbers;
      numberDayList.appendChild(numbersListItem);
    
      if (numberDay[i] === 24 || numberDay[i] === 25 || numberDay[i] === 31 ){ // adiciona a classe holiday * note que o if está dentro do looping exterior pois pecorre toda a array;
        numbersListItem.classList.add("holiday")
    }
    };
  };
