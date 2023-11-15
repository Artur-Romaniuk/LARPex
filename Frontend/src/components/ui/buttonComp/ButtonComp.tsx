import { Button } from "react-bootstrap";
import "./button.scss";

interface ButtonCompProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  classElem?: "confirm" | "cancel";
}

const ButtonComp = (props: ButtonCompProps) => {
  const { text, onClick, classElem } = props;

  return (
    <Button
      className={`button ${props.className} ${classElem}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonComp;
