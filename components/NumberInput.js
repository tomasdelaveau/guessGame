import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import Button from "./Button";
import { useState } from "react";

export default function NumberInput(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function verifyNumber() {
    console.log("verifying number");
    if (enteredNumber < 1) {
      Alert.alert("Invalid number", "It has to be a number between 1 and 99");
    } else {
      props.onSet(enteredNumber);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Number</Text>
      <View style={styles.bottomGroup}>
        <TextInput
          style={styles.textInput}
          inputMode="numeric"
          maxLength={2}
          textAlign="center"
          color="white"
          onChangeText={(text) => setEnteredNumber(text)}
          value={enteredNumber}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Reset"
            onPress={() => {
              console.log('resetting')
              setEnteredNumber("");
            }}
          />
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
    backgroundColor: "#3C021E",
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
  },
  text: {
    color: "#D6A657",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-around",
    width: "100%",
  },
  textInput: {
    borderBottomWidth: 2,
    borderColor: "#D6A657",
    minWidth: 40,
    fontSize: 30,
    verticalPadding: -5,
  },
  bottomGroup: {
    alignItems: "center",
  },
});
