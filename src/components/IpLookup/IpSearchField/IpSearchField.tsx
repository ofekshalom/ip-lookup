import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent, FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { IpDetails } from "./IpDetails/IpDetails";
import { useIpSearchField } from "../../../hooks/useIpSearchField";

interface IpSearchFieldProps {
  index: number;
}

export const IpSearchField: FC<IpSearchFieldProps> = ({ index }) => {
  const { errorMessage, handleBlur, ip, isLoading, requestedIp, setIp } =
    useIpSearchField();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIp(e.target.value);
  };
  const shouldRenderIpDetails = () => {
    return requestedIp && !isLoading && !errorMessage;
  };

  return (
    <Box>
      <Box>
        <Typography>{index}</Typography>
      </Box>
      <TextField
        placeholder="127.0.0.1"
        value={ip}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isLoading}
        error={Boolean(errorMessage)}
        helperText={errorMessage}
      />
      {isLoading && <CircularProgress />}
      {shouldRenderIpDetails() && (
        <IpDetails
          countryCode={requestedIp!.countryCode}
          timezone={requestedIp!.timezone}
        />
      )}
    </Box>
  );
};
