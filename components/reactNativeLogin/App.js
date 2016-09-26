'use strict';

import React, {StyleSheet, View, WebView, Component} from 'react-native';
import CookieManager from 'react-native-cookies';
import LoggedIn from './LoggedIn'


const LOGIN_URL = "http://localhost:3000/login/";
const HOME_URL = "http://localhost:3000/";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

export default class ReactNativeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loadedCookie: false
    };
  }

  componentWillMount () {
    CookieManager.get(HOME_URL, (cookie) => {
      let isAuthenticated;

      if (cookie && cookie.indexOf('remember_me') != -1) {
        isAuthenticated = true;
      }
      else {
        isAuthenticated = false;
      }

      this.setState({
        loggedIn: isAuthenticated,
        loadedCookie: true
      });
    });
  }

  onNavigationStateChange (navState) {

    if (navState.url == HOME_URL) {
      this.setState({
        loggedIn: true,
      });
    }
  }

  render () {

    if (this.state.loadedCookie) {
      if (this.state.loggedIn) {
        return (
          <LoggedIn/>
        );
      }
      else {
        return (
          <View style={[styles.container]}>
            <WebView
              ref={'webview'}
              automaticallyAdjustContentInsets={false}
              style={styles.webView}
              source={{uri: LOGIN_URL}}
              javaScriptEnabled={true}
              onNavigationStateChange={this.onNavigationStateChange.bind(this)}
              startInLoadingState={true}
              scalesPageToFit={true}
            />
          </View>
        );
      }
    }
    else {
      return (
        <View></View>
      );
    }
  }
}
