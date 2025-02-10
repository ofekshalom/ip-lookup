import { Box } from "@mui/material";
import { CountryClock } from "./CountryClock/CountryClock";
import { FC } from "react";

interface IpDetailsProps {
  timezone: string;
  countryCode: string;
}
export const IpDetails: FC<IpDetailsProps> = ({ countryCode, timezone }) => {
  return (
    <Box>
      <Box
        sx={{ width: "40px" }}
        component="img"
        src={`https://flagsapi.com/${countryCode}/flat/64.png`}
      />
      <CountryClock timezone={timezone} />
    </Box>
  );
};
