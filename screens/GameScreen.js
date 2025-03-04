import {
  View,
  Text,
  StyleSheet,
  Alert,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";

import GuessList from "../components/GuessList";
import HigherLower from "../components/HigherLower";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

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
    setCurrentGuesses((prevGuesses) => [...prevGuesses, newGuess]);
  }

  const { height } = useWindowDimensions();
  const margin = height > 400 ? 100 : 25;
  const padding = height > 400 ? 20 : 10;

  return (
    <View style={[styles.container, { marginTop: margin }]}>
      <Title>Oponent's Guess</Title>
      <Text style={[styles.number, { paddingVertical: padding }]}>
        {currentGuess}
      </Text>
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
  },
  number: {
    fontSize: 40,
    fontFamily: "open-sans-bold",
    borderWidth: 4,
    borderColor: Colors.accent500,
    color: Colors.accent500,
    width: "70%",
    textAlign: "center",
    borderRadius: 10,
  },
  button: {
    marginHorizontal: 5,
  },
});
