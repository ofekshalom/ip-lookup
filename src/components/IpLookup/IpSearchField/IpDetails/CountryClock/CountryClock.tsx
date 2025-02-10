import { FC, useEffect, useState } from "react";

import { Typography } from "@mui/material";
import { getCurrentTime } from "../../../../../utils/time";

interface CountryClockProps {
  timezone: string;
}

export const CountryClock: FC<CountryClockProps> = ({ timezone }) => {
  const [currentTime, setCurrentTime] = useState<string>(
    getCurrentTime(timezone)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      const time = getCurrentTime(timezone);
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  return <Typography>{currentTime}</Typography>;
};
