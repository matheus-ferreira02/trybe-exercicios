import React from 'react';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <FirstComponent />
        <SecondComponent />
      </div>
    );
  }
}

export default App;