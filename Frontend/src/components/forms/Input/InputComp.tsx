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

  return (
    <div className={""}>
      <label htmlFor={rest.id}>{props.label}</label>
      <InputGroup id={rest.id} className="mb-3">
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
        {typeInput === "datalist" &&
          datalistOptions &&
          datalistOptions.length > 0 && (
            <>
              <InputGroup.Text className={"icon"}>{icon}</InputGroup.Text>
              <datalist id={datalistId}>
                {datalistOptions.map((option) => (
                  <option key={option} value={option} />
                ))}
              </datalist>
            </>
          )}
      </InputGroup>
    </div>
  );
};

export default InputComp;
