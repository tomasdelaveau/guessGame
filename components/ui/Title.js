import { Text, StyleSheet, useWindowDimensions } from "react-native";

export default function Title({ children }) {
  const { height } = useWindowDimensions();
  const margin = height < 380 ? 10 : 20;

  return (
    <Text style={[styles.topText, { marginBottom: margin }]}>{children}</Text>
  );
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
  },
});
