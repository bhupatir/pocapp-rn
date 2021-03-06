import React, { Component } from 'react'
import {
   View,
   TouchableOpacity,
   Text,
   StyleSheet
} from 'react-native'

export default TouchableOpacityExample = (props) => {
   return (
      <View style = {styles.container}>
         <TouchableOpacity>
            <Text style = {styles.button}>
               Button
            </Text>
         </TouchableOpacity>
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
