import {
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  View,
  StyleSheet,
} from "react-native";
import NumberInput from "../components/NumberInput";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function StartGameScreen(props) {
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Text style={styles.text}>Guess my Number</Text>
        <NumberInput onSet={(number) => props.onSet(number)} />
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 150,
  },
  text: {
    borderWidth: 2,
    borderColor: "black",
    color: "black",
    fontSize: 30,
    padding: 10,
    marginBottom: 40,
  },
});
