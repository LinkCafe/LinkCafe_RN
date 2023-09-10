import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./Login";
import LoginHome from "./LoginHome";
import Home from "./Home";
import { Icon } from "@rneui/base";
import Create from "./Create";

const Tab = createBottomTabNavigator();
const HomeTabs = () => {
  const optionsBase = {
    headerTitle: "",
    tabBarStyle: { paddingBottom: 5, height: 60 },
    tabBarLabelStyle: { fontSize: 15 },
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Inicio",
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerLeft: () => (
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Link Café</Text>
          ),
          headerRight: () => (
            <Icon
              type="font-awesome"
              name="user"
              style={{
                marginRight: 20,
                width: 40,
                height: 40,
                backgroundColor: "#e9e9e9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
              }}
              iconStyle={{ color: "#5c3d21" }}
            />
          ),
          tabBarIcon: () => <Icon style={{ fontSize: 20 }} type="font-awesome" name="home"/>,
          ...optionsBase,
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          title: 'Crear',
          headerTitle: 'Crear publicación',
          tabBarIcon: () => <Icon style={{ fontSize: 20 }} type="font-awesome" name="plus"/>,
          tabBarStyle: { paddingBottom: 5, height: 60 },
          tabBarLabelStyle: { fontSize: 15 }
        }}
      />
      <Tab.Screen
        name="LoginHome"
        component={LoginHome}
        options={{ ...optionsBase }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
