import { View, Text, StyleSheet } from "react-native";

import Button from "../components/Button";
import Title from "../components/ui/Title";

export default function GameOverScreen({ number, rounds, startNewGame }) {
  return (
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <Text>
        Your phone needed {rounds} rounds to guess the number {number}.
      </Text>
      <Button title="New Game" onPress={startNewGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
