import "./pageTitle.scss";
import { Container } from "react-bootstrap";

interface PageTitleProps {
  title: string;
}

const PageTitle = (props: PageTitleProps) => {
  const { title } = props;

  return (
    <div className="pageTitle">
      <Container>
        <h1>
          <i>{title}</i>
        </h1>
      </Container>
    </div>
  );
};

export default PageTitle;
