import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "@rneui/base";
import ImageLogin from "../assets/loginImage.jpg";

const Login = () => {
  return (
    <View style={style.container}>
      <View style={style.contentCard}>
        <Image source={ImageLogin} style={{width: '100%'}} resizeMode="contain" />
        <Text style={style.lemaText}> <Text style={{color: '#E39B5A', fontWeight: 'bold'}}>LinkCafé:</Text> interactúa con <Text style={{textTransform: 'capitalize', fontWeight: 'bold'}}>expertos</Text>, descubre el café y adquiere conocimiento veraz ✌</Text>
        <View style={style.interaccion}>
          <Button buttonStyle={[style.button, style.btnLogin]}>Iniciar Sesión</Button>
          <Button buttonStyle={[style.button, style.btnSignUp ]} titleStyle={{color: '#E39B5A'}}>Registrarse</Button>
          <Text style={{ textDecorationLine: 'underline', textAlign: 'center'}}>Iniciar Como Invitado</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center'
  },
  contentCard: {
    width: 338,
    height: 540,
    display: 'flex',
    flexDirection: 'column'
  },
  lemaText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30
  },
  interaccion: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  },
  button: {
    borderRadius: 10, 
    padding: 12,
  },
  btnLogin: {
    backgroundColor: '#E39B5A'
  },
  btnSignUp: {
    backgroundColor: 'transparent',
    borderColor: '#E39B5A',
    borderWidth: 2
  }
})

export default Login;