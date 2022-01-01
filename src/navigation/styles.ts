
import { colors, HEIGHT } from '@src/contants/vars';
import { StyleSheet } from 'react-native';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper';

const heightContainer = HEIGHT * 0.095
const styles = StyleSheet.create({
  containerBottomTab: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  containerActive: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
      colors.BLUE,
  },
  containerInactive: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: isIphoneX() ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  iconImage: {
    tintColor: 'gray',

  },
  container: {
    //  position: 'relative',
    width: 75,
    //   backgroundColor: 'red',
    alignItems: 'center'
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: 'white',
  },
  buttonIcon: {
    tintColor: 'gray'
  }
});

export default styles;
