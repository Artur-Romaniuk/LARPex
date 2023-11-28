import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";

import "./input.scss";
import { ChangeEvent } from "react";

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
  const { typeInput, icon, value, setValue, datalistOptions, datalistId, ...rest } = props;

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
        {
          {
            blank: null,
            date: null,
            icon: <InputGroup.Text className={"icon"}>{icon}</InputGroup.Text>,
            pln: <InputGroup.Text className={"icon"}>PLN</InputGroup.Text>,
            datalist: datalistOptions && datalistId && (
              <datalist id={datalistId}>
                {datalistOptions.map(option => (
                  <option key={option} value={option} />
                ))}
              </datalist>
            ),
          }[typeInput]
        }
      </InputGroup>
    </div>
  );
};

export default InputComp;