/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Container from '@src/components/Container';
import { IAppDispatch, IAppState } from '@src/models/app';
import { changeConnectionStatus } from '@src/modules/network/actions';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import MainNavigation from '@src/navigation';
import store from '@src/redux/store';
import React from 'react';
import {
  AppState,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import connect from '@src/utils/connect';
import { RootState } from '@src/redux/reducers';
import { checkInternet } from '@src/utils/internet';



type Props = IAppState &
  IAppDispatch & {
    componentId: string;
    // addLocalNotification: typeof addLocalNotification;
    changeConnectionStatus: typeof changeConnectionStatus;
    navigation: any;
  };

const Stack = createNativeStackNavigator();
class App extends React.Component<Props, {}> {
  appState = AppState.currentState;
  componentDidMount() {
    NetInfo.fetch().then(state => {
      this.props.changeConnectionStatus({ isConnected: state.isConnected });
    });
    NetInfo.addEventListener(this.handleConnectionChange);

  }
  handleConnectionChange = (state: NetInfoState) => {
    if (state.isInternetReachable === null) return;
    this.props.changeConnectionStatus({ isConnected: state.isInternetReachable });
    checkInternet.setStatus(state.isInternetReachable);
  };
  render() {
    return (<Container>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainScreen" component={MainNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
    );
  }

};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
const AppContainer = connect({
  state: (state: RootState) => ({ ...state.app }),
  actions: {
    changeConnectionStatus,

  },
})(App);
const HocApp = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
export default (HocApp);
