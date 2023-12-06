import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

interface FileInputProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = ({ label, onChange }: FileInputProps) => {
  const randomId = Math.random().toString(36).substring(7);

  return (
    <div className={"input select"}>
      <Form.Label htmlFor={randomId}>{label}</Form.Label>
      <InputGroup id={randomId} className="mb-3">
        <Form.Control type="file" onChange={onChange} />
      </InputGroup>
    </div>
  );
};

export default FileInput;
