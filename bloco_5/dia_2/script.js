//existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
//1 -Insert an element before the first child element,
let parentElement = document.getElementById("pai");// Get the parent element
let theFirstChild = parentElement.firstChild;// Get the parent's first child
let newElement = document.createElement("teste"); // Create a new element
pai.insertBefore(newElement, theFirstChild);
