import React, {Component} from 'react';
import {
  View,
  AppRegistry,
} from 'react-native';
import Tweet4 from 'Twitter/src/samples/Tweet4';
import User from 'Twitter/src/samples/User';

import AppRoot from 'Twitter/src/containers/AppRoot';

class Twitter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <User />
        <Tweet4 />
      </View>
    );
  }
}

AppRegistry.registerComponent('Twitter', () => Twitter);
