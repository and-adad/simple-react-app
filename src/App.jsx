import { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
    
      <div className="container">
        <div className="header">React Todo Application</div>
        <div className="btn">+</div>
        <input type='text' ref={((input) => {this.textInput = input})}></input>
      </div>
    )
  }

}

export default App
