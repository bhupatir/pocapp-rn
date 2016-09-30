var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SliderANDROID,
} = React;

class SliderExample extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      age: 0,
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Age: {this.state.age}
        </Text>
        <SliderANDROID
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          onValueChange={(age) => this.setState({age: age})} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
  slider: {
    width: 300,
  }
});

AppRegistry.registerComponent('SliderExample', () => SliderExample);
