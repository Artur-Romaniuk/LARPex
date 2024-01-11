import Form from "react-bootstrap/Form";
import { useUser } from "../../logic/contexts/userContext.tsx";

interface ChangeUserSelectProps {
  className?: string;
}

const ChangeUserSelect = (props: ChangeUserSelectProps) => {
  const user = useUser();

  return (
    <Form.Select
      className={props.className}
      style={{ height: "40px" }}
      onChange={user.handleSelectUser}
    >
      {user.getUsers.data?.map((userDto) => (
        <option key={userDto.userId} value={userDto.userId}>
          {userDto.userEmail}
        </option>
      ))}
    </Form.Select>
  );
};

export default ChangeUserSelect;
