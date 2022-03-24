import { DateTime } from "../components/Calendar";
import { Time } from "../components/TimePicker";

const isLessThan = (number: number, compare: number) => {
  if (number < compare) {
    return true;
  }
  return false;
};
const convert = (number: number, split: string) => {
  let rs = "";
  if (isLessThan(number, 10)) {
    rs += `0${number}${split}`;
  } else {
    rs += `${number}${split}`;
  }
  return rs;
};
export const formatTime = (time: Time) => {
  let rs = "";

  rs += convert(time.hour, ":");
  rs += convert(time.minute, ":");
  rs += convert(time.second, "");

  return rs;
};
export const formatDate = (date: DateTime) => {
  let rs = "";

  rs += convert(date.day, ":");
  rs += convert(date.month, ":");
  rs += convert(date.year, "");

  return rs;
};