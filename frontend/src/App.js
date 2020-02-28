import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-headers">
        <Square></Square>
      </header>
    </div>
  );
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Test',
      input: 'input value'
    };
  }

  change(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <div>
        <input type="text" className="input" 
        value={this.state.input} 
        onChange = {this.change}
        />
      </div>
    );
  }
}

export default App;
