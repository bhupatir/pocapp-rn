import React, { Component } from 'react'
import { MapView } from 'react-native'
import MapViewExample from './MapViewExample'

export default class HomeContainer extends Component {

   constructor() {
      super();
   }
   render() {
      return (
         <MapViewExample/>
      );
   }
}
