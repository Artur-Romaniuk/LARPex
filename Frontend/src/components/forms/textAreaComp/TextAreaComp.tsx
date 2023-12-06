import { ChangeEvent } from "react";

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value: string;
  setValue: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaComp = (props: InputProps) => {
  const { label, value, setValue, ...rest } = props;

  return (
    <div className="d-flex flex-column inputElem">
      <label htmlFor="textarea">{label}</label>
      <textarea
        id={"textarea"}
        name={rest.name}
        defaultValue={value}
        onChange={setValue}
        placeholder={"Wprowadź opis wydarzenia"}
      />
    </div>
  );
};

export default TextAreaComp;
