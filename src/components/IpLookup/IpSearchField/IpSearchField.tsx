import { Box, TextField, Typography } from "@mui/material";
import { ChangeEvent, FC, useRef, useState } from "react";
import { IpSearchItem } from "../IpLookup";
import { searchIp } from "../../../api/ip-search/ip-search";
import CircularProgress from "@mui/material/CircularProgress";
import { CountryClock } from "./CountryClock/CountryClock";
import { SearchIpResponse } from "../../../api/ip-search/types";

interface IpSearchFieldProps {
  item: IpSearchItem;
  index: number;
}

export const IpSearchField: FC<IpSearchFieldProps> = ({ item, index }) => {
  const { id } = item;
  const [ip, setIp] = useState("");
  const [requestedIp, setRequestedIp] = useState<SearchIpResponse | null>(null);
  const prevIpRef = useRef<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setIp(value);
  };

  const handleBlur = async () => {
    if (ip === prevIpRef.current) {
      return;
    }

    setIsLoading(true);
    const ipResponse = await searchIp(ip);
    setRequestedIp(ipResponse);
    setIsLoading(false);

    prevIpRef.current = ip;
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
      />
      {isLoading && <CircularProgress />}
      {requestedIp && !isLoading && (
        <>
          <Box
            sx={{ width: "40px" }}
            component="img"
            src={`https://flagsapi.com/${requestedIp.countryCode}/flat/64.png`}
          />
          <CountryClock timezone={requestedIp.timezone} />
        </>
      )}
    </Box>
  );
};
