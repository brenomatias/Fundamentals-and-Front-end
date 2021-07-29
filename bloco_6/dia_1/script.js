const button = document.querySelector("#buttonSubmit");
let inputName = document.querySelector("#name");
const nameUser = document.querySelector("#nameUser");

const errorDiv = document.querySelector("#error");
if (inputName === null){
   errorDiv.innerHTML = "error"
}

function getUserValues (event) {
event.preventDefault();
console.log(inputName.value);
nameUser.innerHTML = inputName.value
} 


button.addEventListener('click', getUserValues);

