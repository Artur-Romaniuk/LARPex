import Form from "react-bootstrap/Form";
import { useUser } from "../../logic/contexts/userContext.tsx";

interface ChangeUserSelectProps {
  className?: string;
}

const ChangeUserSelect = (props: ChangeUserSelectProps) => {
  const user = useUser();

  return (
    <Form.Select className={props.className} style={{ height: "40px" }}>
      {user.users.map((userEmail) => (
        <option
          key={userEmail}
          value={userEmail}
          onClick={() => user.handleUserChange(userEmail)}
        >
          {userEmail}
        </option>
      ))}
    </Form.Select>
  );
};

export default ChangeUserSelect;
