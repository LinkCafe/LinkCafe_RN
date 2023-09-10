import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "@rneui/base";
import ImageLogin from "../assets/loginImage.jpg";
import { styleConstants } from "../constants/style";
import { useNavigation } from "@react-navigation/native";

const LoginHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styleConstants.container}>
      <View style={style.contentCard}>
        <Image
          source={ImageLogin}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
        <Text style={style.lemaText}>
          {" "}
          <Text style={{ color: "#E39B5A", fontWeight: "bold" }}>
            LinkCafé:
          </Text>{" "}
          interactúa con{" "}
          <Text style={{ textTransform: "capitalize", fontWeight: "bold" }}>
            expertos
          </Text>
          , descubre el café y adquiere conocimiento veraz ✌
        </Text>
        <View style={style.interaccion}>
          <Button
            buttonStyle={[style.button, style.btnLogin]}
            onPress={() => navigation.navigate("Login")}
          >
            Iniciar Sesión
          </Button>
          <Button
            buttonStyle={[style.button, style.btnSignUp]}
            titleStyle={{ color: "#E39B5A" }}
            onPress={() => navigation.navigate("SignUp")}
          >
            Registrarse
          </Button>
          <Text
            style={{ textDecorationLine: "underline", textAlign: "center" }}
            onPress={() => navigation.navigate("HomeTabs")}
          >
            Iniciar como invitado
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  contentCard: {
    width: 338,
    height: 540,
    display: "flex",
    flexDirection: "column",
  },
  lemaText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
  },
  interaccion: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  button: {
    borderRadius: 10,
    padding: 12,
  },
  btnLogin: {
    backgroundColor: "#E39B5A",
  },
  btnSignUp: {
    backgroundColor: "transparent",
    borderColor: "#E39B5A",
    borderWidth: 2,
  },
});

export default LoginHome;
