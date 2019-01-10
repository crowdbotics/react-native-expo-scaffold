import { RootNavigator } from '../../navigators/AppNavigator';

const splashAction = RootNavigator.router.getActionForPathAndParams('Auth');
const splashState = RootNavigator.router.getStateForAction(splashAction);

const INITIAL_STATE = splashState;

const reducer = (state = INITIAL_STATE, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default reducer;
