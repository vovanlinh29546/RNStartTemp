import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { throttle } from 'lodash';

interface Props extends TouchableOpacityProps {
  onPress?: () => void;
  onPressDelay?: number;
  children?: any;
}

const CustomTouchable = (props: Props) => {
  const { children, onPress, onPressDelay = 2000, activeOpacity = 0.7, ...ortherProps } = props;

  const onCustomPressThrottle = onPress ? throttle(onPress, onPressDelay, { leading: true, trailing: false }) : undefined;

  return (
    <TouchableOpacity onPress={onCustomPressThrottle} activeOpacity={activeOpacity} {...ortherProps}>
      {children}
    </TouchableOpacity>
  );
};

export { CustomTouchable };
