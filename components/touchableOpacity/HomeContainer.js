import React, { Component } from 'react'
import TouchableOpacityExample from './TouchableOpacityExample'

export default class HomeContainer extends Component {

   constructor() {
      super();
   }
   render() {
      return (
         <TouchableOpacityExample buttonPressed = {this.buttonPressed}/>
      );
   }
}
