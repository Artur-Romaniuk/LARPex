import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CEditHandler from "../controllers/CEditHandler.ts";
import PageTitle from "../../../components/ui/pageTItle/PageTitle.tsx";
import ButtonComp from "../../../components/ui/buttonComp/ButtonComp.tsx";
import TextInput from "../../../components/forms/TextInput.tsx";
import SelectInput from "../../../components/forms/SelectInput.tsx";
import DateSelector from "../../../components/forms/DateSelector.tsx";
import TimeslotPicker from "../../../components/forms/TimeslotPicker.tsx";
import FileInput from "../../../components/forms/FileInput.tsx";
import TextAreaInput from "../../../components/forms/TextAreaInput.tsx";

const VUpdateEvent = () => {
  const { id } = useParams<{ id: string }>();
  const {
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

          <SelectInput
            label={"Wybierz rodzaj gry"}
            options={games.gamesNames}
            value={(games.selectedGameName && games.selectedGameName) || ""}
            onChange={games.handleGameChange}
          />

          <SelectInput
            label={"Wybierz lokalizację"}
            value={
              (locations.selectedLocationName &&
                locations.selectedLocationName) ||
              ""
            }
            options={locations.locationsNames}
            onChange={locations.handleLocationChange}
          />

          <TextInput
            type={"number"}
            value={numberOfPlayers.value.toString()}
            label={"Wprowadź ilość graczy"}
            error={numberOfPlayers.error}
            onChange={numberOfPlayers.onChange}
            placeholder={"Wprowadź ilość graczy"}
          />
        </div>
        <div>
          <DateSelector
            label={"Wybierz dzień"}
            value={dateSelector.date}
            onChange={dateSelector.handleDateChange}
            error={dateSelector.error}
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
          />
          <TextInput
            type={"number"}
            value={timeslotSelector.durationMinutes.toString()}
            label={"Wprowadź czas w minutach"}
            error={timeslotSelector.durationError}
            onChange={timeslotSelector.handleDurationMinutesChange}
            placeholder={"Wprowadź czas"}
          />

          <FileInput label={"Wprowadź ikone"} onChange={icon.handleChange} />
          {icon.preview && (
            <img src={icon.preview} alt="icon name" className="image" />
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
