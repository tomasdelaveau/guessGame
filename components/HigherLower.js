import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

export default function HigherLower(props) {
  return (
    <View style={styles.promptBox}>
      <Text style={styles.promptText}>Higher or Lower?</Text>
      <View style={styles.buttonContainer}>
        <Button title="Lower" onPress={props.onLower} />
        <Button title="Higher" onPress={props.onHigher} />
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
  },
  promptText: {
    color: "#D6A657",
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
});
