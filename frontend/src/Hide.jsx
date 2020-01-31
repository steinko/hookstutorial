"use strict"
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'


class Hide extends Component {
    logger
   constructor(props) {
      super()
      
      console.log('constructor')
   }

   

   componentDidMount() {   
      console.log('componentDidMount')
   }

   componentWillUnMount () {  
       console.log('componentWillUnMount')
    }

  componentDidCatch() { 
    console.log('componentDidCatch')
   }



  componentDidUpdate() { 
    console.log('componentDidUpdate')
   }

  



  state = {
    toggle: true
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    console.log('redner')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to Using Props" toggle={this.state.toggle} />
        </header>
        this.logger.info('render')
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.toggle &&
          <p>This should show and hide</p>
        }
        <button onClick={this.toggle}>Show / Hide</button>
      </div>
    );
  }
}

export default Hide;