import { SearchIpResponse } from "./types";

const BASE_URL = "http://ip-api.com";

export const searchIp = async (ip: string): Promise<SearchIpResponse> => {
  const url = `${BASE_URL}/json/${ip}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Couldn't search your selected IP");
  }

  const responseJson: SearchIpResponse = await response.json();

  if (responseJson.status === "fail") {
    throw new Error("Your IP is out of rage");
  }

  return responseJson;
};
