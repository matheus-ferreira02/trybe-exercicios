import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      dogData: '',
      render: true,
    }
  }

  fetchDog = () => {
    this.setState({ loading: true }, async () => {
      const url = 'https://dog.ceo/api/breeds/image/random';
      const request = await fetch(url);
      const dogData = await request.json();
      this.setState({ dogData, loading: false })
    })
  }

  componentDidUpdate(__prevProps, prevState) {
    if(prevState.dogData.message.includes('terrier'))
    console.log(prevState)
  }

  componentDidMount() {
    this.fetchDog();
  }

  componentWillUnmount(__prevProps, prevState) {
    console.log(prevState.dogData.message)
  }

  shouldComponentUpdate(__nextProps, nextState) {
    const { dogData } = nextState;
    let render = true;
    if (dogData.length !== 0) {
      render = !dogData.message.includes('terrier')
    }

    return render;
  }

  showDog = () => {
    const { dogData } = this.state;
    return (
      <div>
        <img src={ dogData.message } alt="Imagem do cão"/>
        <button type="button" onClick={ this.fetchDog }>Pŕoximo cachorro</button>
      </div>
    )
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="App">
       { loading ? 'Loading...' : this.showDog() }
      </div>
  );
}}

export default App;
