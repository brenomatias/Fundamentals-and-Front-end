// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let h1 = document.createElement("h1"); //create the h1 element
let textoH1 = document.createTextNode(" Exercício 5.2 - JavaScript DOM"); //create a text element
h1.appendChild(textoH1); //appnd the text node to the H1 element 
document.body.appendChild(h1); //append the h1 element to the document body

//2 - Adicione a tag div com a classe main-content como filho da tag body ;
let mainContent = document.createElement("div"); // cria element div para ser adicionado ao body
document.body.appendChild(mainContent); // adiciona ao body

