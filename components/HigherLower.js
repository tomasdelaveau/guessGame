import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import Button from "./Button";

export default function HigherLower({ onPress }) {
  return (
    <View style={styles.promptBox}>
      <Text style={styles.promptText}>Higher or Lower?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Lower" onPress={onPress.bind(this, "lower")} />
        <Button title="Higher" onPress={onPress.bind(this, "higher")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  promptBox: {
    width: "80%",
    height: 125,
    backgroundColor: "#3C021E",
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  promptText: {
    color: Colors.accent500,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
});
