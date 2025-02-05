import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

export default function GameOverScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Game Over!</Text>
      <Text>
        Your phone needed {props.rounds} rounds to guess the number{" "}
        {props.number}.
      </Text>
      <Button title="New Game" onPress={props.startNewGame} />
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
