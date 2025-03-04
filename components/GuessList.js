import { FlatList, Text, StyleSheet, View } from "react-native";

import Colors from "../constants/Colors";

export default function GuessList({ guesses }) {
  function renderFunction(itemData) {
    return (
      <View style={styles.guessBox} onStartShouldSetResponder={() => true}>
        <Text style={styles.text}>#{guesses.length - itemData.index}</Text>
        <Text style={styles.text}>Oponent's guess: {itemData.item}</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={guesses.reverse()}
      renderItem={renderFunction}
      keyExtractor={(item) => item}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
  },
  guessBox: {
    backgroundColor: Colors.accent500,
    padding: 10,
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 20,
    width: "85%",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
  },
  text: {
    fontSize: 20,
    fontFamily: "open-sans",
  },
});
