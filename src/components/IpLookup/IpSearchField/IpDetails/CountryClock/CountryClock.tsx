import { FC, useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Tooltip, Typography } from "@mui/material";
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
        <StyledTypography>{currentTime}</StyledTypography>
      </StyledBoxWrapper>
    </Tooltip>
  );
};
