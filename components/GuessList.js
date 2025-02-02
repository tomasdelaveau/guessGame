import { ScrollView, Text, StyleSheet, View } from "react-native";

export default function GuessList(props) {
  return (
    <ScrollView
      style={{ width: "100%" }}
      contentContainerStyle={styles.contentContainer}
    >
      {props.guesses.map((guess, index) => (
        <View key={index} style={styles.guessBox}>
          <Text>#{index + 1}</Text>
          <Text>Oponent's guess: {guess}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
  },
  guessBox: {
    backgroundColor: "#ffe9a2",
    padding: 10,
    borderColor: "#613100",
    borderWidth: 1,
    borderRadius: 20,
    width: "85%",
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
