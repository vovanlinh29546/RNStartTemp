import { ICON_HOME } from "@src/contants/icons";
import { colors } from "@src/contants/vars";
import React, { Props } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import styles from "./styles";

export const TabBg: React.FC<Props> = ({
  color = '#FFFFFF',
  ...props
}) => {
  return (
    <Svg
      width={75}
      height={85}
      viewBox="0 0 75 85"

      strokeWidth={0}
      {...props}
    >
      <Path
        d="M75.2 0v85H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={color}
        stroke={color}
      />
    </Svg>
  )
};
export const TabBarAdvancedButton: React.FC<Props> = ({
  bgColor,
  ...props
}) => (
  <View
    style={styles.container}
    pointerEvents="box-none"
  >
    <TabBg
      color={'white'}
      style={styles.background}
    />
    <TouchableOpacity
      accessibilityState={props.isFocused ? { selected: true } : {}}
      accessibilityLabel={props.tabBarAccessibilityLabel}
      style={[styles.button, props.isFocused && { backgroundColor: colors.MAIN_PURPLE }]}
      onPress={props.onPress}
    >
      <Image source={ICON_HOME} style={[styles.buttonIcon, props.isFocused && { tintColor: 'white' }]} />

    </TouchableOpacity>
  </View>
);