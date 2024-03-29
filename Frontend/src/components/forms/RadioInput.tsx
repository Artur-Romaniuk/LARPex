import { Form } from "react-bootstrap";

import "./styles/Input.scss";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  values: string[];
  setValue?: (index: number) => void;
  defaultValue?: string;
}

const RadioInput = (props: RadioProps) => {
  const { values, setValue, defaultValue, ...rest } = props;

  return (
    <div className={"input radio"}>
      <div className="title">
        <label htmlFor={rest.id}>{props.label}</label>
      </div>
      <Form className="box">
        <div className="mb-3">
          {values.map((v, index) => (
            <Form.Check
              className="radio-button"
              type="radio"
              key={v}
              id={v}
              label={v}
              onChange={() => setValue?.(index)}
              {...(defaultValue !== undefined && {
                checked: defaultValue === v,
              })}
            />
          ))}
        </div>
      </Form>
    </div>
  );
};

export default RadioInput;
