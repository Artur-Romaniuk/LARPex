import { InputGroup, Form, Alert } from "react-bootstrap";
import "./input.scss";
import { ChangeEvent, useState, useEffect } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  typeInput: "blank" | "icon" | "pln" | "date" | "datalist";
  icon?: JSX.Element;
  datalistOptions?: string[];
  datalistId?: string;
}

const InputComp = (props: InputProps) => {
  const {
    typeInput,
    icon,
    value,
    setValue,
    datalistOptions,
    datalistId,
    ...rest
  } = props;
  const [error, setError] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (typeInput != "pln" && value?.trim() === "" ) {
      setError("Wypełnij pole");
    } else {
      setError(null);
    }
  }, [typeInput, value]);

  useEffect(() => {
    if (typeInput === "pln" && !/^\d+$/.test(value?.trim()) && value === "") {
      setError("Wprowadź liczbę");
    } 
  }, [typeInput, value]);

  useEffect(() => {
    if (typeInput === "datalist") {
      // Filter the suggestions based on the current input value
      const filteredSuggestions = datalistOptions
        ? datalistOptions.filter((option) =>
            option?.toLowerCase()?.includes(value?.toLowerCase())
          )
        : [];
      setSuggestions(filteredSuggestions);
    }
  }, [typeInput, value, datalistOptions]);

  return (
    <div className={"inputElem"}>
      <label htmlFor={rest.id}>{props.label}</label>
      <InputGroup className="mb-3">
        <Form.Control
          name={rest.name}
          value={value}
          onChange={setValue}
          type={rest.type}
          placeholder={rest.placeholder}
          list={typeInput === "datalist" ? datalistId : undefined}
        />
        {typeInput === "icon" && (
          <InputGroup.Text className={"icon"}>{icon}</InputGroup.Text>
        )}
        {typeInput === "pln" && (
          <InputGroup.Text className={"icon"}>PLN</InputGroup.Text>
        )}
        {typeInput === "datalist" && suggestions.length > 0 && (
          <>
            <InputGroup.Text className={"icon"}>{icon}</InputGroup.Text>
            <datalist id={datalistId}>
              {suggestions.map((option) => (
                <option key={option} value={option} />
              ))}
            </datalist>
          </>
        )}
      </InputGroup>
      {error && <Alert variant="danger">{error}</Alert>}
    </div>
  );
};

export default InputComp;
