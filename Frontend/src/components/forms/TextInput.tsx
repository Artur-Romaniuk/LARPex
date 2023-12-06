import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

import "./Input.scss";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label: string;
  error: string;
}

const TextInput = (props: TextInputProps) => {
  const randomId = Math.random().toString(36).substring(7);

  return (
    <div className={"input text mb-3"}>
      <Form.Label htmlFor={randomId}>{props.label}</Form.Label>
      <InputGroup id={randomId}>
        <Form.Control
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          placeholder={props.placeholder}
        />
      </InputGroup>
      {props.error && <div className="error">{props.error} </div>}
    </div>
  );
};

export default TextInput;
