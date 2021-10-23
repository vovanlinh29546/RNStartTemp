import { ICON_CHAT, ICON_HOME, ICON_PROFILE, ICON_SETTING } from "@src/contants/icons";
import { ALERT_SCREEN, HOME_SCREEN, PROFILE_SCREEN, SEARCH_SCREEN } from "@src/contants/screenKeys";
import { colors } from "@src/contants/vars";
import Chat from "@src/screens/Chat";
import Home from "@src/screens/Home";
import Profile from "@src/screens/Profile";
import Setting from "@src/screens/Setting";


export const BottomTab = [
  {
    title: HOME_SCREEN,
    component: Home,
    iconTab: ICON_HOME,
    colorTitle: colors.MAIN_PURPLE
  },
  {
    title: SEARCH_SCREEN,
    component: Setting,
    iconTab: ICON_PROFILE,
    colorTitle: colors.MAIN_PURPLE
  },
  {
    title: 'svgbutton',
    component: Setting,
    iconTab: ICON_PROFILE,
    colorTitle: colors.MAIN_PURPLE
  },
  {
    title: ALERT_SCREEN,
    component: Chat,
    iconTab: ICON_CHAT,
    colorTitle: colors.MAIN_PURPLE
  },
  {
    title: PROFILE_SCREEN,
    component: Profile,
    iconTab: ICON_SETTING,
    colorTitle: colors.MAIN_PURPLE
  },
];