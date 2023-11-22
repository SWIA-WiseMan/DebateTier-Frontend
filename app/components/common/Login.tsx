import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>토론티어</Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/kakao_login_medium_wide.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 250,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: 300,
    height: 50,
    resizeMode: 'contain',
    marginTop: 100,
  }
});

export default Login;