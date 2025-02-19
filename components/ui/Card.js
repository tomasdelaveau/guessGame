import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

export default function Card({ children, prompt }) {
  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>{prompt}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: Colors.primary800,
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    justifyContent: "space-between",
    elevation: 4, //android
    shadowColor: "black", //ios
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    marginTop: 20,
    marginBottom: 10,
  },
  promptText: {
    color: Colors.accent500,
    fontSize: 25,
    marginBottom: 20,
  },
});
