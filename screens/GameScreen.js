import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import GuessList from "../components/GuessList";
import HigherLower from "../components/HigherLower";
import { useState } from "react";

export default function NumberInput(props) {
  function generateNumber() {
    let initial = Math.random();
    if (initial < 0.005 || initial >= 0.995) return generateNumber();
    return Math.round(initial * 100);
  }
  const [guessedNumber, setGuessedNumber] = useState(generateNumber());
  const [currentGuesses, setCurrentGuesses] = useState([guessedNumber]);

  function onHigher() {}

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Oponent's guess</Text>
      <Text style={styles.number}>{guessedNumber}</Text>
      <HigherLower onHigher={() => {}} onLower={() => {}} />
      <GuessList guesses={currentGuesses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 100,
  },
  topText: {
    color: "black",
    fontSize: 30,
    borderWidth: 2,
    padding: 10,
    width: "80%",
    textAlign: "center",
    marginBottom: 20,
  },
  number: {
    fontSize: 40,
    borderWidth: 2,
    paddingVertical: 20,
    width: "70%",
    textAlign: "center",
    borderRadius: 10,
    marginBottom: 50,
  },
  button: {
    marginHorizontal: 5,
  },
});
