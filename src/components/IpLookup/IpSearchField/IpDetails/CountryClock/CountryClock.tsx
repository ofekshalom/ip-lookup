import { FC, useEffect, useState } from "react";
import { toZonedTime } from "date-fns-tz";
import { format } from "date-fns";
import { Typography } from "@mui/material";

interface CountryClockProps {
  timezone: string;
}

export const CountryClock: FC<CountryClockProps> = ({ timezone }) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const zonedTime = toZonedTime(new Date(), timezone);
      const time = format(zonedTime, "HH:mm:ss");
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  return <Typography>{currentTime}</Typography>;
};
