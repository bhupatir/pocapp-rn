import React, { Component } from 'react'
import {
   View,
   LayoutAnimation
} from 'react-native'
import MyPresentationalComponent from './MyPresentationalComponent'

export default class MyContainerComponent extends Component {
   constructor() {
      super()
      this.state = {
         myStyle: {
            height: 100,
            backgroundColor: 'red'
         }
      }
   }
   expandElement = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({
         myStyle: {
            height: 400,
            backgroundColor: 'red'
         }
      })
   }
   collapseElement = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
         myStyle: {
            height: 100,
            backgroundColor: 'red'
         }
      })
   }
   render() {
      return (
         <View>
            <MyPresentationalComponent
               myStyle = {this.state.myStyle}
               expandElement = {this.expandElement}
               collapseElement = {this.collapseElement}
            />
         </View>
      )
   }
}
