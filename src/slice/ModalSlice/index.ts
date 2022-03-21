import { createSlice } from "@reduxjs/toolkit";

export enum ModalStatus {
  HIDDEN_MODAL = 0,
  ADD_MODAL = 1,
  UPDATE_MODAL = 2,
  FILTER_MODAL = 3,
}
export interface IModalState{
    modalState : number;
    datePicker: boolean;
}
const initialState:IModalState = {
    modalState: ModalStatus.HIDDEN_MODAL,
    datePicker: false
};

const modelSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    displayAddModal: (state) => {
        console.log(state)
      state.modalState = ModalStatus.ADD_MODAL;
    },
    displayUpdateModal: (state) => {
      state.modalState = ModalStatus.UPDATE_MODAL;
    },
    displayFilterModal: (state) => {
      state.modalState = ModalStatus.FILTER_MODAL;
    },
    hiddenModal: (state) => {
      state.modalState = ModalStatus.HIDDEN_MODAL;
    },
    displayDatePicker: (state) =>{
      state.datePicker = true;
    },
    hiddenDatePicker: (state) =>{
      state.datePicker = false;
    }
  },
});

export const {
  displayAddModal,
  displayFilterModal,
  displayUpdateModal,
  hiddenModal,
  displayDatePicker,hiddenDatePicker

} = modelSlice.actions;

export default modelSlice.reducer;
