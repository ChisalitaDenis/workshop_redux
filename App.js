import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import {registerRootComponent} from "expo";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CounterScreen from "./src/screens/CounterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { store } from './src/redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <LoginScreen/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

registerRootComponent(App);