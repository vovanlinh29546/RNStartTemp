import { ICON_ARROW_BOTTOM } from '@src/contants/icons';
import React, { useCallback, useEffect, useRef, useState, } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { concat, interpolate, interpolateColor, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { AnimatedSection, useCollapsible } from '../../components/ReanimatedCollapsible';
import styles from './style'

//lib ani


interface Props {

}
const Collapsible = (props: Props) => {

  const [show, setShow] = React.useState(false);
  const { animatedHeight, onPress, onLayout, state } = useCollapsible();
  const progress = useDerivedValue(() => {
    return withTiming(show ? 0 : 1, { duration: 500 });
  });
  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(progress.value,
      [0, 1],
      ['rgba(255, 255, 255, 1)', 'rgba(85, 35, 124, 0.1)']
    );
    return {
      backgroundColor,
    };
  }, [show]);
  const tintColorStyle = useAnimatedStyle(() => {
    const rota = interpolate(progress.value, [0, 1], [0, 180])


    return {
      // tintColor,
      transform: [{
        rotate: rota + 'deg'
      }]
    };
  }, [show]);

  const renderContent = () => {
    return (
      <View style={{ flex: 1 }}>
        <Text>
          this is test collapsible this is test collapsible this is test collapsible
          this is test collapsible
          this is test collapsible
          this is test collapsible
          this is test collapsible
        </Text>
      </View>
    )
  }
  return (
    <>
      <TouchableOpacity onPress={() => {
        setShow(!show)
        onPress()
      }}>
        <Animated.View
          style={[styles.header, backgroundColorStyle]}>
          <Text style={styles.headerText}>Collapsible</Text>
          <Animated.Image source={ICON_ARROW_BOTTOM} style={[styles.Image, tintColorStyle]} />
        </Animated.View>
      </TouchableOpacity>
      <AnimatedSection
        animatedHeight={animatedHeight}
        onLayout={onLayout}
        state={state}
      >
        {renderContent()}
      </AnimatedSection>
    </>
  );

}

export default React.memo(Collapsible);
