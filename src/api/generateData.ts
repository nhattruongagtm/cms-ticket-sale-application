import { addDoc, collection } from "firebase/firestore";
import { TicketListData, TicketPackage } from "../models/Ticket";
import { db } from "./fbConfig";
export enum RefType {
  TICKET_DOCS = "tickets",
  PACKAGES_DOCS = "packages",
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
export const createPackage = async (ticket: TicketPackage) => {
  const ticketRef = collection(db, RefType.PACKAGES_DOCS);
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
  for (let i = 5; i < 53; i++) {
    let ticketNumber = "";
    for (let j = 0; j < 5; j++) {
      ticketNumber += Math.floor(Math.random() * 10);
    }
    createTicket({
      bookingCode: "AFGRECB" + i + 1,
      checkInPort: Math.floor(Math.random() * 5) + 1,
      exportDate: {
        day: Math.floor(Math.random() * 31) + 1,
        month: Math.floor(Math.random() * 12) + 1,
        year: new Date().getFullYear(),
      },
      name: "Hội chợ triễn lãm " + i + 1,
      status: Math.floor(Math.random() * 3),
      ticketNumber: Number(ticketNumber),
      usingDate: {
        day: Math.floor(Math.random() * 31) + 1,
        month: Math.floor(Math.random() * 12) + 1,
        year: new Date().getFullYear(),
      },
      checkStatus: Math.floor(Math.random() * 2),
      typeName: "Vé cổng",
    });
  }
};

export const generateTicketPackages = () => {
  for (let i = 0; i < 100; i++) {
    let rdID = "";
    for(let j = 0; j < 5; j++){
      rdID+= Math.floor(Math.random()*9)
    }
    let rdName = ['Gói gia đình','Gói sự kiện'];
    const simplePrice = Math.floor(Math.random()*4)*100 + 1;
    const quantity = Math.floor(Math.random()*5)+1;
    createPackage({
      id: "ALTA"+ rdID,
      name: rdName[Math.floor(Math.random()*2)],
      appliedDate: {
        day: Math.floor(Math.random() * 31) + 1,
        month: Math.floor(Math.random() * 12) + 1,
        year: new Date().getFullYear(),
      },
      expireDate: {
        day: Math.floor(Math.random() * 31) + 1,
        month: Math.floor(Math.random() * 12) + 1,
        year: new Date().getFullYear(),
      },
      appliedTime: {
        hour: Math.floor(Math.random() * 24),
        minute: Math.floor(Math.random() * 60),
        second: Math.floor(Math.random() * 60),
      },
      expireTime: {
        hour: Math.floor(Math.random() * 24),
        minute: Math.floor(Math.random() * 60),
        second: Math.floor(Math.random() * 60),
      },
      status: Math.floor(Math.random()*2),
      simplePrice: simplePrice,
      quantityForCombo: quantity,
      comboPrice: simplePrice * quantity,
    })
  }
};
