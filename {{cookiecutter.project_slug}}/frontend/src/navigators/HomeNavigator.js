import { createStackNavigator } from 'react-navigation';

import Home from '../containers/Home';


const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
});

export default HomeNavigator;
