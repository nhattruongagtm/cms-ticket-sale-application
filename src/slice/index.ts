import { combineReducers } from "redux";
import editSlice from "./EditSlice";
import modalSlice from "./ModalSlice";

export const rootReducer = combineReducers({
  modal: modalSlice,
  edit: editSlice,
});
