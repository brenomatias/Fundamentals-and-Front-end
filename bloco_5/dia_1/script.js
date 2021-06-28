//1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos
document.getElementsByTagName("p")[1].innerText = "com o getElemenstByTagName seleciona a lista de elementos \n então é necessário definir o index da lista"    
//todos os p aqui irão formar uma lista (array) de elementos, por isso é necessário explicitar qual deles será direcionado

//2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
document.body.style.backgroundColor = "yellow"; //todo o body
document.getElementsByClassName("main-content")[0].style.backgroundColor = "green"; // para classe os elementos também formam uma lista (array) que deve ser selecionada por elementos



