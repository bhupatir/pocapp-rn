import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import ActivityIndicatorExample from './ActivityIndicatorExample'

export default class HomeContainer extends Component {

   constructor() {
      super();
      this.state = {animating: true};
   }
   closeActivityIndicator() {
      setTimeout(() => {
         this.setState({animating: false});
      }, 3000);
   }
   componentDidMount() {
      this.closeActivityIndicator();
   }

   render() {
      return (
         <ActivityIndicatorExample
            animating = {this.state.animating}/>
      );
   }
}
