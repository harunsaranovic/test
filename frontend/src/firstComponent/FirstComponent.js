import React from 'react';
class FirstComponent extends React.Component {
    render() {
      return (
        <button className="square" onClick={function() { alert('click'); }}>
          {this.props.value}
        </button>
      );
    }
  }