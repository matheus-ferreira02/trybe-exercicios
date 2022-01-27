import React, { Component } from 'react'

export default class Dog extends Component {
  render() {
    const { dogData, fetchDog } = this.props;
    return (
      <div>
        <img src={ dogData.message } alt="Imagem do cão"/>
        <button type="button" onClick={ this.fetchDog }>Pŕoximo cachorro</button>
      </div>
    )
  }
}
