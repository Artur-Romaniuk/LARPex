import { useState } from "react";

interface UseDateSelectorProps {
  initialDate: Date;
}

const useDateSelector = (props: UseDateSelectorProps) => {
  const [date, setDate] = useState(props.initialDate || new Date());
  const [error, setError] = useState("");
  const startDate = new Date();

  const handleDateChange = (date: Date) => {
    if (date < startDate) {
      setError("Nie można wybrać daty z przeszłości.");
      return;
    }

    setError("");
    // const newDate = new Date(date.getTime() - 24 * 60 * 60 * 1000);
    setDate(date);
  };

  return { date, error, startDate, handleDateChange };
};

export default useDateSelector;
