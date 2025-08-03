import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      amount: '',
      currency: ''
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
    alert("Hello Student!");
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Currency Convertor!!!\nAmount: ${this.state.amount}\nCurrency: ${this.state.currency}`);
  };

  handleClick = (event) => {
    alert("Event: " + event.type + " was clicked");
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={() => this.sayWelcome("welcome")}>Say Welcome</button>
        <button onClick={this.handleClick}>Click on me</button>

        <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Amount: </label>
          <input type="text" name="amount" onChange={this.handleChange} /><br /><br />
          <label>Currency: </label>
          <input type="text" name="currency" onChange={this.handleChange} /><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;