import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from "react-native";
import React from "react";
import { Button, Avatar } from "@rneui/base";

const Categories = () => {
  return (
    <View style={style.container}>
      <View style={style.moreCategories}>
        <Text style={style.moreCategoriesText}>Temas de conversación</Text>
        <Button
          type="outline"
          title="Ver todo >"
          buttonStyle={{ padding: 1, borderColor: "black", borderWidth: 1 }}
          titleStyle={{ color: "black" }}
        />
      </View>
      <View style={style.categoriesContainer}>
        <Button buttonStyle={style.styleButton}>
          <Avatar
            size={40}
            rounded
            title="🌱"
            titleStyle={style.styleButton.icon}
            containerStyle={{ backgroundColor: "#e9e9e9"  }}
          />
          <Text style={style.styleButton.text}>Producción</Text>
        </Button>
        <Button buttonStyle={style.styleButton}>
          <Avatar
            size={40}
            rounded
            title="☕"
            titleStyle={style.styleButton.icon}
            containerStyle={{ backgroundColor: "#e9e9e9" }}
          />
          <Text style={style.styleButton.text}>Barismo</Text>
        </Button>
        <Button buttonStyle={style.styleButton}>
          <Avatar
            size={40}
            rounded
            title="📖"
            titleStyle={style.styleButton.icon}
            containerStyle={{ backgroundColor: "#e9e9e9" }}
          />
          <Text style={style.styleButton.text}>Entre Otros</Text>
        </Button>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  moreCategories: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  moreCategoriesText: {
    fontSize: 18,
    fontWeight: "600",
  },
  categoriesContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  styleButton: {
    width: 110,
    display: "flex",
    flexDirection: "column",
    paddingVertical: 20,
    backgroundColor: "transparent",
    borderColor: "#797979",
    borderWidth: 1,
    borderRadius: 7,
    text: {
      fontSize: 15,
      marginTop: 5,
    },
    icon: {
      fontSize: 20
    },
  },
});

export default Categories;
