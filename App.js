import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [guessed, setGuessed] = useState(false);
  const [attempts, setAttempts] = useState(null);

  function handleFinish(numberOfGuesses) {
    console.log("handling finish");
    setAttempts(numberOfGuesses);
    setGuessed(true);
  }

  function handleReset() {
    setUserNumber(null);
    setGuessed(false);
  }

  const screen = !userNumber ? (
    <StartGameScreen onSet={(number) => setUserNumber(number)} />
  ) : userNumber && !guessed ? (
    <GameScreen number={userNumber} finishGame={handleFinish} />
  ) : (
    <GameOverScreen
      number={userNumber}
      rounds={attempts}
      startNewGame={handleReset}
    />
  );

  return (
    <>
      <StatusBar style="auto" />
      {screen}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 150,
  },
  text: {
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    fontSize: 30,
    padding: 10,
    marginBottom: 40,
  },
});
