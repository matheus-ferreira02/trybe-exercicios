import React, { Component } from 'react';

class InputAge extends Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label>
        Idade
        <input
          type="number"
          name="age"
          onChange={ handleChange }
          value={ value }
        />
      </label>
    )
  }
}

export default InputAge;
