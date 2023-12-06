import { ChangeEvent, useCallback, useState } from "react";

interface IUseTextAreaInput {
  initialValue: string;

  maxLength?: number;
  minLength?: number;
  pattern?: RegExp;
}

const useTextAreaInput = (props: IUseTextAreaInput) => {
  const [value, setValue] = useState(props.initialValue);
  const [error, setError] = useState<string>("");

  const onChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (props.maxLength && event.target.value.length > props.maxLength) {
        setError(`Maksymalna długość to ${props.maxLength}`);
        return;
      }

      if (props.pattern && !props.pattern.test(event.target.value)) {
        setError("Niepoprawny format");
        return;
      }

      if (props.minLength && event.target.value.length < props.minLength) {
        setError(`Minimalna długość to ${props.minLength}`);
      } else {
        setError("");
      }

      setValue(event.target.value);
    },
    [props.maxLength, props.minLength, props.pattern],
  );

  return { value, error, onChange };
};

export default useTextAreaInput;
