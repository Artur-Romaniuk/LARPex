import { useNavigate, useParams } from "react-router-dom";
import CEventHandler from "../CEventHandler.ts";
import { Container } from "react-bootstrap";
import PageTitle from "../../components/ui/pageTItle/PageTitle.tsx";
import InputComp from "../../components/forms/Input/InputComp.tsx";
import { Calendar4Week, ChevronDown } from "react-bootstrap-icons";
import TextAreaComp from "../../components/forms/textAreaComp/TextAreaComp.tsx";
import ButtonComp from "../../components/ui/buttonComp/ButtonComp.tsx";

const VUpdateEvent = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    event,
    eventLoading,
    handleInputChange,
    handleTextAreaChange,
    updateEvent,
    updateEventLoading,
    options, 
    games
  } = CEventHandler({
    id: Number.parseInt(id ?? "-1"),
  });

  const gameNames = games.map(game =>  game.name);

  if (eventLoading.isLoading) return <div>loading</div>;
  return (
    <>
      <PageTitle title={"Edytuj wydarzenie"} />
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
            datalistId={"gameList"}
            label={"Wybierz grę"}
            typeInput={"datalist"}
            placeholder={"Wybierz grę"}
            icon={<ChevronDown />}
            name={"eventStatus"}
            value={event.eventStatus}
            setValue={handleInputChange}
            datalistOptions={gameNames}
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
            datalistId={"locationList"}
            label={"Wybierz lokalizację"}
            typeInput={"datalist"}
            placeholder={"Wprowadź lokalizację"}
            icon={<ChevronDown />}
            name={"eventName"}
            value={event.eventName}
            setValue={handleInputChange}
            datalistOptions={options}
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
        <ButtonComp
          text={"Utwórz"}
          onClick={() => updateEvent()}
          classElem="confirm"
        />
        {
          //TODO - loading
          updateEventLoading.isLoading && <div>loading</div>
        }
      </Container>
    </>
  );
};

export default VUpdateEvent;
