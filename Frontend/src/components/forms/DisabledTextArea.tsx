import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

interface DisabledInputProps {
  label: string;
  value: string;
}

const DisabledTextArea = (props: DisabledInputProps) => {
  const randomId = Math.random().toString(36).substring(7);
  const { label, value } = props;

  return (
    <div className={"input textarea mb-3"}>
      <Form.Label htmlFor={randomId}>{label}</Form.Label>
      <InputGroup id={randomId}>
        <Form.Control as={"textarea"} rows={5} value={value} disabled />
      </InputGroup>
    </div>
  );
};

export default DisabledTextArea;
