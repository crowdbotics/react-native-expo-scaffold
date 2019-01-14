{% raw %}
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import { AppNavigator } from './src/navigators/AppNavigator';
import store from './src/redux/store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
{% endraw %}
