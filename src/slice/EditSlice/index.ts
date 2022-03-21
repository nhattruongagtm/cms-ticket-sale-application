import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DateTime } from "../../components/Calendar";
import { Time } from "../../components/TimePicker";

export interface SimplePrice {
  simple: number;
}
export interface ComboPrice {
  combo: number;
  quantity: number;
}

export interface TicketPackage {
  id: string;
  name: string;
  appliedDate: DateTime;
  appliedTime: Time;
  expireDate: DateTime;
  expireTime: Time;
  appliedPrice: SimplePrice | ComboPrice | (SimplePrice & ComboPrice);
  status: number;
}

const initialState: TicketPackage = {
  id: "",
  name: "",
  appliedDate: { day: 0, month: 0, year: 0 },
  appliedTime: { hour: 0, minute: 0, second: 0 },
  expireDate: { day: 0, month: 0, year: 0 },
  expireTime: { hour: 0, minute: 0, second: 0 },
  appliedPrice: {
    simple: 0,
    combo: 0,
    quantity: 0,
  },
  status: 0,
};

export const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    editTicket: (state, action: PayloadAction<TicketPackage>) => {
      state.id = action.payload.id;
    },
    resetTicket: (state,action:PayloadAction) =>{
      state.id = ""
    }
  },
});

export const { editTicket,resetTicket} = editSlice.actions;

export default editSlice.reducer;
