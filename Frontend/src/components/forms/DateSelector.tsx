import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";

import pl from "date-fns/locale/pl";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

registerLocale("pl", pl);

interface DateSelectorProps {
  label: string;
  value: Date;
  onChange: (value: Date) => void;
  error: string;
}

const DateSelector = (props: DateSelectorProps) => {
  const randomId = Math.random().toString(36).substring(7);

  return (
    <div className={"input date mb-3"}>
      <Form.Label htmlFor={randomId}>{props.label}</Form.Label>
      <InputGroup id={randomId} className={"w-100 m-0 p-0"}>
        <DatePicker
          className={"form-control"}
          locale="pl"
          selected={props.value}
          onChange={props.onChange}
          dateFormat="P"
        />
      </InputGroup>
      {props.error && <div className="error">{props.error} </div>}
    </div>
  );
};

export default DateSelector;
