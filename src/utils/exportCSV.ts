import { KeyBindings } from "@antv/xflow-core";
import { TicketListData, TicketPackage } from "../models/Ticket";
import { formatDate, formatTime } from "./dateTime";
export interface ExportData {
  label: string[];
  list: TicketListData[] | TicketPackage[];
}
export const exportCSV = (
  exportData: ExportData,
  fileName: string,
  id: string
) => {
  const csv = "data:text/csv;charset=utf-8," + convertToString(exportData);

  const data = encodeURI(csv);

  const link = document.getElementById(id);

  if (link) {
    link.setAttribute("href", data);
    link.setAttribute("download", fileName);
  }
};

export const convertToString = (exportData: ExportData) => {
  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const { label, list } = exportData;
  let result = "";
  label.forEach(
    (item, index) =>
      (result +=
        index !== label.length - 1
          ? item + columnDelimiter
          : item + lineDelimiter)
  );

  if (list.length > 0) {
    const keys = Object.keys(list[0])
    list.forEach((item, index) => {
      result += index + 1 + columnDelimiter;
      keys.map((key, idx) => {
        // @ts-ignore
        const value = item[key];

          // if (key.indexOf("ate") !== -1) {

            if (idx !== keys.length - 1) {
              result += value + columnDelimiter;
            } else {
              result += value;
            }

          // } else {
          //   if (idx !== keys.length - 1) {
          //     result += value + columnDelimiter;
          //   } else {
          //     result += value;
          //   }
          // }
        
      });
      result += lineDelimiter;
    });
  }

  return result;
};
