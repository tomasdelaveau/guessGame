import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import Button from "./Button";
import { useState } from "react";

export default function NumberInput(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function verifyNumber() {
    if (enteredNumber < 1) {
      Alert.alert("Invalid number", "It has to be a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
    } else {
      props.onSet(enteredNumber);
    }
  }

  function resetInput() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Number</Text>
      <View style={styles.bottomGroup}>
        <TextInput
          style={styles.textInput}
          inputMode="numeric"
          maxLength={2}
          onChangeText={(text) => setEnteredNumber(text)}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <Button title="Reset" onPress={resetInput} />
          <Button title="Confirm" onPress={verifyNumber} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 175,
    backgroundColor: "#2d0116",
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
    elevation: 4, //android
    shadowColor: "black", //ios
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  text: {
    color: "#D6A657",
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-around",
    width: "100%",
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: "#D6A657",
    width: 45,
    fontSize: 30,
    color: "#D6A657",
    fontWeigth: "bold",
    textAlign: "center",
    paddingBottom: 0,
  },
  bottomGroup: {
    alignItems: "center",
  },
});
