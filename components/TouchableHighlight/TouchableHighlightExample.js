import React, { Component } from 'react'
import {
   View,
   TouchableHighlight,
   Text,
   StyleSheet
} from 'react-native'

export default TouchableHighlightExample = (props) => {
   return (
      <View style = {styles.container}>
         <TouchableHighlight underlayColor = {'red'} onPress = {props.buttonPressed}>
            <Text style = {styles.button}>
               Button
            </Text>
         </TouchableHighlight>
      </View>
   )
}

const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  button: {
      borderWidth: 1,
      padding: 25,
      borderColor: 'black'
  }
})
