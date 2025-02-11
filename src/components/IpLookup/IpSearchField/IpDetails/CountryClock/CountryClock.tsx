import { FC, useEffect, useState } from "react";
import { Tooltip } from "@mui/material";
import { getCurrentTime } from "../../../../../utils/time";
import {
  StyledBoxWrapper,
  StyledClockIcon,
  StyledTypography,
} from "./CountryClock.styles";
import { COUNTRY_CLOCK_TYPOGRAPHY_TEST_ID } from "../../../../../utils/data-test-ids";

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
        <StyledTypography data-testid={COUNTRY_CLOCK_TYPOGRAPHY_TEST_ID}>
          {currentTime}
        </StyledTypography>
      </StyledBoxWrapper>
    </Tooltip>
  );
};
