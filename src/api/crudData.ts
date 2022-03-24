import { collection, getDocs } from "firebase/firestore";
import { TicketListData } from "../models/Ticket";
import { db } from "./fbConfig";
import { RefType } from "./generateData";

export const getAllTickets = (): Promise<TicketListData[]> => {
  let result: TicketListData[] = [];
  return new Promise(async (resolve, reject) => {
    try {
      const ticketRef = await getDocs(collection(db, RefType.TICKET_DOCS));

      ticketRef.forEach((doc) => {
        if (doc.exists()) {
          const data = doc.data() as TicketListData;
          result = [...result, data];

          if (result.length === ticketRef.size) {
            resolve(result);
          }
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};
