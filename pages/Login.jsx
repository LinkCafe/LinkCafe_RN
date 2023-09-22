import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { styleConstants } from "../constants/style";
import { Button, Input } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [visiblePassword, setVisiblePassword] = useState(true);
  const navigation = useNavigation()
  const handleVisibilityPassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  return (
    <View style={styleConstants.container}>
      <View style={style.contentCard}>
        <Text
          style={{
            width: "100%",
            paddingVertical: 40,
            textAlign: "left",
            fontSize: 25,
            fontWeight: 500,
          }}
        >
          Iniciar Sesión
        </Text>
        <Input
          placeholder="Correo"
          inputContainerStyle={style.inputStyle}
          label="Correo"
          leftIcon={{
            type: "font-awesome",
            name: "envelope",
            color: "#E39B5A",
          }}
          leftIconContainerStyle={style.inputContainerStyle}
          textContentType="emailAddress"
          labelStyle={style.labelStyle}
        />
        <Input
          placeholder="Contraseña"
          inputContainerStyle={style.inputStyle}
          label="Contraseña"
          secureTextEntry={visiblePassword}
          leftIcon={{ type: "font-awesome", name: "lock", color: "#E39B5A" }}
          leftIconContainerStyle={style.inputContainerStyle}
          labelStyle={style.labelStyle}
          rightIcon={{
            type: "font-awesome",
            name: visiblePassword == true ? "eye" : "eye-slash",
            onPress: () => handleVisibilityPassword(),
          }}
          rightIconContainerStyle={style.inputContainerStyle}
        />
        <Text
          style={{
            width: "100%",
            textAlign: "right",
            textDecorationLine: "underline",
            color: "blue",
          }}
        >
          ¿Olvidaste la contraseña?
        </Text>
        <View style={style.interaction}>
          <Button buttonStyle={[style.button, style.btnLogin]}>
            Iniciar Sesión
          </Button>
          <Text style={{ textAlign: "center", color: "gray" }}>o</Text>
          <Button
            buttonStyle={[style.button, style.btnSignUp]}
            titleStyle={{ color: "#E39B5A" }}
            onPress={() => navigation.navigate('SignUp')}
          >
            Registrarse
          </Button>
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
  inputStyle: {
    padding: 2,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  inputContainerStyle: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  labelStyle: {
    fontWeight: "normal",
    marginBottom: 10,
  },
  interaction: {
    paddingVertical: 50,
    display: "flex",
    flexDirection: "column",
    gap: 30,
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

export default Login;
