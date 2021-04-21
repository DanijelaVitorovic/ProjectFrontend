import moment from "moment";
import {
  BACKEND_MOMENT_DATE_FORMAT,
  FRONTEND_MOMENT_DATE_FORMAT,
} from "./constants";

export const formatDateFromBackend = (date) =>
  moment(date, BACKEND_MOMENT_DATE_FORMAT).format(FRONTEND_MOMENT_DATE_FORMAT);
