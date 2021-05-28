import React from "react";
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { connect } from "react-redux";

const { height, width } = Dimensions.get("window");

const CounterScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.counterTitle}>Counter</Text>
      <View style={styles.counterContainer}>
        <TouchableOpacity onPress={props.reduxIncreaseCounter}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.counterText}>{props.counter}</Text>
        <TouchableOpacity onPress={props.reduxDecreaseCounter}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  counterContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  counterTitle: {
    fontFamily: "System",
    fontSize: 32,
    fontWeight: "700",
    color: "#000",
  },
  counterText: {
    fontFamily: "System",
    fontSize: 36,
    fontWeight: "400",
    color: "#000",
  },
  buttonText: {
    fontFamily: "System",
    fontSize: 50,
    fontWeight: "300",
    color: "#007AFF",
    marginLeft: 40,
    marginRight: 40,
  },
});

const mapStateToProps = (state) => {
  console.log("state", state);
  return { counter: state.counter.counter };
};

const mapDispatchToProps =(disptach)=>{
    return{
        reduxIncreaseCounter:()=>disptach({
            type:"INCREASE_COUNTER",
            payload:1,
        }),
        reduxDecreaseCounter:()=>disptach({
            type:"DECREASE_COUNTER",
            payload:1,
        }),   
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(CounterScreen);
