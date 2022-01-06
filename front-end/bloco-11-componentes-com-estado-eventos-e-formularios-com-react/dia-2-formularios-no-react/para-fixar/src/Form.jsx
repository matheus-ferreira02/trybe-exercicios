import React, { Component } from 'react';
import InputName from './InputName';
import InputAge from './InputAge';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      age: 0,
      favoriteLanguage: '',
      description: '',
      file: '',
      terms: false,
      formularioComErros: true,
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => { this.handleErrors(); });
  }

  handleErrors() {
    const { name, age, favoriteLanguage, description, file, terms } = this.state;

    const errorCases = [
      !name.length,
      !age > 0,
      !favoriteLanguage.length,
      !description.length,
      !file,
      !terms,
    ]

    const formularioPreenchido = errorCases.every(error => error !== true);
    console.log(formularioPreenchido)
    this.setState({ formularioComErros: !formularioPreenchido});
    console.log(this.state.formularioComErros)
  }

  render() {
    const { formularioComErros } = this.state;

    return (
      <section>
        <h1>Formulário</h1>
        <form>
          <InputName value={ this.state.name } handleChange={ this.handleChange }/>

          <InputAge value={ this.state.age } handleChange={ this.handleChange } />       

          <label>
            Linguagem favorita
            <select
              name="favoriteLanguage"
              onChange={ this.handleChange }
            >
              <option value={ this.state.favoriteLanguage}>--</option>
              <option value="React">React</option>
              <option value="C#">C#</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
            </select>
          </label>

          <fieldset>
            <legend>Descrição da linguagem</legend>
            <label>
              Descreva por que a linguagem escolhida acima é sua favorita
              <textarea
                name="description"
                onChange={ this.handleChange }
                value={ this.state.description }
              />
            </label>
          </fieldset>

          <label>
            Arquivo
            <input
              type="file"
              name="file"
              onChange={ this.handleChange }
              value={ this.state.file }
            />
          </label>

          <label>
            Aceito os Termos
            <input
              name='terms'
              type="checkbox"
              onChange={ this.handleChange }
              value={ this.state.terms }
            />
          </label>
          { formularioComErros
            ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
            : <span style={ { color: 'green' } }>Todos os campos foram preenchidos</span>
          }
        </form>
      </section>
    )
  }
}

export default Form;
