import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons";
import CEventHandler from "../controllers/CEventHandler.ts";
import PageTitle from "../../../components/ui/pageTItle/PageTitle.tsx";
import InputComp from "../../../components/forms/Input/InputComp.tsx";
import TextAreaComp from "../../../components/forms/textAreaComp/TextAreaComp.tsx";
import ButtonComp from "../../../components/ui/buttonComp/ButtonComp.tsx";
import DateInput from "../../../components/forms/DateInput";

const VUpdateEvent = () => {
  const { id } = useParams<{ id: string }>();
  const {
    event,
    eventLoading,
    handleInputChange,
    handleTextAreaChange,
    handleDateInputChange,
    updateEvent,
    updateEventLoading,
    goBack,
    options,
    games,
  } = CEventHandler({
    id: Number.parseInt(id ?? "-1"),
  });

  const gameNames = games.map((game) => game.name);

  if (eventLoading.isLoading) return <div>loading</div>;
  return (
    <>
      <PageTitle title={"Edytuj wydarzenie"} />
      <Container className="d-flex mt-4 flex-row flex-grow-1 flex-wrap justify-content-around">
        <div>
          <InputComp
            label={"Nazwa wydarzenia"}
            typeInput={"datalist"}
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
            name={"game"}
            value={event.game}
            setValue={handleInputChange}
            datalistOptions={gameNames}
          />
          <InputComp
            label={"Płatność od jednej osoby"}
            typeInput={"pln"}
            placeholder={"Wprowadź kwotę"}
            name={"payment"}
            value={event.payment}
            setValue={handleInputChange}
          />
          <InputComp
            datalistId={"locationList"}
            label={"Wybierz lokalizację"}
            typeInput={"datalist"}
            placeholder={"Wprowadź lokalizację"}
            icon={<ChevronDown />}
            name={"location"}
            value={event.location}
            setValue={handleInputChange}
            datalistOptions={options}
          />
        </div>
        <div>
          <DateInput
            name={"date"}
            className={"w-100"}
            label={"Wybierz datę"}
            placeholder={"Wybierz datę"}
            valueDate={event.date ?? new Date()}
            setValueDate={handleDateInputChange}
          />
          <InputComp
            id={"eventIcon"}
            label={"Wybierz url ikony"}
            placeholder={"Wprowadź url ikony"}
            // className={"custom-file-upload"}
            typeInput={"blank"}
            name={"img"}
            type={"text"}
            value={event.img}
            setValue={handleInputChange}
          />
          {/*TODO - image display*/}
          <div className="image">
            {event.img && <img src={event.img} alt="icon name" />}
          </div>
        </div>
        <div>
          <TextAreaComp
            label={"Opis"}
            value={event.eventDescription}
            setValue={handleTextAreaChange}
          />
        </div>
      </Container>
      <Container className="w-100 m-auto my-3 d-flex  justify-content-between">
        <ButtonComp text={"Anuluj"} onClick={goBack} classElem="cancel" />
        <ButtonComp
          text={"Zapisz"}
          onClick={() => updateEvent()}
          classElem="confirm"
        />
        {
          //TODO - loading
          updateEventLoading.isLoading && <div>loading</div>
        }
        <ButtonComp
          text={"Test na azure :)"}
          onClick={() => updateEvent()}
          classElem="confirm"
        />
      </Container>
    </>
  );
};

export default VUpdateEvent;
