//1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos
document.getElementsByTagName("p")[1].innerText = "com o getElemenstByTagName seleciona a lista de elementos \n então é necessário definir o index da lista"    
//todos os p aqui irão formar uma lista (array) de elementos, por isso é necessário explicitar qual deles será direcionado

//2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
document.body.style.backgroundColor = "yellow"; //todo o body
document.getElementsByClassName("main-content")[0].style.backgroundColor = "green"; // para classe os elementos também formam uma lista (array) que deve ser selecionada por elementos

//3. Crie uma função que mude a cor do quadrado vermelho para branco.
document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";

//4. Crie uma função que corrija o texto da tag <h1>.
document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaEscripit";

//5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
document.querySelectorAll("p")[1].style.textTransform = "uppercase";

//  6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
document.querySelectorAll("p");
