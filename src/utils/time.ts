import { toZonedTime } from "date-fns-tz";
import { format as fnsFormat } from "date-fns";

export const getCurrentTime = (
  timezone: string,
  format = "HH:mm:ss"
): string => {
  const zonedTime = toZonedTime(new Date(), timezone);
  const time = fnsFormat(zonedTime, format);
  return time;
};
