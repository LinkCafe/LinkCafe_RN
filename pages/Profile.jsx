import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Avatar, Button } from "@rneui/base";
import Reviews from "../components/Reviews";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 16,
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
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Diego Duran
              </Text>
              <Text>Caficultor</Text>
            </View>
          </View>
          <View>
            <Button
              buttonStyle={{
                backgroundColor: "tranparent",
                borderWidth: 1,
                borderColor: "black",
                padding: 1,
                borderRadius: 5,
              }}
              titleStyle={{ color: "black" }}
            >
              Editar {">"}
            </Button>
          </View>
        </View>
        <Reviews />
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
