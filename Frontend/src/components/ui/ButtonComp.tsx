import { Button } from "react-bootstrap";
import "./styles/button.scss";

interface ButtonCompProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  classElem?: "confirm" | "cancel";
  width?: string;
  height?: string;
}

const ButtonComp = (props: ButtonCompProps) => {
  const { text, onClick, classElem, width, height} = props;

  return (
    <Button
      className={`button ${props.className} ${classElem}`}
      style={{ minWidth: "150px", width: width ? width : "auto",
      height: height ? height : "auto" }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonComp;
