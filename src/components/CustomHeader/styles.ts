
import { colors, PADDING } from '@src/contants/vars';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: colors.MAIN_PURPLE
  },
  leftContainer: {
    marginLeft: PADDING,
    flex: 2,
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginRight: PADDING
  },
  mainContainer: {
    flex: 8,
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    marginRight: 15
  },
  textTile:
  {
    color: 'white',
    fontSize: 24,
  }
});

export default styles;
