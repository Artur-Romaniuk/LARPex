import { InputGroup, Form } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import pl from "date-fns/locale/pl";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

registerLocale("pl", pl);

interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  valueDate: Date;
  setValueDate: (date: Date) => void;
}

const DateInput = (props: DateInputProps) => {
  const { type, ...rest } = props;

  if (type && type !== "date") {
    return (
      <div className={"inputElem"}>
        <label htmlFor={rest.id}>{props.label}</label>
        <InputGroup className="mb-3">
          <DatePicker
            className={"form-control w-100"}
            locale="pl"
            selected={props.valueDate}
            onChange={props.setValueDate}
            showTimeSelect
            dateFormat="Pp"
          />
        </InputGroup>
        <Form.Text className="text-danger">
          Błąd: Komponent DateInput wymaga inputa typu date.
        </Form.Text>
      </div>
    );
  }

  return (
    <div className={"inputElem"}>
      <label htmlFor={rest.id}>{props.label}</label>
      <InputGroup className="mb-3">
        <DatePicker
          className={"form-control w-100"}
          locale="pl"
          selected={props.valueDate}
          onChange={props.setValueDate}
          showTimeSelect
          dateFormat="Pp"
        />
      </InputGroup>
    </div>
  );
};

export default DateInput;
