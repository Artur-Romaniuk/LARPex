import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CEditHandler from "../controllers/CEditHandler.ts";
import PageTitle from "../../../components/ui/PageTitle.tsx";
import ButtonComp from "../../../components/ui/ButtonComp.tsx";
import TextInput from "../../../components/forms/TextInput.tsx";
import SelectInput from "../../../components/forms/SelectInput.tsx";
import DateSelector from "../../../components/forms/DateSelector.tsx";
import TimeslotPicker from "../../../components/forms/TimeslotPicker.tsx";
import FileInput from "../../../components/forms/FileInput.tsx";
import TextAreaInput from "../../../components/forms/TextAreaInput.tsx";
import { API_HOST, IMAGE_HOST } from "../../../config/config.ts";
import DisabledInput from "../../../components/forms/DisabledInput.tsx";

const VUpdateEvent = () => {
  const { id } = useParams<{ id: string }>();
  const {
    editEvent,
    locations,
    games,

    gameName,
    dateSelector,
    numberOfPlayers,
    description,
    timeslotSelector,
    icon,
    globalError,

    updateEventExec,
    goBack,
  } = CEditHandler({
    id: Number.parseInt(id ?? "-1"),
  });

  if (locations.getLocations.isLoading && games.getGames.data) {
    return <div>loading</div>;
  }

  return (
    <>
      <PageTitle title={"Edytuj wydarzenie"} />
      <Container className="d-flex mt-4 flex-row flex-grow-1 flex-wrap justify-content-around">
        <div>
          <TextInput
            value={gameName.value}
            label={"Nazwa wydarzenia"}
            error={gameName.error}
            onChange={gameName.onChange}
            placeholder={"Wprowadź nazwę wydarzenia"}
          />

          <DisabledInput
            label={"Wybierz rodzaj gry"}
            value={games.selectedGameName || ""}
          />

          <DisabledInput
            label={"Wybierz lokalizację"}
            value={locations.selectedLocationName || ""}
          />

          <DisabledInput
            label={"Wprowadź liczbę graczy"}
            value={editEvent.getEvent.data?.maxParticipants.toString() ?? ""}
          />
        </div>
        <div>
          <DisabledInput
            label={"Wybierz dzień"}
            // YYYY MM DD format
            value={dateSelector.date.toISOString().split("T")[0]}
          />
          <TimeslotPicker
            label={"Wybierz godzinę"}
            hours={timeslotSelector.hour}
            minutes={timeslotSelector.minutes}
            duration={timeslotSelector.durationMinutes}
            error={timeslotSelector.error}
            hourChange={timeslotSelector.handleHourChange}
            minutesChange={timeslotSelector.handleMinutesChange}
            durationChange={timeslotSelector.handleDurationMinutesChange}
            possibleHours={timeslotSelector.possibleHours || []}
            disabled={true}
          />
          <DisabledInput
            label={"Czas trwania w minutach"}
            value={timeslotSelector.durationMinutes.toString()}
          />

          <FileInput label={"Wprowadź ikone"} onChange={icon.handleChange} />
          {icon.preview && (
            <>
              <div>Nowa ikona:</div>
              <img src={icon.preview} alt="icon name" className="image" />
            </>
          )}
          {editEvent.getEvent.data?.icon && (
            <>
              <div>Obecna ikona:</div>
              <img
                src={`${IMAGE_HOST}/${editEvent.getEvent.data?.icon}`}
                className="image"
              />
            </>
          )}
        </div>
        <div>
          <TextAreaInput
            label={"Wprowadź opis"}
            value={description.value}
            setValue={description.onChange}
            error={description.error}
            placeholder={"Wprowadź opis"}
          />
        </div>
        <p className={"globalError"}>
          <i>{globalError}</i>
        </p>
      </Container>
      <Container className="w-100 m-auto my-3 d-flex  justify-content-between">
        <ButtonComp text={"Anuluj"} onClick={goBack} classElem="cancel" />
        <ButtonComp
          text={"Zapisz"}
          onClick={() => updateEventExec()}
          classElem="confirm"
        />
      </Container>
    </>
  );
};

export default VUpdateEvent;
