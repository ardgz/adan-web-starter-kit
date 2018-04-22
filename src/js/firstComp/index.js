import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Adan'
    };
  }

  render() {
    return(
      <div className="home">
        <h3>Testing</h3>
      </div>
    )  
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);

console.log('testingaa');