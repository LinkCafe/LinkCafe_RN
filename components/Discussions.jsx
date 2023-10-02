import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Card } from "@rneui/base";
import { Button } from "@rneui/base";
import ThemeContext from "../context/ThemeContext";


const Discussions = () => {
  const data = [
    {
      imagen:
        "https://images.pexels.com/photos/16645682/pexels-photo-16645682/free-photo-of-naturaleza-arbusto-jardin-hojas.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      titulo: "Por qué se debe sembrar en luna llena?",
      veridica: true,
      categoria: "Producción 🌱",
      persona: "Fernando",
    },
    {
      imagen:
        "https://images.pexels.com/photos/16645682/pexels-photo-16645682/free-photo-of-naturaleza-arbusto-jardin-hojas.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      titulo: "Por qué se debe sembrar en luna llena?",
      veridica: false,
      categoria: "Producción 🌱",
      persona: "Fernando",
    },
    {
      imagen:
        "https://images.pexels.com/photos/16645682/pexels-photo-16645682/free-photo-of-naturaleza-arbusto-jardin-hojas.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      titulo: "Por qué se debe sembrar en luna llena?",
      veridica: false,
      categoria: "Producción 🌱",
      persona: "Fernando",
    },
  ];

  const { theme } = useContext(ThemeContext)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.moreCategories}>
        <Text style={[style.moreCategoriesText, { color: theme == 'light' ? 'black' : 'white' }]}>Últimas discusiones</Text>
        <Button
          type="outline"
          title="Ver todas >"
          buttonStyle={{ padding: 1, borderColor: theme == 'light' ? 'black' : 'white', borderWidth: 1 }}
          titleStyle={{ color: theme == 'light' ? 'black' : 'white' }}
        />
      </View>
      <ScrollView horizontal={true}>
        <View style={style.containerCard}>
          {data.map((d, index) => (
            <Card key={index} containerStyle={[style.card, { backgroundColor: theme == 'light' ? 'white' : '#464646' }]}>
              <Image
                source={{
                  uri: d.imagen,
                  width: "100%",
                  height: 150,
                }}
              />
              <Text style={{ paddingTop: 12, color: theme == 'light' ? 'black' : 'white' }}>{d.titulo}</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  paddingTop: 10,
                }}
              >
                <Text
                  style={{
                    backgroundColor:
                      d.veridica == true ? theme == 'light' ? "#54e3203e" : '#75DF77' : theme == 'light' ? "#E920203e" : '#FF7070',
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  {d.veridica == true ? "Veridica" : "En proceso"}
                </Text>
                <Text
                  style={{
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: theme == 'light' ? "#3e3e3e26" : 'gray',
                    color: theme == 'light' ? 'black' : 'white'
                  }}
                >
                  {d.categoria}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  paddingTop: 10,
                }}
              >
                <Avatar />
                <Text style={{ fontWeight: "bold", color: theme == 'light' ? 'black' : 'white' }}>{d.persona}</Text>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



const style = StyleSheet.create({
  containerCard: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 15,
    paddingLeft: 15,
  },
  card: {
    width: 220,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    borderRadius: 10,
    margin: 0,
  },
  moreCategories: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  moreCategoriesText: {
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Discussions;
