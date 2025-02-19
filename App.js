import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import DismissKeyboard from "./components/DismissKeyboard";
import Colors from "./constants/Colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [attempts, setAttempts] = useState(null);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  function handleFinish(numberOfGuesses) {
    setAttempts(numberOfGuesses);
    setGameIsOver(true);
  }

  function handleReset() {
    setUserNumber(null);
    setGameIsOver(false);
  }

  let screen = <StartGameScreen onSet={(number) => setUserNumber(number)} />;

  if (userNumber)
    screen = <GameScreen number={userNumber} finishGame={handleFinish} />;

  if (gameIsOver)
    screen = (
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
          resizeMode="covabboutaer"
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
