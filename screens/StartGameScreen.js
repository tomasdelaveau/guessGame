import {
  View,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";

import NumberInput from "../components/NumberInput";
import Title from "../components/ui/Title";

export default function StartGameScreen({ onSet }) {
  const { height } = useWindowDimensions();

  const justify = height > 400 ? "center" : "flex-start";
  const margin = height > 400 ? 150 : height > 380 ? 50 : 25;
  const computedStyle = { justifyContent: justify, marginTop: margin };

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={[styles.container, computedStyle]}>
        <Title>Guess my Number</Title>
        <NumberInput onSet={(number) => onSet(number)} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
