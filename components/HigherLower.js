import Button from "./Button";
import Card from "./ui/Card";
import ButtonsContainer from "./ui/ButtonsContainer";

export default function HigherLower({ onPress }) {
  return (
    <Card prompt="Higher or Lower?">
      <ButtonsContainer>
        <Button title="Lower" onPress={onPress.bind(this, "lower")} />
        <Button title="Higher" onPress={onPress.bind(this, "higher")} />
      </ButtonsContainer>
    </Card>
  );
}
