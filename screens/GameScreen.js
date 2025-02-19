import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import GuessList from "../components/GuessList";
import HigherLower from "../components/HigherLower";
import Title from "../components/ui/Title";

function generateNumber(inf, sup, exclude) {
  let decimal = Math.random() * (sup - inf) + inf;
  let result = Math.floor(decimal);

  if (result === exclude) return generateNumber(inf, sup, exclude);
  return result;
}

export default function GameScreen({ number, finishGame }) {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [currentGuess, setCurrentGuess] = useState(
    generateNumber(min, max, number)
  );
  const [currentGuesses, setCurrentGuesses] = useState([currentGuess]);

  function handleGuess(higherOrLower) {
    if (
      (higherOrLower === "lower" && currentGuess < number) ||
      (higherOrLower === "higher" && currentGuess > number)
    ) {
      Alert.alert("Liar");
      return;
    } else if (currentGuess == number) {
      finishGame(currentGuesses.length);
    }

    let newGuess;
    if (higherOrLower === "lower") {
      setMax(currentGuess);
      newGuess = generateNumber(min, currentGuess);
    } else if (higherOrLower === "higher") {
      setMin(currentGuess + 1);
      newGuess = generateNumber(currentGuess + 1, max);
    }
    setCurrentGuess(newGuess);
    setCurrentGuesses((currentGuesses) => [...currentGuesses, newGuess]);
  }

  return (
    <View style={styles.container}>
      <Title>Oponent's Guess</Title>
      <Text style={styles.number}>{currentGuess}</Text>
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
  number: {
    fontSize: 40,
    borderWidth: 2,
    borderColor: "white",
    color: "white",
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
