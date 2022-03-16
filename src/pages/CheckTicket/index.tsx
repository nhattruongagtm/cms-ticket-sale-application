import React from "react";
import Pagination from "../../components/Pagination";
import Radio from "../../components/Radio";
import TableList from "../../components/TableList";

interface Props {}

const CheckTicket = (props: Props) => {
  return (
    <div className="check__ticket">
      <div className="check__ticket__main">
        <p className="title">Đối soát vé</p>
        <div className="ticket__features check__features">
          <div className="header__search ticket__list__search">
            <input type="text" placeholder="Tìm bằng số vé" />
            <img src="./imgs/search.svg" alt="" />
          </div>
          <div className="check__ticket__action">
            <button>Chốt đối soát</button>
          </div>
        </div>
        <TableList/>
        <Pagination/>
      </div>
      <div className="check__ticket__filter">
        <p className="check__filter__title">Lọc vé</p>
        <div className="check__filter__main">
          <p>Tình trạng đối soát</p>
          <div className="check__filter__checkbox">
            <Radio
              id="all"
              name="filter"
              text="Tất cả"
              value={"all"}
              isChecked={true}
            />
            <Radio
              id="check"
              name="filter"
              text="Đã đối soát"
              value={"check"}
              isChecked={false}
            />
            <Radio
              id="uncheck"
              name="filter"
              text="Chưa đối soát"
              value={"uncheck"}
              isChecked={false}
            />
          </div>
          <p>Loại vé</p>
          <span>Vé cổng</span>
          <p className="f">Từ ngày</p>
          <div className="filter__date__picker"></div>
          <p className="f">Đến ngày</p>
          <div className="filter__date__picker"></div>
        </div>
        <button className="button filter__btn">Lọc</button>
      </div>
    </div>
  );
};

export default CheckTicket;
