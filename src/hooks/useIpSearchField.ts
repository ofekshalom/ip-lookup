import { useRef, useState } from "react";
import { SearchIpResponse } from "../api/ip-search/types";
import { isIPv4 } from "is-ip";
import { searchIp } from "../api/ip-search/ip-search";

export const useIpSearchField = () => {
  const [ip, setIp] = useState("");
  const [requestedIp, setRequestedIp] = useState<SearchIpResponse | null>(null);
  const prevIpRef = useRef<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
    } catch (e) {
      setErrorMessage(
        e instanceof Error ? e.message : "An unknown error occurred"
      );
    }
    prevIpRef.current = ip;
  };

  const handleBlur = async () => {
    if (!ip) {
      handleResetValues();
      return;
    }

    if (ip === prevIpRef.current || !isIpValid()) {
      return;
    }

    setIsLoading(true);
    await handleSearchIp();
    setIsLoading(false);
  };

  return {
    ip,
    setIp,
    requestedIp,
    isLoading,
    errorMessage,
    handleBlur,
  };
};
