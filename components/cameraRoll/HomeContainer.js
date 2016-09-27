import React, { Component } from 'react';
import {
   AppRegistry,
   StyleSheet,
   View
} from 'react-native';
import CameraExample from './CameraExample'

export default class HomeContainer extends Component {
   constructor(){
      super()
      this.state = {
         imagePath: ''
      }
   }
   takePicture = () => {
      camera.capture()
      .then((data) => this.setState({imagePath: data.path}))
      .catch(err => console.error(err));
   }
   render() {
      return (
         <CameraExample
            imagePath = {this.state.imagePath}
            takePicture = {this.takePicture}
         />
      );
   }
}
