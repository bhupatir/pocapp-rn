import React, { Component } from 'react';
import PickerExample from './PickerExample';

export default class HomeContainer extends Component {

   constructor() {
      super();
      this.state = {language: ''};
   }
   updateLanguage = (lang) => {
      this.setState({language: lang});
   }

   render() {
      return (
         <PickerExample
            language = {this.state.language}
            updateLanguage = {this.updateLanguage}
         />
      );
   }
}
