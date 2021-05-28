import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput
} from "react-native";

import { connect } from "react-redux";

const LoginScreen = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>
      <TextInput
        style={{height:50,backgroundColor:"red"}}
        placeholder="Enter username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      
      <TextInput
      style={{height:50}}
        placeholder="Enter password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
     
      </View>
      <TouchableOpacity
        style={{ flex: 1, alignItems: "center" }}
        onPress={()=>{props.reduxLogin(username,password)}}
      >
        <Text style={{ flex: 1 }}>Log in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  console.log("state@$%#####", state);
  return { userToken: state.userToken };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxLogin: (userName,password) =>
      dispatch({
        type: "LOGIN_WITH_EMAIL_AND_PASSWORD_SAGA",
         payload:{username:userName,password:password}
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
