import React, { Component } from 'react';

class InputName extends Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label>
        Nome:
        <input
          type="text"
          name="name"
          onChange={ handleChange }
          value={ value }
        />

        { value.length < 1 ? ' -Campo vazio- ' : ' -Ok- '}
      </label>
    )
  }
}

export default InputName;
