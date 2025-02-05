import { View, Text, StyleSheet, Alert } from "react-native";
import GuessList from "../components/GuessList";
import HigherLower from "../components/HigherLower";
import { useState } from "react";

export default function GameScreen(props) {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(99);
  const [currentGuess, setCurrentGuess] = useState(generateNumber(min, max));
  const [currentGuesses, setCurrentGuesses] = useState([currentGuess]);

  function generateNumber(inf, sup) {
    console.log(`inf: ${inf}, sup: ${sup}`);
    let result = Math.random() * (sup - inf) + inf;
    return Math.ceil(result);
  }

  function handleGuess(higherOrLower) {
    console.log(
      `current guess: ${typeof currentGuess}, props.number: ${typeof props.number}`
    );
    if (
      (higherOrLower === "lower" && currentGuess < props.number) ||
      (higherOrLower === "higher" && currentGuess > props.number)
    ) {
      Alert.alert("Liar");
      return;
    } else if (currentGuess == props.number) {
      console.log("inside finish");
      props.finishGame(currentGuesses.length);
    }

    let newGuess;
    console.log(`max ${max}, min: ${min}`);
    console.log("current guess: ", currentGuess);
    if (higherOrLower === "lower") {
      console.log("inside lower");
      setMax(currentGuess - 1);
      newGuess = generateNumber(min, currentGuess - 1);
    } else if (higherOrLower === "higher") {
      console.log("inside higher");
      setMin(currentGuess + 1);
      newGuess = generateNumber(currentGuess + 1, max);
    }
    setCurrentGuess(newGuess);
    setCurrentGuesses((currentGuesses) => [...currentGuesses, newGuess]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Oponent's guess</Text>
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
