"use strict"
import React, { Component } from 'react';
//import Logger from './logger'
class Welcome extends Component {
  //logger

  constructor() {
	super()	
   // this.logger = Logger.getLogger()
   }
render () {
    const { text, toggle } = this.props;
   // this.logger.info({toggle} )
    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}
export default Welcome