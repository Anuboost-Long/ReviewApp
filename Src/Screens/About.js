import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../Styles/Global";

export default function About() {
  return (
    <View style={Styles.container}>
      <Text style={GlobalStyles.titleText}> This is my about screen !</Text>
    </View>
  );
}
