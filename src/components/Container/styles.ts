
import { colors, WIDTH } from '@src/contants/vars';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkLayout: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.75,
    backgroundColor: '#000000',
  },
  statusBarAlertContainer: {
    backgroundColor: 'red',
    width: WIDTH,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  statusBarAlert: {
    color: colors.WHITE,
    fontSize: 11,
    marginBottom: 1,
  },
});

export default styles;
