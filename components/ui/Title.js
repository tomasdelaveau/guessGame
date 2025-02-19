import { Text, StyleSheet } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.topText}>{children}</Text>;
}

const styles = StyleSheet.create({
  topText: {
    color: "white",
    fontSize: 30,
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
    width: "80%",
    textAlign: "center",
    marginBottom: 20,
  },
});
