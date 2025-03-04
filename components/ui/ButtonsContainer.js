import { View, StyleSheet } from "react-native";

export default function ButtonsContainer({ children }) {
  return <View style={[styles.container]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
