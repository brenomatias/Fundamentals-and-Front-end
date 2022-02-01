# Checklist do react-redux

*Antes de começar*
- [ ] pensar como será o *formato* do seu estado global
- [ ] pensar quais actions serão necessárias na sua aplicação

*Instalação*
- [ ] npx create-react-app my-app-redux;
- [ ] npm install --save redux react-redux;
- [ ] npm install.

*Criar dentro do diretório src:*
- [ ] diretório redux

**Criar dentro do diretório redux**
- [ ] diretório actions;
- [ ] diretório reducers;
- [ ] diretório store.

*Criar dentro do diretório actions:*
- [ ] arquivo index.js.

*Criar dentro do diretório reducers:*
- [ ] arquivo index.js.
- [ ] criar a estrutura do reducer, como ainda não sabemos as actions necessárias, você pode apenas retornar o default do switch.
- [ ] configurar os exports do arquivo index.js usando o combineReducers

exemplo:

const initial_state = {
 meuEstado: '',
};

const reducer = (state = initial_state, action) => {
 switch(action.type) {
   default:
    return state;
 }
}

*No arquivo store/index.js:*
- [ ] importar o arquivo com o combineReducer e criar a store
- [ ] configurar o [Redux DevTools](https://github.com/reduxjs/redux-devtools)

*No arquivo App.js:*
- [ ] importar a store
- [ ] definir o Provider, `<Provider store={ store }>`, para fornecer os estados a todos os componentes encapsulados em `<App />`.

*Na pasta actions:*
- [ ] criar os actionTypes, por exemplo: `const ADD_TO_CART = 'ADD_TO_CART';`
- [ ] criar os actions creators necessários

*Nos componentes:*
- [ ] criar a função mapStateToProps
- [ ] criar a função mapDispatchToProps
- [ ] importar e usar o connect