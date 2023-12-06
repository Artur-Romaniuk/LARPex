import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

import "./Input.scss";

interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<string>;
  value: string;
  label: string;
}

const SelectInput = (props: SelectInputProps) => {
  const { options, label } = props;
  const randomId = Math.random().toString(36).substring(7);

  const optionsMap = options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <div className={"input select"}>
      <Form.Label htmlFor={randomId}>{label}</Form.Label>
      <InputGroup id={randomId} className="mb-3">
        <Form.Select onChange={props.onChange} value={props.value}>
          {optionsMap}
        </Form.Select>
      </InputGroup>
    </div>
  );
};

export default SelectInput;
