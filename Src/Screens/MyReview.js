import React, { useState } from "react";
import { Text, View } from "react-native";
import { GlobalStyles } from "../Styles/Global";

export default function MyReview({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>Welcome to the Review</Text>
    </View>
  );
}
