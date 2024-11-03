import { format } from "date-fns";

export const getUniqueId = () =>
  Date.now() + Math.random().toString(36).substring(2, 9);

export const getFullDateFormat = (date: Date | number) =>
  format(date, "LLL d yyyy, h:mm aaa");
