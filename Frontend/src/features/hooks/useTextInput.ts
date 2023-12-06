import { ChangeEvent, useCallback, useEffect, useState } from "react";

interface IUseTextInput {
  initialValue: string;

  maxLength?: number;
  minLength?: number;
  pattern?: RegExp;
}

const useTextInput = (props: IUseTextInput) => {
  const [value, setValue] = useState(props.initialValue);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setValue(props.initialValue);
  }, [props.initialValue]);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
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

export default useTextInput;
