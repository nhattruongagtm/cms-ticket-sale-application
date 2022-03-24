import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllTickets } from "./api/crudData";
import { generateTicket } from "./api/generateData";
import Content from "./components/Content";
import DatePicker from "./components/DatePicker";
import Filter from "./components/Filter";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import TicketModal from "./components/TicketModal";
import ChangeDateModal from "./components/TicketModal/ChangeDateModal";
// import 'antd/d ist/antd.css';
import "./scss/app.scss";
import { ModalStatus } from "./slice/ModalSlice";
import { RootState } from "./store";

function App() {
  const modalState = useSelector((state: RootState) => state.modal.modalState);

  useEffect(() => {
    
  }, []);
  
  const Layer = () => {
    return (
      <div
        className={
          modalState !== ModalStatus.HIDDEN_MODAL
            ? "layer layer--display"
            : "layer"
        }
      ></div>
    );
  };
  return (
    <div className="app">
      <Header />

      <div className="app__main">
        <SideBar />
        <Content />
      </div>
      <Layer />
      <Filter />
      <TicketModal />
      {/* <ChangeDateModal/> */}
    </div>
  );
}

export default App;
