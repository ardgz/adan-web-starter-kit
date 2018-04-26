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
      <div>
        <h1>Home</h1>
        <h3>Starter Kit Homepage</h3>
      </div>
    )  
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);