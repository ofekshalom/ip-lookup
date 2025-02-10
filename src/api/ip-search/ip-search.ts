import { SearchIpResponse } from "./types";

const BASE_URL = "http://ip-api.com";

export const searchIp = async (ip: string): Promise<SearchIpResponse> => {
  const url = `${BASE_URL}/json/${ip}`;

  const response = await fetch(url);

  const responseJson: SearchIpResponse = await response.json();

  return responseJson;
};
