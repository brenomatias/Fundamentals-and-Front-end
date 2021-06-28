//existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
//1 -Insert an element before the first child element,
let parentElement = document.getElementById("pai");// Get the parent element
let theFirstChild = parentElement.firstChild;// Get the parent's first child
let newElement = document.createElement("teste"); // Create a new element
pai.insertBefore(newElement, theFirstChild);

//2- Crie um filho para elementoOndeVoceEsta .
let elementoPai = document.getElementById("elementoOndeVoceEsta")
let newNode = document.createElement("P");
elementoPai.appendChild(newNode);
newNode.innerText = "Teste"