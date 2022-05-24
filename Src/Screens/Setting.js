import React, { useState } from "react";
import { Text, View } from "react-native";
import { GlobalStyles } from "../Styles/Global";

export default function Setting({ navigation }) {
  console.log(navigation, "BRUHHH");

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>Welcome to the app setting</Text>
    </View>
  );
}
