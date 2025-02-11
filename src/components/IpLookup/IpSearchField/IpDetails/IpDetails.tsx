import { Tooltip } from "@mui/material";
import { CountryClock } from "./CountryClock/CountryClock";
import { FC } from "react";
import { StyledBoxImage, StyledBoxWrapper } from "./IpDetails.styles";
import { COUNTRY_FLAG_IMAGE_TEST_ID } from "../../../../utils/data-test-ids";

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
          data-testid={COUNTRY_FLAG_IMAGE_TEST_ID}
          component="img"
          src={`https://flagsapi.com/${countryCode}/flat/64.png`}
        />
      </Tooltip>

      <CountryClock timezone={timezone} />
    </StyledBoxWrapper>
  );
};
