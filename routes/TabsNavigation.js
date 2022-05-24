import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Src/Screens/Home";
import Setting from "../Src/Screens/Setting";
import { colors, metrics } from "../Src/Theme";
import { moderateScale } from "react-native-size-matters";
import { Fonts } from "../Src/Constant";
import { IconAssets } from "../Src/assets";
import CustomTabItem from "../Src/Components/CustomTabItem";
import MyReview from "../Src/Screens/MyReview";

const TabsNavigate = createBottomTabNavigator();

export default function BottomTabsNavigation() {
  const iconWidth = React.useMemo(() => (Platform.OS === "ios" ? 30 : 20), []);

  return (
    <TabsNavigate.Navigator
      screenOptions={{
        tabBarStyle: { height: moderateScale(60) },
        tabBarShowLabel: false,
        headerTintColor: colors.sandPaper,
        headerBackTitleStyle: {
          fontSize: metrics.font.note,
          fontFamily: Fonts.LIGHT,
        },
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
      <TabsNavigate.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTabItem
                focused={focused}
                width={iconWidth}
                icon={
                  <IconAssets.HomeIcon
                    width={iconWidth}
                    height={40}
                    stroke={focused ? colors.aesthetic : colors.veryLightGray}
                    fill={focused ? colors.aesthetic : colors.veryLightGray}
                  />
                }
                height={40}
                label="Home"
              />
            );
          },
        }}
      />
      <TabsNavigate.Screen
        name="My Review"
        component={MyReview}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTabItem
                focused={focused}
                width={iconWidth}
                icon={
                  <IconAssets.Setting
                    width={iconWidth}
                    height={40}
                    stroke={focused ? colors.aesthetic : colors.veryLightGray}
                    fill={focused ? colors.aesthetic : colors.veryLightGray}
                  />
                }
                height={40}
                label="My Review"
              />
            );
          },
        }}
      />
      <TabsNavigate.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <CustomTabItem
                focused={focused}
                width={iconWidth}
                icon={
                  <IconAssets.Setting
                    width={iconWidth}
                    height={40}
                    stroke={focused ? colors.aesthetic : colors.veryLightGray}
                    fill={focused ? colors.aesthetic : colors.veryLightGray}
                  />
                }
                height={40}
                label="Setting"
              />
            );
          },
        }}
      />
    </TabsNavigate.Navigator>
  );
}
