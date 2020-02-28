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
      input: 'Push to Master'
    };

    this.change = this.change.bind(this);
  }

  change(event) {
    this.setState({input: event.target.value});
    //var x = event.target.value * 2;
    //this.setState({input: x});
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <div>
        <input type="text" className="input" 
        value={this.state.input} 
        onChange = {this.change}
        />
        <h1>{this.state.input}</h1>
      </div>
    );
  }
}

export default App;
