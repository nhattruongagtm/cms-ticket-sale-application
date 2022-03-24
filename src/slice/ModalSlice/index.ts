import { createSlice } from "@reduxjs/toolkit";

export enum ModalStatus {
  HIDDEN_MODAL = 0,
  ADD_MODAL = 1,
  UPDATE_MODAL = 2,
  FILTER_MODAL = 3,
  CHANGE_DATE_MODAL = 4,
}
export interface IModalState {
  modalState: number;
  datePicker: boolean;
}
const initialState: IModalState = {
  modalState: ModalStatus.HIDDEN_MODAL,
  datePicker: false,
};

const modelSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    displayAddModal: (state) => {
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
    displayDatePicker: (state) => {
      state.datePicker = true;
    },
    hiddenDatePicker: (state) => {
      state.datePicker = false;
    },
    displayChangeDateModal: (state) => {
      state.modalState = ModalStatus.CHANGE_DATE_MODAL;
    },
  },
});

export const {
  displayAddModal,
  displayFilterModal,
  displayUpdateModal,
  hiddenModal,
  displayDatePicker,
  hiddenDatePicker,
  displayChangeDateModal
} = modelSlice.actions;

export default modelSlice.reducer;
