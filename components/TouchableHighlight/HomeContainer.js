import React, { Component } from 'react'
import TouchableHighlightExample from './TouchableHighlightExample'

export default class HomeContainer extends Component {

   constructor() {
      super();
   }
   buttonPressed = () => {
      console.log('TouchableHighlight pressed...');
   }
   render() {
      return (
         <TouchableHighlightExample buttonPressed = {this.buttonPressed}/>
      );
   }
}
