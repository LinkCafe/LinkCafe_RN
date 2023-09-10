import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Card } from "@rneui/base";

const Reviews = () => {
  const data = [
    {
      username: "User A",
      description: "Gracias por tu colaboración",
    },
    {
        username: "User B",
        description: "Gracias por tu colaboración",
      },
      {
        username: "User C",
        description: "Gracias por tu colaboración",
      },
  ];
  return (
    <SafeAreaView>
      <View style={style.moreCategories}>
        <Text style={style.moreCategoriesText}>Reseñas</Text>
        <Button
          type="outline"
          title="Ver todo >"
          buttonStyle={{ padding: 1, borderColor: "black", borderWidth: 1 }}
          titleStyle={{ color: "black" }}
        />
      </View>
      <ScrollView horizontal={true}>
        <View style={style.containerCard}>
          {data.map((d, index) => (
            <Card key={index} containerStyle={{ backgroundColor: '#e4e4e4', borderRadius: 5, display: 'flex', gap: 10, margin: 0 }} >
              <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 20 }}>
                <Avatar
                  size={40}
                  rounded
                  title="🌱"
                  containerStyle={{ backgroundColor: "#e9e9e9" }}
                />
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{d.username}</Text>
              </View>
              <View style={{ width: '100%' }}>
                <Text>{d.description}</Text>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  moreCategories: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15
  },
  moreCategoriesText: {
    fontSize: 20,
    fontWeight: "600",
  },
  containerCard: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 16
  },
});

export default Reviews;
