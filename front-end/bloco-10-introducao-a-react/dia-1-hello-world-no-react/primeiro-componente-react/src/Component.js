import React from 'react';

class Component extends React.Component {
  render() {
    const name = <h1>Matheus Ferreira</h1>
    const desc = <p>Tenho 19 anos, e moro em Itanhaém</p>
    const div = <div>{name} {desc}</div>

    return div
  }
}

export default Component;