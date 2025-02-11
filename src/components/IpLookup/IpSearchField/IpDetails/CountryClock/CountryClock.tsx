import { FC, useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import { getCurrentTime } from "../../../../../utils/time";
import {
  StyledBoxWrapper,
  StyledClockIcon,
  StyledTypography,
} from "./CountryClock.styles";

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

  return (
    <Tooltip title={timezone} placement="top" arrow>
      <StyledBoxWrapper>
        <StyledClockIcon />
        <StyledTypography data-testid="country-local-time">
          {currentTime}
        </StyledTypography>
      </StyledBoxWrapper>
    </Tooltip>
  );
};
