import { useState } from "react";

interface IUseNumberInput {
  initialValue: number;

  min?: number;
  max?: number;
}

const useNumberInput = (props: IUseNumberInput) => {
  const [value, setValue] = useState(props.initialValue);
  const [error, setError] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setValue(0);
      setError("Wartość nie może być pusta");
      return;
    }

    if (event.target.valueAsNumber === 0) {
      setValue(Number.parseInt(event.target.value.substring(0, 1)));
      return;
    }

    if (props.max && event.target.valueAsNumber > props.max) {
      setError(`Maksymalna wartość to ${props.max}`);
      return;
    }

    if (props.min && event.target.valueAsNumber < props.min) {
      setError(`Minimalna wartość to ${props.min}`);
    } else {
      setError("");
    }

    setValue(event.target.valueAsNumber);
  };

  return { value, error, onChange };
};

export default useNumberInput;
