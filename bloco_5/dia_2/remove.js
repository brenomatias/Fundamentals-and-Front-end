// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let h1 = document.createElement('h1'); //create the h1 element
let textoH1 = document.createTextNode(' Exercício 5.2 - JavaScript DOM'); //create a text element
h1.appendChild(textoH1); //appnd the text node to the H1 element 
document.body.appendChild(h1); //append the h1 element to the document body

//2 - Adicione a tag div com a classe main-content como filho da tag body ;
let mainContent = document.createElement('div'); // cria element div para ser adicionado ao body
mainContent.classList.add('main-content');
document.body.appendChild(mainContent); // adiciona ao body

// 3-Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let centerContent = document.createElement('div');
centerContent.classList.add('center-content'); //This property is useful to add, remove and toggle CSS classes on an element.
mainContent.appendChild(centerContent); // adciona na div que foi criada em cima (div = centerContent)
centerContent.innerText= 'Exercício 3';

// 4- Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let paragraph = document.createElement('p'); 
paragraph.innerText = ' Algum texto'
document.querySelector('.center-content').appendChild(paragraph);

// 5 -Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let leftContent = document.createElement('div'); 
leftContent.classList.add('left-content');
document.querySelector('.main-content').appendChild(leftContent);
leftContent.innerText = 'Left content';

// 6 -Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let rightContent = document.createElement('div'); 
rightContent.classList.add('right-content');
document.querySelector('.main-content').appendChild(rightContent);
rightContent.innerText = 'Right content';

// 7 -Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let imageContent = document.createElement('img'); 
imageContent.classList.add('small-image');
imageContent.src = 'https://picsum.photos/200';
document.querySelector('.left-content').appendChild(imageContent);

// 8 -Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let list = document.createElement('ul');
list.classList.add('list');
let n1 = document.createElement('li'); // cria elemento da linha
let text1 = document.createTextNode("um"); // cria o texto da linha um node de texto
n1.appendChild(text1);   // da pra usar um loop aqui com certeza!
list.appendChild(n1);
document.querySelector('.right-content').appendChild(list);

// 9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
for (let i = 0; i < 3; i += 1){ // loop para criar os elementos h3
let h3 = document.createElement('h3');
document.querySelector('.main-content').appendChild(h3);
h3.classList.add('description')
}

// 10 -Adicione a classe title na tag h1 criada;
h1.classList.add('title');

// 11 - Adicione a classe description nas 3 tags h3 criadas;
// adicionado no for loop
