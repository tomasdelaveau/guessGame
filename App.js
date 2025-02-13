import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
      <LinearGradient colors={["#3C021E", "#D6A657"]} style={styles.rootScreen}>
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
