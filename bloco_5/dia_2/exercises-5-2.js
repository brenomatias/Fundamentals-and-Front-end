// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let h1 = document.createElement("h1"); //create the h1 element
let textoH1 = document.createTextNode(" Exercício 5.2 - JavaScript DOM"); //create a text element
h1.appendChild(textoH1); //appnd the text node to the H1 element 
document.body.appendChild(h1); //append the h1 element to the document body

//2 - Adicione a tag div com a classe main-content como filho da tag body ;
let mainContent = document.createElement("div"); // cria element div para ser adicionado ao body
document.body.appendChild(mainContent); // adiciona ao body

// 3-Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let centerContent = document.createElement('div');
centerContent.classList.add('center-content'); //This property is useful to add, remove and toggle CSS classes on an element.
mainContent.appendChild(centerContent); // adciona na div que foi criada em cima (div = centerContent)
centerContent.innerText= "Exercício 3";
