import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import ModalExample from './ModalExample';

export default class HomeContainer extends Component {
   constructor() {
      super();
      this.state = {modalVisible: false};
   }
   openModal = () => {
      this.setState({modalVisible: true});
   }
   closeModal = () => {
      this.setState({modalVisible: false});
   }
   render() {
      return (
         <ModalExample = {this.state.modalVisible} openModal = {this.openModal}
            closeModal = {this.closeModal}/>
      );
   }
}
