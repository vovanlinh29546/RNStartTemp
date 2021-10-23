
import { StyleSheet } from "react-native";
import { colors, WIDTH_RATIO } from "../../contants/vars";

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 5 * WIDTH_RATIO,
    flex: 1,
    alignItems: 'center'
  },
  headerText: {
    textAlign: 'left',
    fontSize: 24,
    marginRight: 10,
    color: colors.MAIN_PURPLE,
  },
  styleIcon: {
    tintColor: colors.MAIN_PURPLE,
    alignSelf: 'center',
  },
  spaceBottom:
    { marginBottom: 15 * WIDTH_RATIO },
  Image: {

  }

});
export default styles
