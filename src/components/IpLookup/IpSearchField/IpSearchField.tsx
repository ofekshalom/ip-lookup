import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent, FC, useRef, useState } from "react";
import { searchIp } from "../../../api/ip-search/ip-search";
import CircularProgress from "@mui/material/CircularProgress";
import { isIPv4 } from "is-ip";
import { SearchIpResponse } from "../../../api/ip-search/types";
import { IpDetails } from "./IpDetails/IpDetails";

interface IpSearchFieldProps {
  index: number;
}

export const IpSearchField: FC<IpSearchFieldProps> = ({ index }) => {
  const [ip, setIp] = useState("");
  const [requestedIp, setRequestedIp] = useState<SearchIpResponse | null>(null);
  const prevIpRef = useRef<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setIp(value);
  };

  const handleResetValues = () => {
    setErrorMessage("");
    setRequestedIp(null);
    prevIpRef.current = "";
  };

  const isIpValid = (): boolean => {
    if (!isIPv4(ip)) {
      setErrorMessage("IP address is invalid");
      return false;
    }
    handleResetValues();
    return true;
  };

  const handleSearchIp = async () => {
    try {
      const ipResponse = await searchIp(ip);
      setRequestedIp(ipResponse);
      prevIpRef.current = ip;
    } catch (e) {
      if (e instanceof Error) {
        setErrorMessage(e.message);
      } else {
        setErrorMessage("An unknown error occurred");
      }
    }
  };

  const shouldRenderIpDetails = () => {
    return requestedIp && !isLoading && !errorMessage;
  };

  const handleBlur = async () => {
    if (!ip || ip === prevIpRef.current) {
      handleResetValues();
      return;
    }

    if (!isIpValid()) {
      return;
    }

    setIsLoading(true);
    await handleSearchIp();
    setIsLoading(false);
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
