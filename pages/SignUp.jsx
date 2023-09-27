import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { styleConstants } from "../constants/style";
import { Button, Input } from "@rneui/base";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
    const [visiblePassword, setVisiblePassword] = useState(true);
    const handleVisibilityPassword = () => {
      setVisiblePassword(!visiblePassword);
    };
    return (
      <SafeAreaView style={styleConstants.container}>
        <ScrollView style={style.contentCard}>
          <Text
            style={{
              width: "100%",
              paddingVertical: 40,
              textAlign: "left",
              fontSize: 25,
              fontWeight: 500,
            }}
          >
            Registro
          </Text>
          <Input
            placeholder="Nombre"
            inputContainerStyle={style.inputStyle}
            label="Nombre"
            leftIcon={{
              type: "font-awesome",
              name: "user",
              color: "#E39B5A",
            }}
            leftIconContainerStyle={style.inputContainerStyle}
            textContentType="emailAddress"
            labelStyle={style.labelStyle}
          />
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
          <View style={style.interaction}>
            <Button
              buttonStyle={[style.button, style.btnSignUp]}
              titleStyle={{ color: "#E39B5A" }}
            >
              Registrarse
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}

export default SignUp

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
  