import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(this)
    console.log('Clicou');
  }

  render() {
    console.log(this)
    return (
      <button onClick={this.handleClick}>Clique</button>
    );
  }
}

export default App;
