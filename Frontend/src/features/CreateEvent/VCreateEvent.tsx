import { useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import PageTitle from "../../components/ui/pageTItle/PageTitle.tsx";
import InputComp from "../../components/forms/Input/InputComp.tsx";
import { Calendar4Week, ChevronDown } from "react-bootstrap-icons";
import TextAreaComp from "../../components/forms/textAreaComp/TextAreaComp.tsx";
import ButtonComp from "../../components/ui/buttonComp/ButtonComp.tsx";
import CEventHandler from "../CEventHandler.ts";

const VCreateEvent = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { event, handleInputChange, handleTextAreaChange } = CEventHandler({
    id: Number.parseInt(id ?? "-1"),
  });

  return (
    <>
      <PageTitle title={"Utwórz wydarzenie"} />
      <Container className="d-flex mt-4 flex-row flex-grow-1 flex-wrap justify-content-around">
        <div>
          <InputComp
            label={"Nazwa wydarzenia"}
            typeInput={"blank"}
            placeholder={"Wprowadź nazwę wydarzenia"}
            name={"eventName"}
            value={event.eventName}
            setValue={handleInputChange}
          />
          <InputComp
            label={"Wybierz grę"}
            typeInput={"icon"}
            placeholder={"Wybierz grę"}
            icon={<ChevronDown />}
            name={"eventStatus"}
            value={event.eventStatus}
            setValue={handleInputChange}
          />
          <InputComp
            label={"Płatność od jednej osoby"}
            typeInput={"pln"}
            placeholder={"Wprowadź kwotę"}
            name={"eventDescription"}
            value={event.eventDescription}
            setValue={handleInputChange}
          />
          <InputComp
            label={"Wybierz lokalizację"}
            typeInput={"icon"}
            placeholder={"Wprowadź lokalizację"}
            icon={<ChevronDown />}
            name={"eventName"}
            value={event.eventName}
            setValue={handleInputChange}
          />
        </div>
        <div>
          <InputComp
            label={"Wybierz datę"}
            typeInput={"date"}
            placeholder={"Wprowadź datę"}
            icon={<Calendar4Week />}
            name={"date"}
            type={"datetime-local"}
            value={event.eventName}
            setValue={handleInputChange}
          />
          <InputComp
            id={"eventIcon"}
            label={"Wybierz ikonkę"}
            placeholder={"Wprowadź ikonkę"}
            className={"custom-file-upload"}
            typeInput={"date"}
            name={"icon"}
            type={"file"}
            value={""}
            setValue={handleInputChange}
          />
          {/*TODO - image display*/}
          <div className="image">
            <img src="/src/assets/gothicL.jpg" alt="icon name" />
          </div>
        </div>
        <div>
          <TextAreaComp
            label={"Opis"}
            value={event.eventName}
            setValue={handleTextAreaChange}
          />
        </div>
      </Container>
      <Container className="w-100 m-auto my-3 d-flex  justify-content-between">
        <ButtonComp
          text={"Anuluj"}
          onClick={() => {
            navigate(-1);
          }}
          classElem="cancel"
        />
        <ButtonComp text={"Utwórz"} onClick={() => {}} classElem="confirm" />
      </Container>
    </>
  );
};

export default VCreateEvent;