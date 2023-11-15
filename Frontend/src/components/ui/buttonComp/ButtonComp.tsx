import { Button } from "react-bootstrap";

interface ButtonCompProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  onClick: () => void;
}

const ButtonComp = (props: ButtonCompProps) => {
  const { text, onClick } = props;

  return (
    <Button className={props.className} onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonComp;
