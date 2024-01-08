import RadioInput from "./RadioInput";
import { ChangeEvent } from "react";

interface CharacterSelectorProps {
  label: string;
  value: string;
  canSelect: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CharacterSelector = (props: CharacterSelectorProps) => {
  return (
    <RadioInput
      key={"chooseCharacter"}
      label={"Wybierz postać"}
      setValue={props.onChange}
      name={"characterSelector"}
      values={["Postać 1", "Postać 2", "Postać 3"]} // HACK: Tutaj pobieranie listy postaci
      defaultValue={props.canSelect ? undefined : "0"}
    />
  );
};

export default CharacterSelector;
