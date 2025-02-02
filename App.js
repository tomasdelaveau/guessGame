import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  return (
    <>
      <StatusBar style="auto" />
      {!userNumber && (
        <StartGameScreen onSet={(number) => setUserNumber(number)} />
      )}
      {userNumber && <GameScreen />}
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
