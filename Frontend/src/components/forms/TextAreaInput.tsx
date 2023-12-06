import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

interface TextAreaInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value: string;
  setValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: string;
}

const TextAreaInput = (props: TextAreaInputProps) => {
  const randomId = Math.random().toString(36).substring(7);

  return (
    <div className={"input textarea mb-3"}>
      <Form.Label htmlFor={randomId}>{props.label}</Form.Label>
      <InputGroup id={randomId}>
        <Form.Control
          as={"textarea"}
          rows={10}
          name={props.name}
          value={props.value}
          onChange={props.setValue}
          placeholder={props.placeholder}
        />
      </InputGroup>
      {props.error && <div className="error">{props.error} </div>}
    </div>
  );
};

export default TextAreaInput;
