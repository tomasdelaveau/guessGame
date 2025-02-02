import { Text, StyleSheet, Pressable } from "react-native";

export default function Button(props) {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  container: {
    backgroundColor: "#72053C",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    width: "47.5%",
  },
});
