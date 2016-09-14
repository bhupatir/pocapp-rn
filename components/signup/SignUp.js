/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Actions = require('react-native-router-flux').Actions;
var Login = require('./Login');
var Dialog = require('./Dialog');
var { Icon, } = require('react-native-icons');
var DB = require('../db.js');
var Config = require('./Config');
// DB Emitter Initialized

var DBEvents = require('react-native-db-models').DBEvents

var {
    AsyncStorage,
    StyleSheet,
    View,
    Text,
    Component,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS,
    AppRegistry
    } = React;


    // Only "all" event emitter is available

    DBEvents.on("all", function(){
      //alert("Database changed");
    })



var STORAGE_KEY = 'Users:key';

var SignUp = React.createClass({

  getDefaultProps: function () {
      return {
        date: new Date(),
      };
    },

    getInitialState: function() {
      return {
        isLoading: false,
        errorMessage: '',
        messages:[],
        users:[]
      };
    },

    componentDidMount:function() {
        //this._loadInitialState().done();
      },

      get_users:function(){
          DB.users.get_all(function(result){
              alert(JSON.stringify(result));
          })
      },

    render() {
        return (
            <View style={styles.container}>
            <Text>Register page</Text>
            <Text onPress={Actions.pop}>Back</Text>
                <View>

                    <TextInput
                      style={styles.textInput}
                      onChange={this.usernameInput.bind(this)}
                      value={this.state.username}
                      autoCorrect={false}
                      placeholder={'Username'}
                      clearButtonMode={'while-editing'}
                    />
                </View>
                <TouchableHighlight style={styles.button} underlayColor='#f1c40f' onPress={this.register.bind(this)}><Text style={styles.buttonText}>Done</Text></TouchableHighlight>
                <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
            </View>
        );
    },

    usernameInput:function(event) {
        this.setState({ username: event.nativeEvent.text });
    },

    register:function(){
      //alert(this.state.username);
      if(this.state.username != '' && this.state.username != undefined)
      {
        var url = Config.API_URL+'post-register-user?userName='+this.state.username;
        //alert(url);
        fetch(url,{method:"POST"})
        .then((response) => response.json())
        .then((responseData) => {
          alert(responseData);
          if (responseData.Status == 'Success') {
            //AsyncStorage.setItem('apiKey', responseData.apiKey);
            AsyncStorage.setItem('userId', responseData.user.userId.toString());
            //AsyncStorage.setItem('userData', JSON.stringify(responseData.user));
            //AsyncStorage.setItem('marketplaceId', responseData.mpId.toString());
            this._navigateUser(responseData.user);
          }
          else {
            Dialog(responseData.Status + '-' +responseData.Message);
          }
        })
        .catch((error) => {
          Dialog(''+error+'');
        })
        .done();
      }
      else{
        Dialog('username is required');
      }

    },

    register2:function() {
      var user;
      var checkuserdata = {username: this.state.username};
      var userdata = {username: this.state.username,password:'pwd'};
      DB.users.get(checkuserdata, function(results){

        user = results;
        //alert(JSON.stringify(results));
        if(user.length > 0){
          //Actions.home(this);
          alert('user already exists');
        }
        else{
          //alert(userdata);
          DB.users.add(userdata, function(added_data){
            //alert(JSON.stringify(added_data));
          });
          Actions.login(this);
        }

      });

    },
  });


  var styles = StyleSheet.create({
      container: {
          marginTop: 15,
          padding: 10
      },
      button: {
          height: 36,
          backgroundColor: '#0080FF',
          borderRadius: 0,
          justifyContent: 'center',
          marginRight: 20,
          marginLeft: 20,
          marginTop: 15
      },
      buttonText: {
          fontSize: 18,
          color: 'white',
          alignSelf: 'center'
      },
      instructions: {
          fontSize: 18,
          alignSelf: 'center',
          marginBottom: 15
      },
      fieldLabel: {
          fontSize: 15,
          marginTop: 15
      },
      textInput: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        paddingRight: 10,
        paddingLeft: 10,
      },
      errorMessage: {
          fontSize: 15,
          alignSelf: 'center',
          marginTop: 15,
          color: 'red'
      }
  });

module.exports = SignUp;
