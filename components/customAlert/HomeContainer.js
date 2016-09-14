import React, { Component } from 'react'
import {
   Alert,
   View
} from 'react-native'

export default class HomeContainer extends Component {

   constructor() {
      super();
   }
   componentDidMount = () => {
      Alert.alert(
         'Title',
         'Alert message...',
         [
            {text: 'Maybe', onPress: this.maybePressed},
            {text: 'No', onPress: this.noPressed, style: 'cancel'},
            {text: 'Yes', onPress: this.yesPressed},
         ]
      )
   }
   maybePressed = () => {
      alert('Maybe Pressed');
   }
   noPressed = () => {
      alert('No Pressed');
   }
   yesPressed = () => {
      alert('Yes Pressed');
   }

   render() {
      return (
         <View>

         </View>
      );
   }
}
