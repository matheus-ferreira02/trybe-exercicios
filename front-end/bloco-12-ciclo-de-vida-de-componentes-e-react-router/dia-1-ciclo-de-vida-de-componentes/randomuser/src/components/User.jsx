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

  async fetchApi() {
    try{
      const url = 'https://api.randomuser.me/';
      const request = await fetch(url);
      const dataJson = await request.json();
      const results = await dataJson.results;
      this.setState({ api: results[0], loading: false })
    } catch (error) {
      console.log(error);
    }    
  }

  componentDidMount() {
    this.fetchApi();
  }

  render() {
    const { loading, api } = this.state;

    return (
      <div>
        { loading ? 'loading...' : <p>{ api.gender }</p>}
      </div>
    )
  }
}
