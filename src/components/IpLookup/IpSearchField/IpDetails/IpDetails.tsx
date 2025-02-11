import { Tooltip } from "@mui/material";
import { CountryClock } from "./CountryClock/CountryClock";
import { FC } from "react";
import { StyledBoxImage, StyledBoxWrapper } from "./IpDetails.styles";

interface IpDetailsProps {
  timezone: string;
  countryCode: string;
  countryName: string;
  city: string;
}
export const IpDetails: FC<IpDetailsProps> = ({
  countryCode,
  timezone,
  countryName,
  city,
}) => {
  return (
    <StyledBoxWrapper>
      <Tooltip title={`${countryName} / ${city}`} arrow placement="top">
        <StyledBoxImage
          data-testid="country-image"
          sx={{ width: "40px" }}
          component="img"
          src={`https://flagsapi.com/${countryCode}/flat/64.png`}
        />
      </Tooltip>

      <CountryClock timezone={timezone} />
    </StyledBoxWrapper>
  );
};
