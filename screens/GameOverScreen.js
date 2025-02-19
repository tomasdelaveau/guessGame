import { View, Text, StyleSheet, Image } from "react-native";

import Button from "../components/Button";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

export default function GameOverScreen({ number, rounds, startNewGame }) {
  return (
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
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
    width: "100%",
  },
  imageContainer: {
    width: "90%",
    aspectRatio: 1,
    borderRadius: "50%",
    borderWidth: 4,
    borderColor: Colors.primary500,
    margin: 30,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
