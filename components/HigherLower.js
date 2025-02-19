import { Ionicons } from "@expo/vector-icons";

import Button from "./Button";
import Card from "./ui/Card";
import ButtonsContainer from "./ui/ButtonsContainer";

export default function HigherLower({ onPress }) {
  return (
    <Card prompt="Higher or Lower?">
      <ButtonsContainer>
        <Button
          title={<Ionicons name="remove" size={24} />}
          onPress={onPress.bind(this, "lower")}
        />
        <Button
          title={<Ionicons name="add" size={24} />}
          onPress={onPress.bind(this, "higher")}
        />
      </ButtonsContainer>
    </Card>
  );
}
