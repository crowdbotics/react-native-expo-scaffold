import { createStackNavigator } from 'react-navigation';

import Login from '../containers/Login';
import Signup from '../containers/Signup';


const AuthNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: null,
    },
  },
});

export default AuthNavigator;
