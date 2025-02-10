import i18next from "i18next";
import { SearchIpResponse } from "./types";

const BASE_URL = "http://ip-api.com";

export const searchIp = async (ip: string): Promise<SearchIpResponse> => {
  const url = `${BASE_URL}/json/${ip}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(i18next.t("ipLookup.validations.apiCouldNotSearch"));
  }

  const responseJson: SearchIpResponse = await response.json();

  if (responseJson.status === "fail") {
    throw new Error(i18next.t("ipLookup.validations.outOfRange"));
  }

  return responseJson;
};
