import * as React from "react";
import { useFonts } from "expo-font";
import Home from "./Src/Screens/Home";
import NavigationContainerRoot from "./routes/RootStackNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Regular": require("./Src/assets/Fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./Src/assets/Fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./Src/assets/Fonts/Roboto-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainerRoot />
    </GestureHandlerRootView>
  );
}
