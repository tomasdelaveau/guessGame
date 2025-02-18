import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import Button from "./Button";
import Card from "./ui/Card";

export default function HigherLower({ onPress }) {
  return (
    <Card prompt="Higher or Lower?">
      <View style={styles.buttonContainer}>
        <Button title="Lower" onPress={onPress.bind(this, "lower")} />
        <Button title="Higher" onPress={onPress.bind(this, "higher")} />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
});
