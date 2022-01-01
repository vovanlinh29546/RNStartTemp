import { AppState, AppStateStatus, ViewStyle, View, ImageBackground, StatusBar, StatusBarStyle } from 'react-native';
import React, { useEffect } from 'react';
//import { changeAppState } from '@modules/appState/actions';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { selectState } from '@src/redux/reducers';
import StatusBarAlert from 'react-native-statusbar-alert';
import { INetworkStatus } from '@src/modules/network';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';
import { colors } from '@src/contants/vars';
import { changeAppState } from '@src/modules/appState/actions';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
  image?: any;
  useDarkLayout?: boolean;
  children?: any;
  hideStatusBar?: boolean;
  style?: ViewStyle;
  barStyle?: StatusBarStyle;
  networkStatus?: INetworkStatus;
}

const Container = (props: Props) => {
  const { children, style, image = undefined, hideStatusBar = false, barStyle = 'light-content', useDarkLayout = false } = props;
  const dispatch = useDispatch();
  const isConnected = selectState(state => state.networkStatus.isConnected);

  const handleAppStateChange = (nextAppState: AppStateStatus) => {
    dispatch(changeAppState({ appState: nextAppState }));
  };

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
  }, []);

  return image ? (
    <ImageBackground resizeMode="stretch" source={image} style={[{ flex: 1 }, styles.container]}>
      {<StatusBar barStyle={barStyle} hidden={hideStatusBar} />}
      {useDarkLayout && <View style={styles.darkLayout} />}
      {children}
    </ImageBackground>
  ) : (
    <SafeAreaView
      edges={['top']}
      style={[styles.container, style] as ViewStyle}>
      <StatusBar backgroundColor={colors.BLACK} translucent={true} barStyle={barStyle} hidden={hideStatusBar} />
      {!isConnected && (
        <View
          style={{
            ...ifIphoneX(
              {
                height: getStatusBarHeight() / 2,
              },
              {
                height: 0,
              },
            ),
            backgroundColor: colors.RED,
          }}
        />
      )}
      <StatusBarAlert
        visible={!isConnected}
        backgroundColor={colors.RED}
        color="white"
        message={'Network unavailable'}
        pulse="background"
      />
      {children}
    </SafeAreaView>
  );
};

export default React.memo(Container);
