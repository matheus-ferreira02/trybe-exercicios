import React, { Component } from 'react'

export default class User extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      api: '',
    }

    this.fetchApi = this.fetchApi.bind(this);
  }

  fetchApi() {
    this.setState({
      loading: true,
    }, async () => {
      try{
        const url = 'https://api.randomuser.me/';
        const request = await fetch(url);
        const dataJson = await request.json();
        const results = await dataJson.results;
        this.setState({ api: results[0], loading: false })
      } catch (error) {
        console.log(error);
      } 
    })     
  }

  componentDidMount() {
    this.fetchApi();
  }

  shouldComponentUpdate(__nextProps, nextState) {
    const { api } = nextState;
    const renderApi = api.length !== 0 && api.dob.age < 50;
    console.log(renderApi)

    return renderApi;
  }

  render() {
    const { loading, api } = this.state;
    const { picture, name, email, dob } = api;

    return (
      <div>
        { loading ? 'loading...'
          : <div>
              <img src={ picture.large } alt={ name.first }/>
              <p>{ name.first } { name.last } </p>
              <p>{ email }</p>
              <p>{ dob.age }</p>
            </div> }
      </div>
    )
  }
}
