import { View, StyleSheet } from "react-native";

import NumberInput from "../components/NumberInput";
import Title from "../components/ui/Title";

export default function StartGameScreen({ onSet }) {
  return (
    <View style={styles.container}>
      <Title>Guess my Number</Title>
      <NumberInput onSet={(number) => onSet(number)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 150,
  },
});
