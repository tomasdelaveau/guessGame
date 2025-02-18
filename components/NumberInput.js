import { View, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import Colors from "../constants/colors";
import Button from "./Button";
import Card from "./ui/Card";
import ButtonsContainer from "./ui/ButtonsContainer";

export default function NumberInput({ onSet }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function verifyNumber() {
    if (enteredNumber < 1) {
      Alert.alert("Invalid number", "It has to be a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
    } else {
      onSet(enteredNumber);
    }
  }

  function resetInput() {
    setEnteredNumber("");
  }

  return (
    <Card prompt="Enter Number">
      <View style={styles.bottomGroup}>
        <TextInput
          style={styles.textInput}
          inputMode="numeric"
          maxLength={2}
          onChangeText={(text) => setEnteredNumber(text)}
          value={enteredNumber}
        />
        <ButtonsContainer>
          <Button title="Reset" onPress={resetInput} />
          <Button title="Confirm" onPress={verifyNumber} />
        </ButtonsContainer>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 2,
    borderColor: Colors.accent500,
    width: 45,
    fontSize: 30,
    color: Colors.accent500,
    fontWeigth: "bold",
    textAlign: "center",
    paddingBottom: 0,
  },
  bottomGroup: {
    alignItems: "center",
  },
});
