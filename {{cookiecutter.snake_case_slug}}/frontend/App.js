{% raw %}
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import { AppNavigator } from './src/navigators/AppNavigator';
import store from './src/redux/store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
{% endraw %}
