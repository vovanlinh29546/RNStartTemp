import { View, StyleProp, TextStyle, ImageSourcePropType, ImageStyle, ViewStyle, Keyboard, Platform, StatusBar, Animated, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { CustomText } from '../CustomText';
import { CustomTouchable } from '../CustomTouchable';
import { HEIGHT } from '@src/contants/vars';


export interface Props {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  customComponent?: JSX.Element;
  leftComponent?: JSX.Element;
  leftText?: string;
  leftTextStyle?: StyleProp<TextStyle>;
  leftImage?: ImageSourcePropType;
  leftImageStyle?: StyleProp<ImageStyle>;
  leftAction?: () => void;
  rightComponent?: JSX.Element;
  rightText?: string;
  rightTextStyle?: StyleProp<TextStyle>;
  rightImage?: ImageSourcePropType;
  rightImageStyle?: StyleProp<ImageStyle>;
  rightAction?: () => void;
  rightActiveOpacity?: number;
  containerStyle?: StyleProp<ViewStyle>;
  containerStyleTitle?: StyleProp<ViewStyle>;
  centerComponent?: JSX.Element;
  useDarkLayout?: boolean;
  animatedStyle?: any;
  isGradient?: boolean;
  colorArray?: (string | number)[]
}

const CustomHeader = (props: Props) => {
  const {
    title,
    titleStyle,
    customComponent,
    leftComponent,
    leftText,
    isGradient = false,
    leftTextStyle,
    leftImage,
    leftImageStyle,
    leftAction,
    rightComponent,
    rightText,
    rightTextStyle,
    rightImage,
    rightImageStyle,
    rightAction,
    rightActiveOpacity,
    containerStyle,
    useDarkLayout,
    containerStyleTitle,
    animatedStyle,
  } = props;

  const renderLeftComponent = () => {
    if (!leftComponent) return null
    return (
      <CustomTouchable style={styles.leftContainer} onPress={leftAction} >
        {leftComponent}
      </CustomTouchable>
    );
  };
  const renderRightComponent = () => {
    if (!rightComponent) return null
    return (
      <View style={styles.rightContainer}>
        {rightComponent}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderLeftComponent()}
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <CustomText text={title} style={styles.textTile} numberOfLines={1} />
        </View>
        {renderRightComponent()}
      </View>
    </View>
  )
};

export default CustomHeader 