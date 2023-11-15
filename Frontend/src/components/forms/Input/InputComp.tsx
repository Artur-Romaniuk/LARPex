import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";

import "./input.scss";
import { ChangeEvent } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  setValue: (e: ChangeEvent<HTMLInputElement>) => void;
  typeInput: "blank" | "icon" | "pln" | "date";
  icon?: JSX.Element;
}

const InputComp = (props: InputProps) => {
  const { typeInput, icon, value, setValue, ...rest } = props;

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
        />
        {
          {
            blank: null,
            date: null,
            icon: <InputGroup.Text className={"icon"}>{icon}</InputGroup.Text>,
            pln: <InputGroup.Text className={"icon"}>PLN</InputGroup.Text>,
          }[typeInput]
        }
      </InputGroup>
    </div>
  );
};

export default InputComp;
