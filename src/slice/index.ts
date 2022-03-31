import { combineReducers } from "redux";
import editSlice from "./EditSlice";
import crudSlice from "./Filter/crudSlice";
import filterSlice from "./Filter/filterSlice";
import loadFilterListSlice from "./Filter/loadFilterListSlice";
import modalSlice from "./ModalSlice";

export const rootReducer = combineReducers({
  modal: modalSlice,
  edit: editSlice,
  filter: filterSlice,
  ticketList: loadFilterListSlice,
  crud: crudSlice

});
