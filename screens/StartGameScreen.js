import { Text, View, StyleSheet } from "react-native";
import NumberInput from "../components/NumberInput";

export default function StartGameScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guess my Number</Text>
      <NumberInput onSet={(number) => props.onSet(number)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
