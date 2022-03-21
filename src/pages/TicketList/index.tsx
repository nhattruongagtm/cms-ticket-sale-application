import React from "react";
import { useDispatch } from "react-redux";
import Pagination from "../../components/Pagination";
import TableList, { DataTable } from "../../components/TableList";
import { displayAddModal, displayFilterModal } from "../../slice/ModalSlice";

interface Props {}

const TicketList = (props: Props) => {
  const dispatch = useDispatch();

  const dataList: DataTable = {
    label: [
      "Booking code",
      "Số vé",
      "Tên sự kiện",
      "Tình trạng sử dụng",
      "Ngày sử dụng",
      "Ngày Xuất vé",
      "Cổng check-in",
    ],
    data: [
      {
        bookingCode: "ALTFGHJU",
        status: 0,
        ticketNumber: 454648,
        usingDate: { day: 2, month: 2, year: 2022 },
        exportDate: { day: 2, month: 2, year: 2022 },
        checkInPort: 1,
      },
      {
        bookingCode: "ALTFGHJU",
        status: 1,
        ticketNumber: 454648,
        usingDate: { day: 2, month: 2, year: 2022 },
        exportDate: { day: 2, month: 2, year: 2022 },
        checkInPort: 1,
      },
      {
        bookingCode: "ALTFGHJU",
        status: 2,
        ticketNumber: 454648,
        usingDate: { day: 2, month: 2, year: 2022 },
        exportDate: { day: 2, month: 2, year: 2022 },
        checkInPort: 1,
      },
    ],
  };
  return (
    <div className="content__main">
      <div className="ticket__list">
        <p className="ticket__list__title title">Danh sách vé</p>
        <div className="ticket__features">
          <div className="header__search ticket__list__search">
            <input type="text" placeholder="Tìm bằng số vé" />
            <img src="./imgs/search.svg" alt="" />
          </div>
          <div className="ticket__list__action">
            <button onClick={() => dispatch(displayFilterModal())}>
              <i className="bx bx-filter-alt"></i>Lọc
            </button>
            <button>Xuất file (.csv)</button>
          </div>
        </div>
        <TableList dataTable={dataList} type={0}/>
        <Pagination />
      </div>
    </div>
  );
};

export default TicketList;
