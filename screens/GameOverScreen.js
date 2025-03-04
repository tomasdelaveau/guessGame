import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";

import Button from "../components/Button";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

export default function GameOverScreen({ number, rounds, startNewGame }) {
  const { height } = useWindowDimensions();

  const title = <Title>Game Over!</Title>;

  const image = (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../assets/images/success.png")}
      />
    </View>
  );

  const summaryAndRestart = (
    <>
      <Text style={styles.summary}>
        Your phone needed <Text style={styles.highlighted}>{rounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlighted}>{number}</Text>.
      </Text>
      <Button title="New Game" onPress={startNewGame} />
    </>
  );

  return (
    <View style={styles.container}>
      {title}
      {height > 400 ? image : null}
      {summaryAndRestart}
    </View>
  );
}

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: deviceHeight < 650 ? "75%" : "90%",
    aspectRatio: 1,
    borderRadius: "50%",
    borderWidth: 4,
    borderColor: Colors.primary500,
    margin: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  highlighted: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
