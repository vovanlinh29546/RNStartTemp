import { Keyboard } from 'react-native';
import { StackActions } from '@react-navigation/native';
// import { CUSTOM_ALERT, CUSTOM_ALERT_MODAL, LOADING_PAGE } from '@src/constants/screenKeys';
// import { PropsAlert } from '@src/components/CustomPopupCommon';
// import { IError } from '@src/modules/base';
// import translate from '@src/localize';
// import { IAlertModalProps } from '@src/components/CustomAlertModal';

class NavigationActionsService {
  private static stackNavigation: any[] = [];
  static navigation: any;
  private static instance: NavigationActionsService;
  static initInstance(navigation: any): NavigationActionsService {
    if (!NavigationActionsService.instance) {
      NavigationActionsService.instance = new NavigationActionsService();
    }
    NavigationActionsService.navigation = navigation;
    NavigationActionsService.stackNavigation.push(navigation);
    return NavigationActionsService.instance;
  }

  public static openDrawer = () => NavigationActionsService.navigation.openDrawer();

  public static closeDrawer = () => NavigationActionsService.navigation.closeDrawer();

  public static push = (screenName: string, passProps = {}) => {
    console.log('screenName', screenName)
    NavigationActionsService.navigation.push(screenName, passProps);
  };

  public static navigate = (screenName: string, passProps = {}) => {
    NavigationActionsService.navigation.navigate(screenName, passProps);
  };

  public static setRoot = (screenName: string, passProps = {}) => {
    NavigationActionsService.navigation.dispatch(StackActions.replace(screenName, passProps));
  };

  public static pop = () => {
    Keyboard.dismiss();
    NavigationActionsService.navigation.pop(1);
  };
  public static popTo = (screenPosition: number) => {
    Keyboard.dismiss();
    NavigationActionsService.navigation.pop(screenPosition);
  };

  public static popToRoot = () => {
    Keyboard.dismiss();
    NavigationActionsService.navigation.popToTop();
  };

  // public static showLoading = () => {
  //   NavigationActionsService.navigation.navigate(LOADING_PAGE);
  // };

  // public static showAlert = (propsAlert: PropsAlert) => {
  //   const { text, buttonBlackTitle, description, onPressBlackButton, onPressGrayButton, buttonGrayTitle } = propsAlert;
  //   NavigationActionsService.navigation.navigate(CUSTOM_ALERT, {
  //     text,
  //     description,
  //     buttonBlackTitle,
  //     onPressBlackButton,
  //     onPressGrayButton,
  //     buttonGrayTitle,
  //   });
  // };

  // public static hideAlert = () => {
  //   const { index, routes } = NavigationActionsService.navigation.dangerouslyGetState();
  //   const currentRoute = routes[index].name;
  //   if (currentRoute === CUSTOM_ALERT) {
  //     NavigationActionsService.pop();
  //   }
  // };

  // public static showAlertModal = (propsAlert: IAlertModalProps) => {
  //   NavigationActionsService.navigation.navigate(CUSTOM_ALERT_MODAL, propsAlert);
  // };

  // public static hideAlertModal = () => {
  //   const { index, routes } = NavigationActionsService.navigation.dangerouslyGetState();
  //   const currentRoute = routes[index].name;
  //   if (currentRoute === CUSTOM_ALERT_MODAL) {
  //     NavigationActionsService.pop();
  //   }
  // };

  // public static hideLoading = () => {
  //   const { index, routes } = NavigationActionsService.navigation.dangerouslyGetState();
  //   const currentRoute = routes[index].name;
  //   if (currentRoute === LOADING_PAGE) {
  //     NavigationActionsService.pop();
  //   }
  // };

  public static destroyScreen = () => {
    NavigationActionsService.stackNavigation.pop();
    const maximumStackLength = NavigationActionsService.stackNavigation.length;
    NavigationActionsService.navigation = NavigationActionsService.stackNavigation[maximumStackLength - 1];
  };

  // public static showErrorPopup = (error?: IError) => {
  //   if (error) {
  //     const text = error.message ?? translate('alert.message_error_default');
  //     NavigationActionsService.showAlert({ description: text });
  //   }
  // };
}

export default NavigationActionsService;
