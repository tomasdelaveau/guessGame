import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "./constants/colors";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import DismissKeyboard from "./components/DismissKeyboard";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [guessed, setGuessed] = useState(false);
  const [attempts, setAttempts] = useState(null);

  function handleFinish(numberOfGuesses) {
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
    <DismissKeyboard>
      <LinearGradient
        colors={[Colors.primary800, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.image}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  image: {
    opacity: 0.15,
  },
});
