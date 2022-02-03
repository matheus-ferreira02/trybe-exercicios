# Checklist do react-redux

_Antes de começar_

- [ ] pensar como será o _formato_ do seu estado global
- [ ] pensar quais actions serão necessárias na sua aplicação

_Instalação_

- [ ] npx create-react-app my-app-redux;
- [ ] npm install --save redux react-redux redux-devtools-extension;

_Criar dentro do diretório src:_

- [ ] diretório `store`

**Criar dentro do diretório `store`**

- [ ] arquivo `index.js`
- [ ] diretório `actions`
- [ ] diretório `reducers`

_Criar dentro do diretório `actions`:_

- [ ] arquivo `index.js`.

_Criar dentro do diretório `reducers`:_

- [ ] arquivo `index.js`.

_Criar dentro do arquivo `reducers/index.js`:_

- [ ] estado inicial
- [ ] criar função reducer com `switch` retornando apenas a opção `default`
- [ ] criar `rootReducer` usando o `combineReducers`
- [ ] exportar `rootReducer`

exemplo:

```js
const INITIAL_STATE = {};

const exampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({ exampleReducer });
```

_No arquivo store/index.js:_

- [ ] importar `rootReducer` e usá-lo na criação da `store`
- [ ] configurar o [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm)
- [ ] exportar a `store`

_No arquivo src/index.js:_

- [ ] importar a `store`
- [ ] definir o Provider, `<Provider store={ store }>`, para fornecer os estados a todos os componentes encapsulados em `<App />`.

_Na pasta actions:_

- [ ] criar e exportar os actionTypes, por exemplo: `const ADD_TO_CART = 'ADD_TO_CART';`
- [ ] criar e export os actions creators necessários

_Nos reducers:_

- [ ] criar os casos para cada action criada, retornando o devido estado atualizado

_Nos componentes que irão ler o estado:_

- [ ] criar a função `mapStateToProps`
- [ ] exportar usando o `connect`

_Nos componentes que irão modificar o estado:_

- [ ] criar a função `mapDispatchToProps`
- [ ] exportar usando o `connect`

```js
export default connect(mapStateToProps, mapDispatchToProps)(Component);
```