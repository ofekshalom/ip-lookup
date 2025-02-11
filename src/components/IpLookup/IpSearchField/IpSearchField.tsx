import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { IpDetails } from "./IpDetails/IpDetails";
import { useIpSearchField } from "../../../hooks/useIpSearchField";
import { IP_PLACEHOLDER } from "./constants";
import {
  StyledBoxItemIndexWrapper,
  StyledBoxWrapper,
  StyledTypographyIndex,
} from "./IpSearchField.styles";

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
    <StyledBoxWrapper>
      <StyledBoxItemIndexWrapper>
        <StyledTypographyIndex>{index}</StyledTypographyIndex>
      </StyledBoxItemIndexWrapper>
      <TextField
        slotProps={{
          input: { inputProps: { "data-testid": "ip-search-input" } },
        }}
        placeholder={IP_PLACEHOLDER}
        value={ip}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isLoading}
        error={Boolean(errorMessage)}
        helperText={errorMessage}
        variant="outlined"
        autoFocus
      />
      {isLoading && <CircularProgress size="30px" />}
      {shouldRenderIpDetails() && (
        <IpDetails
          countryCode={requestedIp!.countryCode}
          timezone={requestedIp!.timezone}
          countryName={requestedIp!.country}
          city={requestedIp!.city}
        />
      )}
    </StyledBoxWrapper>
  );
};
