import React, { Component } from 'react';
import Logger from './logger'
class Welcome extends Component {
  logger

  constructor() {
	super()	
    this.logger = Logger.getLogger()
   }
async render () {
    const { text, toggle } = this.props;
    await  this.logger.info({toggle} )
    return (
      <h1 className="App-title">{text}</h1>
    )
  }
}
export default Welcome