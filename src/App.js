import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        welcome
        <Counter/>
      </div>
    );
  }  
}

class Counter extends React.Component{
  constructor(){
    super()
    this.state={count:0}
  }
  increace=()=>{
    this.setState({count:this.state.count+1})
  }
  decreace=()=>{
    this.setState({count:this.state.count-1})
  }
  render(){
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.increace}>Increace</button>
        <button onClick={this.decreace}>decreace</button>
      </div>
      );
  }  


}

export default App;
