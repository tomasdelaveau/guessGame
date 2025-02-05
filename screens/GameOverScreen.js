import { View, Text } from "react-native";

export default function GameOverScreen(props) {
  return (
    <View>
      <Text>Game Over!</Text>
      <Text>
        Your phone needed {props.rounds} rounds to guess the number{" "}
        {props.number}.
      </Text>
    </View>
  );
}
