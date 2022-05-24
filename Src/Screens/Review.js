import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../Styles/Global";

export default function Reviews({ navigation }) {
  const { title, rating, body } = navigation.state.params;
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}> {title}</Text>
      <Text style={GlobalStyles.titleText}> {rating} </Text>
      <Text style={GlobalStyles.titleText}> {body} </Text>
    </View>
  );
}
