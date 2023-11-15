import { useParams } from "react-router-dom";
import CEventHandler from "./CEventHandler.ts";
import { Container } from "react-bootstrap";
import PageTitle from "../../components/ui/pageTItle/PageTitle.tsx";
import InputComp from "../../components/forms/Input/InputComp.tsx";
import { Calendar4Week, ChevronDown } from "react-bootstrap-icons";
import TextAreaComp from "../../components/forms/textAreaComp/TextAreaComp.tsx";
import ButtonComp from "../../components/ui/buttonComp/ButtonComp.tsx";

const VUpdateEvent = () => {
  const { id } = useParams<{ id: string }>();
  const { updatedEvent, handleSetUpdateEvent, handleDescriptionChange } =
    CEventHandler({ id: Number.parseInt(id ?? "-1") });

  return (
    <>
      <PageTitle title={"Edytuj wydarzenie"} />
      <Container className="d-flex mt-4 flex-row flex-grow-1 flex-wrap justify-content-around">
        <div>
          <InputComp
            label={"Nazwa wydarzenia"}
            typeInput={"blank"}
            placeholder={"Wprowadź nazwę wydarzenia"}
            name={"name"}
            value={updatedEvent.name}
            setValue={handleSetUpdateEvent}
          />
          <InputComp
            label={"Wybierz grę"}
            typeInput={"icon"}
            placeholder={"Wybierz grę"}
            icon={<ChevronDown />}
            name={"game"}
            value={updatedEvent.game}
            setValue={handleSetUpdateEvent}
          />
          <InputComp
            label={"Płatność od jednej osoby"}
            typeInput={"pln"}
            placeholder={"Wprowadź kwotę"}
            name={"payment"}
            value={updatedEvent.payment}
            setValue={handleSetUpdateEvent}
          />
          <InputComp
            label={"Wybierz lokalizację"}
            typeInput={"icon"}
            placeholder={"Wprowadź lokalizację"}
            icon={<ChevronDown />}
            name={"location"}
            value={updatedEvent.location}
            setValue={handleSetUpdateEvent}
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
            value={updatedEvent.date}
            setValue={handleSetUpdateEvent}
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
            setValue={handleSetUpdateEvent}
          />
          {/*TODO - image display*/}
          <div className="image">
            <img src="/src/assets/gothicL.jpg" alt="icon name" />
          </div>
        </div>
        <div>
          <TextAreaComp
            label={"Opis"}
            value={updatedEvent.description}
            setValue={handleDescriptionChange}
          />
        </div>
      </Container>
      <Container className="w-100 m-auto my-3 d-flex  justify-content-between">
        <ButtonComp text={"Anuluj"} onClick={() => {}} classElem="cancel" />
        <ButtonComp text={"Utwórz"} onClick={() => {}} classElem="confirm" />
      </Container>
    </>
  );
};

export default VUpdateEvent;
