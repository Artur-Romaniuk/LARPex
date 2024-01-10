import { useQuery } from "react-query";
import repositoryContext from "../../logic/repositories/repositoryContext.ts";
import { useEffect, useState } from "react";
import DailyTimetableDto from "../../entities/DailyTimetableDto.ts";

interface UseTimeslotSelectorProps {
  day: string;

  hours?: number;
  minutes?: number;
  durationMinutes?: number;
}

export interface PossibleHours {
  start: Date;
  end: Date;
}

const useTimeslotSelector = (props: UseTimeslotSelectorProps) => {
  const timeslotsRepository = repositoryContext.injectTimeslotRepository();
  const timeslots = useQuery({
    queryKey: ["timeslots", props.day],
    queryFn: () => timeslotsRepository.getTimeSlotsFromDay(props.day),
  });

  const [possibleHours, setPossibleHours] = useState<PossibleHours[] | null>(
    null,
  );

  useEffect(() => {
    if (props.hours && props.minutes) {
      setHour(props.hours);
      setMinutes(props.minutes);
    }

    if (props.durationMinutes) {
      setDurationMinutes(props.durationMinutes);
    }
  }, [props, props.durationMinutes, props.hours, props.minutes]);

  const [hour, setHour] = useState<number>(props.hours ?? 0);
  const [minutes, setMinutes] = useState<number>(props.minutes ?? 0);
  const [error, setError] = useState<string>("");

  const [durationMinutes, setDurationMinutes] = useState<number>(
    props.durationMinutes ?? 0,
  );
  const [durationError, setDurationError] = useState<string>("");

  useEffect(() => {
    if (timeslots.data) {
      const possibleHours = getPossibleHours(timeslots.data);
      if (!possibleHours) {
        return;
      }

      setPossibleHours(possibleHours);
    }
  }, [timeslots.data]);

  const handleHourChangeValue = (newHour: number) => {
    if (newHour < 0 || newHour > 23) {
      return;
    }

    if (!timeslots.data) {
      return;
    }

    const date = new Date(timeslots.data.startHour);
    date.setHours(newHour);
    date.setMinutes(minutes);

    if (!possibleHours) {
      return;
    }

    let isIn = false;
    possibleHours?.forEach((possibleHour) => {
      if (
        possibleHour.start.getTime() <= date.getTime() &&
        possibleHour.end.getTime() >= date.getTime()
      ) {
        isIn = true;
        return;
      }
    });

    if (isIn) {
      setError("");
    } else {
      setError("Podana godzina jest niedostępna");
    }
    setHour(newHour);
  };
  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!timeslots.data) {
      return;
    }

    if (e.target.value === "") {
      setHour(0);
      return;
    }

    const newHour = e.target.valueAsNumber;
    handleHourChangeValue(newHour);
  };

  const handleMinutesChangeValue = (newMinutes: number) => {
    if (newMinutes < 0 || newMinutes > 59) {
      return;
    }

    if (!timeslots.data) {
      return;
    }

    const date = new Date(timeslots.data.startHour);
    date.setHours(hour);
    date.setMinutes(newMinutes);

    let isIn = false;
    possibleHours?.forEach((possibleHour) => {
      if (
        possibleHour.start.getTime() <= date.getTime() &&
        possibleHour.end.getTime() >= date.getTime()
      ) {
        isIn = true;
        return;
      }
    });

    if (isIn) {
      setError("");
    } else {
      setError("Podana godzina jest niedostępna");
    }
    setMinutes(newMinutes);
  };
  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!timeslots.data) {
      return;
    }

    const newMinutes = e.target.valueAsNumber;
    handleMinutesChangeValue(newMinutes);
  };

  const handleDurationMinutesChangeValue = (newDurationMinutes: number) => {
    if (!timeslots.data) {
      return;
    }

    const date = new Date(timeslots.data.startHour);
    date.setHours(hour);
    date.setMinutes(minutes);

    const newDate = new Date(date.getTime() + newDurationMinutes * 60 * 1000);

    let isIn = false;
    possibleHours?.forEach((possibleHour) => {
      if (
        possibleHour.start.getTime() <= newDate.getTime() &&
        possibleHour.end.getTime() >= newDate.getTime()
      ) {
        isIn = true;
        return;
      }
    });

    if (isIn) {
      setDurationError("");
    } else {
      setDurationError("Podany czas trwania jest za długi");
      return;
    }
    setDurationMinutes(newDurationMinutes);
  };
  const handleDurationMinutesChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!timeslots.data) {
      return;
    }

    if (e.target.value === "") {
      setDurationMinutes(0);
      setDurationError("Czas trwania nie może być pusty");
      return;
    }

    const newDurationMinutes = e.target.valueAsNumber;
    handleDurationMinutesChangeValue(newDurationMinutes);
  };

  return {
    hour,
    minutes,
    error,

    durationMinutes,
    durationError,

    possibleHours,

    handleHourChange,
    handleHourChangeValue,

    handleMinutesChange,
    handleMinutesChangeValue,

    handleDurationMinutesChange,
    handleDurationMinutesChangeValue,
  };
};

export default useTimeslotSelector;

const getPossibleHours = (
  timeslots: DailyTimetableDto,
): PossibleHours[] | null => {
  if (timeslots.availableTimeslots.length === 0) {
    return null;
  }
  const possibleHours: PossibleHours[] = [];

  timeslots.availableTimeslots.forEach((timeslot) => {
    const timeslotStart = new Date(timeslot.timeslotDatetime);
    const [hours, minutes] = timeslot.timeslotDuration.split(":");
    const timeslotEnd = new Date(
      timeslotStart.getTime() +
        Number.parseInt(hours) * 60 * 60 * 1000 +
        Number.parseInt(minutes) * 60 * 1000,
    );

    possibleHours.push({
      start: timeslotStart,
      end: timeslotEnd,
    });
  });

  return possibleHours;
};
