import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@rneui/base";

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
        <View style={{ width: "100%", paddingHorizontal: 16 }}>
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
      </ScrollView>
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
});

export default Create;
