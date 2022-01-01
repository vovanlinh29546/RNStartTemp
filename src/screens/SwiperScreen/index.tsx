import React from "react";
import { ScrollView, StatusBar, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
import Collapsible from "../Collapsible";

const SwiperScreen = (props: any) => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('123')
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />



    </View>
  );
}
export default SwiperScreen