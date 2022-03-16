import React from "react";
import Pagination from "../../components/Pagination";
import TableList from "../../components/TableList";

interface Props {}

const TicketList = (props: Props) => {
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
            <button>
              <i className="bx bx-filter-alt"></i>Lọc
            </button>
            <button>Xuất file (.csv)</button>
          </div>
        </div>
        <TableList />
        <Pagination />
      </div>
    </div>
  );
};

export default TicketList;
