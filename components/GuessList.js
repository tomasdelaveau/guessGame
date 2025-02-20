import { FlatList, Text, StyleSheet, View } from "react-native";

export default function GuessList({ guesses }) {
  function renderFunction(itemData) {
    return (
      <View style={styles.guessBox} onStartShouldSetResponder={() => true}>
        <Text style={styles.text}>#{itemData.index + 1}</Text>
        <Text style={styles.text}>Oponent's guess: {itemData.item}</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={guesses}
      renderItem={renderFunction}
    />
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
