import { SWIPER } from "@src/contants/screenKeys";
import NavigationActionsService from "@src/navigation/navigation";
import React, { useMemo } from "react";
import { FlatList, Image, ScrollView, StatusBar, Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
import Collapsible from "../Collapsible";
import { useNavigation } from '@react-navigation/native';
import CustomHeader from "@src/components/CustomHeader";
import { LOGO_BANNER } from "@src/contants/icons";
import { WIDTH, WIDTH_RATIO } from "@src/contants/vars";
const HomeScreen = (props: any) => {
  const navigation = useNavigation();

  const backgroundStyle = {

  };
  const banner = () => {
    return (
      <Image
        resizeMode="contain"
        style={{
          alignSelf: 'center',
          width: WIDTH - 50,
        }}
        source={LOGO_BANNER} />
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <CustomHeader
        title={'Home'}
      />
      <ScrollView
        bounces={false}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        {banner()}

      </ScrollView>

    </View>
  );
}
export default HomeScreen