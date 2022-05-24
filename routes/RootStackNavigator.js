import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { moderateScale } from "react-native-size-matters";
import { Fonts } from "../Src/Constant";
import Home from "../Src/Screens/Home";
import Reviews from "../Src/Screens/Review";
import { colors, metrics } from "../Src/Theme";

const StackScreen = createNativeStackNavigator();

export default function NavigationContainerRoot() {
  return (
    <NavigationContainer>
      <StackScreen.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: Fonts.BOLD,
            color: "white",
            fontSize: metrics.font.paragraph,
          },
          headerStyle: {
            backgroundColor: colors.aesthetic,
            height: moderateScale(60),
          },
        }}
      >
        <StackScreen.Screen name="HomeScreen" component={Home} />
        <StackScreen.Screen name="Reviews" component={Reviews} />
      </StackScreen.Navigator>
    </NavigationContainer>
  );
}
