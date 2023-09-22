import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input } from "@rneui/base";


const Create = () => {
  const categories = ["Producción", "Barismo", "Otros"];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <View
          style={{ width: "100%", paddingHorizontal: 16, marginBottom: 25 }}
        >
          <View>
            <Input
              placeholder="Nombre o encabezado de la publicación"
              inputContainerStyle={style.inputStyle}
              leftIconContainerStyle={style.inputContainerStyle}
              label="Nombre (*)"
              labelStyle={{
                fontWeight: "bold",
                color: "black",
                marginBottom: 10,
                fontSize: 15,
              }}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{ fontSize: 16, marginBottom: 10, fontWeight: "bold" }}
            >
              Tipo de publicación (*)
            </Text>
            <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    style.categoryButton,
                    selectedCategory === category &&
                      style.selectedCategoryButton,
                  ]}
                  onPress={() => handleCategoryPress(category)}
                >
                  <Text style={style.categoryButtonText}>{category}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View style={{ width: "100%", paddingHorizontal: 16 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}>
            Detalles de la publicación
          </Text>
          <View>
            <Input
              placeholder="URLs origen de la información"
              inputContainerStyle={style.inputStyle}
              leftIconContainerStyle={style.inputContainerStyle}
              label="Fuentes"
              labelStyle={{
                fontWeight: "bold",
                color: "black",
                marginBottom: 10,
                fontSize: 15,
              }}
            />
          </View>
          <View>
            <Input
              placeholder="Descripción de la publicación"
              inputContainerStyle={style.inputStyle}
              leftIconContainerStyle={style.inputContainerStyle}
              label="Descripción (*)"
              labelStyle={{
                fontWeight: "bold",
                color: "black",
                marginBottom: 10,
                fontSize: 15,
              }}
              multiline={true}
              numberOfLines={4}
              textContentType="URL"
            />
          </View>
          <Button buttonStyle={{ backgroundColor: "#E39B5A", borderRadius: 5 }}>
            Subir imagen
          </Button>
        </View>
      </ScrollView>
      <View style={style.interactionButton}>
        <Button
          containerStyle={{ width: "50%" }}
          buttonStyle={{ borderRadius: 5, backgroundColor: "#E39B5A" }}
        >
          Subir
        </Button>
        <Button
          containerStyle={{ width: "50%" }}
          buttonStyle={{
            borderRadius: 5,
            backgroundColor: "transparent",
            borderColor: "#E39B5A",
            borderWidth: 2,
          }}
          titleStyle={{ color: "#E39B5A" }}
        >
          Cancelar
        </Button>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  categoryButton: {
    backgroundColor: "#eee",
    padding: 7,
    borderRadius: 5,
  },
  selectedCategoryButton: {
    backgroundColor: "#19d10834",
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#333",
  },
  inputStyle: {
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  inputContainerStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  interactionButton: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Create;
