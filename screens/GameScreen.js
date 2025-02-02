import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import GuessList from "../components/GuessList";
import HigherLower from "../components/HigherLower";
import { useState } from "react";

export default function NumberInput(props) {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(99);
  const [currentGuess, setCurrentGuess] = useState(generateNumber());
  const [currentGuesses, setCurrentGuesses] = useState([currentGuess]);

  function generateNumber() {
    let result = Math.random() * (max - min) + min;
    return Math.ceil(result);
  }

  function handleGuess(higherOrLower) {
    if (higherOrLower === 'lower') {
      setMax(currentGuess)
    } else if (higherOrLower ===)
    setCurrentGuesses((currentGuesses) => [...currentGuesses, currentGuess]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Oponent's guess</Text>
      <Text style={styles.number}>{guessedNumber}</Text>
      <HigherLower onPress={handleGuess} />
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
