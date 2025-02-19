import { ScrollView, Text, StyleSheet, View } from "react-native";

export default function GuessList({ guesses }) {
  return (
    <ScrollView
      style={{ width: "100%" }}
      contentContainerStyle={styles.contentContainer}
    >
      {guesses
        .map((guess, index) => (
          <View key={index} style={styles.guessBox}>
            <Text style={styles.text}>#{index + 1}</Text>
            <Text style={styles.text}>Oponent's guess: {guess}</Text>
          </View>
        ))
        .reverse()}
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
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
  },
});
