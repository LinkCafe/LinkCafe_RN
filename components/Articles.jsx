import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  VirtualizedList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Card } from "@rneui/base";
import { Button } from "@rneui/base";

const Articles = () => {
  const data = [
    {
      imagen:
        "https://images.pexels.com/photos/51343/old-letters-old-letter-handwriting-51343.jpeg?auto=compress&cs=tinysrgb&w=1600",
      titulo: "Prácticas avanzadas para la producción de café ",
      categoria: "PDF",
    },
    {
      imagen:
        "https://images.pexels.com/photos/51343/old-letters-old-letter-handwriting-51343.jpeg?auto=compress&cs=tinysrgb&w=1600",
      titulo: "El café sube un 10,2% su precio actual ",
      categoria: "Noticia",
    }
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.moreCategories}>
        <Text style={style.moreCategoriesText}>Artículos recomendados</Text>
        <Button
          type="outline"
          title="Ver todos >"
          buttonStyle={{ padding: 1, borderColor: "black", borderWidth: 1 }}
          titleStyle={{ color: "black" }}
        />
      </View>
      <ScrollView horizontal={true}>
        <View style={style.containerCard}>
          {data.map((d, index) => (
            <Card key={index} containerStyle={style.card}>
              <Image
                source={{
                  uri: d.imagen,
                  width: "100%",
                  height: 150,
                }}
              />
              <Text style={{ paddingTop: 12 }}>{d.titulo}</Text>
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
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: "#3e3e3e26",
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
                <Text style={{ textDecorationLine: 'underline', color: '#35d4f0' }}>Mas información</Text>
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

export default Articles;