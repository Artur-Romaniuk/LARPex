import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { PossibleHours } from "../../features/hooks/useTimeslotSelector.ts";
import { useState } from "react";
import { InfoCircle } from "react-bootstrap-icons";

interface TimeslotPickerProps {
  label: string;

  hours: number;
  minutes: number;
  duration: number;
  error: string;
  possibleHours: Array<PossibleHours>;

  hourChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minutesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  durationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TimeslotPicker = (props: TimeslotPickerProps) => {
  const randomId = Math.random().toString(36).substring(7);
  const [show, setShow] = useState(false);

  const hoursWithOutLeadingZero = props.hours.toString().padStart(2, "0");
  const minutesWithOutLeadingZero = props.minutes.toString().padStart(2, "0");

  return (
    <div className={"input timeslot"}>
      <Form.Label
        htmlFor={randomId}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {props.label} <InfoCircle />
      </Form.Label>
      <InputGroup id={randomId} className="mb-3">
        <Form.Control
          className={"time"}
          type={"number"}
          value={hoursWithOutLeadingZero}
          onChange={props.hourChange}
        />
        <Form.Control
          className={"time"}
          type={"number"}
          max={59}
          min={0}
          value={minutesWithOutLeadingZero}
          onChange={props.minutesChange}
        />
        {show && (
          <div className={"possibleHours"}>
            <span>Dostępne sloty</span>
            {props.possibleHours.map((time, idx) => (
              <div key={idx}>
                <span>
                  {time.start.getHours().toString().padStart(2, "0") +
                    ":" +
                    time.start.getMinutes().toString().padStart(2, "0")}
                </span>{" "}
                -{" "}
                <span>
                  {time.end.getHours().toString().padStart(2, "0") +
                    ":" +
                    time.end.getMinutes().toString().padStart(2, "0")}
                </span>
                <br />
              </div>
            ))}
          </div>
        )}
      </InputGroup>
      {props.error && <p className="error">{props.error}</p>}
    </div>
  );
};

export default TimeslotPicker;
