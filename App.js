import * as React from "react";
import { useFonts } from "expo-font";
Home;

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Regular": require("./Src/assets/Fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./Src/assets/Fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./Src/assets/Fonts/Roboto-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Navigator />;
}
