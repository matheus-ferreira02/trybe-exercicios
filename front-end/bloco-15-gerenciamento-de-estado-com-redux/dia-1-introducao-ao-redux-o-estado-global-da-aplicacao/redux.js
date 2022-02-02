const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const nextColor = () => ({
  type: "NEXT_COLOR",
});

const prevsColor = () => ({
  type: "PREVIOUS_COLOR",
});

const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case "NEXT_COLOR":
      return {
        ...state,
        index: state.index + 1,
      };

    case "PREVIOUS_COLOR":
      return {
        ...state,
        index: state.index - 1,
      }
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

const value = document.querySelector('#value');

attBackground = (colors, index) => {
  const container = document.querySelector('#container');
  container.style.backgroundColor = colors[index];
}

const attPage = (colors, index) => {
  value.innerText = colors[index];
}

const nextBtn = document.querySelector('#next');
const previousBtn = document.querySelector('#previous');
previousBtn.disabled = 'true';

nextBtn.addEventListener('click', () => {
  store.dispatch(nextColor());

  if (store.getState().colors.length === store.getState().index + 1) {
    nextBtn.disabled = 'true';
  }

  previousBtn.removeAttribute('disabled')
});

previousBtn.addEventListener('click', () => {
  store.dispatch(prevsColor());
  if (store.getState().index === 0) {
    previousBtn.disabled = 'true';
  }

  nextBtn.removeAttribute('disabled');
});

store.subscribe(() => {
  const colors = store.getState().colors;
  const index = store.getState().index;
  attPage(colors, index);
  attBackground(colors, index);
})
