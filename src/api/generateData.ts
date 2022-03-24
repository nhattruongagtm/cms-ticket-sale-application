import { addDoc, collection } from "firebase/firestore";
import { TicketListData } from "../models/Ticket";
import { db } from "./fbConfig";
export enum RefType {
  TICKET_DOCS = "tickets",
}
export const createTicket = async (ticket: TicketListData) => {
  const ticketRef = collection(db, RefType.TICKET_DOCS);
  try {
    const docRef = await addDoc(ticketRef, ticket);
    if (docRef.id) {
      return true;
    }
  } catch (error) {
    return false;
  }
};

export const generateTicket = () => {
  for (let i = 0; i < 5; i++) {
    createTicket({
      bookingCode: "AFGRECB"+i+1,
      checkInPort: 1,
      exportDate: {
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      },
      name: "Hội chợ triễn lãm" + i + 1,
      status: 1,
      ticketNumber: Math.floor(Math.random() * 20),
      usingDate: {
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      },
    });
  }
};
