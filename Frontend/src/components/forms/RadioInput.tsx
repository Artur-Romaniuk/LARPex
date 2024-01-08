import { Form } from "react-bootstrap";

import "./styles/Input.scss";
import { ChangeEvent } from "react";

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  key: string;
  label: string;
  values: string[];
  setValue?: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string; 
}

  const RadioInput = (props: RadioProps) => {
    const { key, values, setValue, defaultValue, ...rest } = props;
  
    return (
      <div className={"input radio"}>
        <div className="title"><label htmlFor={rest.id}>{props.label}</label></div>
        <Form className="box">
          <div key={key} className="mb-3">
            {values.map((v) => (
              <Form.Check
                className="radio-button"
                type="radio"
                name={`${key}-group`}
                id={v}
                label={v}
                onChange={setValue}
                {...(defaultValue !== undefined && { checked: defaultValue === v })}
              />
            ))}
          </div>
        </Form>
      </div>
    );
  };
  
  export default RadioInput;
  