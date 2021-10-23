
import { colors, HEIGHT } from '@src/contants/vars';
import { StyleSheet } from 'react-native';

const heightContainer = HEIGHT * 0.095
const styles = StyleSheet.create({

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
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  iconImage: {
    tintColor: 'gray'
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
