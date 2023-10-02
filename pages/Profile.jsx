import { View, Text, ScrollView, StyleSheet, VirtualizedList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext } from "react";
import { Avatar, Button, Switch } from "@rneui/base";
import Reviews from "../components/Reviews";
import ThemeContext from "../context/ThemeContext";

const Profile = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme(newTheme);
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme == 'light' ? 'white' : '#202020' }}>
      <ScrollView style={{ paddingHorizontal: 16}}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Avatar
              size={40}
              rounded
              title="🌱"
              containerStyle={style.containerAvatar}
            />
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: theme == 'light' ? 'black' : 'white' }}>
                Diego Duran
              </Text>
              <Text style={{ color: theme == 'light' ? 'black' : 'white' }}>Caficultor</Text>
            </View>
          </View>
          <View>
            <Button
              buttonStyle={{
                backgroundColor: "tranparent",
                borderWidth: 1,
                borderColor: theme == 'light' ? "black" : 'white',
                padding: 1,
                borderRadius: 5,
              }}
              titleStyle={{ color: theme == 'light' ? "black" : 'white' }}
            >
              Editar {">"}
            </Button>
          </View>
        </View>
        <Reviews />
        <View style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row'
        }} >
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: theme == 'light' ? 'black' : 'white'
          }} >Tema: {theme == 'light' ? 'Claro' : 'Oscuro' }</Text>
          <Switch 
            value={ theme === 'light' ? false : true } 
            onValueChange={() => handleToggleTheme()}
            color={ theme === 'dark' ? 'white' : '#2089dc'}
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  containerAvatar: {
    backgroundColor: "#e9e9e9",
    display: "flex",
    justifyContent: "center",
  },
});

export default Profile;
