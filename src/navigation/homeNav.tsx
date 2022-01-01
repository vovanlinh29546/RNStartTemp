
import React, { Props } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTab, MainFlowScreens } from './initScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Alert, View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { colors } from '@src/contants/vars';
import { TabBarAdvancedButton } from './tabSvg';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MyTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={styles.containerBottomTab}>
      {state.routes.map((route: string, index: any) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        if (index === 1) {
          return (
            <TabBarAdvancedButton
              key={index}
              isFocused={isFocused}
              onPress={onPress}
            />
          )
        }
        return (
          // eslint-disable-next-line react/jsx-key
          <TouchableOpacity
            key={index}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.containerInactive}
          >
            <Image source={route.params.iconTab} style={[styles.iconImage, isFocused && { tintColor: colors.MAIN_PURPLE }]} />
            <Text style={[{ color: 'gray', paddingTop: 15 }, isFocused && { color: colors.MAIN_PURPLE }]}>
              {label}
            </Text>
          </TouchableOpacity>

        );
      })}
    </View>
  );

};


const tabStackScreen = () => {
  return (
    <Tab.Navigator tabBar={props => (

      <MyTabBar {...props} />)}
      initialRouteName='Alert'
      screenOptions={{ headerShown: false }}

    >
      {
        BottomTab.map(({ title, component, iconTab, colorTitle }) => (
          <Tab.Screen key={title}
            name={title}
            component={component}
            initialParams={{ iconTab, colorTitle }}
          />
        ))
      }
    </Tab.Navigator>
  );
};

const homeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ gestureEnabled: false, headerShown: false }}>
      <Stack.Screen name={'mainBottomTab'} component={tabStackScreen} />
      {
        Object.entries(MainFlowScreens).map(([name, component]) => (
          <Stack.Screen key={name} name={name} component={component} />
        ))
      }
    </Stack.Navigator>
  );
};

export default homeNavigator;
