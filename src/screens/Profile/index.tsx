import CustomHeader from "@src/components/CustomHeader";
import React from "react";
import { ScrollView, StatusBar, useColorScheme, View } from "react-native";

const Profile = (props: any) => {
  return (
    <View style={{}}>
      <CustomHeader
        title={'Profile'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{}}>

      </ScrollView>
    </View>
  );
}
export default Profile