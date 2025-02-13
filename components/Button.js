import { Text, StyleSheet, Pressable, View } from "react-native";
import Colors from "../constants/colors";

export default function Button(props) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={props.onPress}
        android_ripple={{ color: Colors.primary600 }}
        style={({ pressed }) =>
          pressed && { backgroundColor: Colors.primary600 }
        }
      >
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    color: "white",
    textAlign: "center",
  },
  container: {
    backgroundColor: Colors.primary500,
    borderRadius: 20,
    width: "47.5%",
    elevation: 2,
    overflow: "hidden",
  },
});
