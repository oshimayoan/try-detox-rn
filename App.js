import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class App extends React.Component {
  state;

  constructor() {
    super(...arguments);
    this.state = {
      showJuang: false,
    };
  }

  render() {
    return (
      <View style={styles.container} testID="homepageTitle">
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          title="Juang Gob"
          onPress={() => this.setState({showJuang: true})}
          testID="juangFuck"
        />
        {this.state.showJuang ? (
          <Text testID="showJuang">Show Juang</Text>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
