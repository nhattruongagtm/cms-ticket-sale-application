import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import Radio from "../../components/Radio";
import TableList, { DataTable } from "../../components/TableList";

interface Props {}

type CheckType = "all" | "uncheck" | "check";

const CheckTicket = (props: Props) => {
  const [check, setCheck] = useState<CheckType>("all");

  const handleCheckTicket = (checkType: string) => {
    setCheck(checkType as CheckType);
  };

  const dataList: DataTable = {
    label: [
      "Số vé",
      "Ngày sử dụng",
      "Tên loại vé",
      "Cổng check-in",
    ],
    data: [
      {
      
       ticketNumber: "ALT20210501",
       typeName: "Hội chợ triễn lãm tiêu dùng",
       usingDate: {day: 14,month: 4,year: 2022},
       checkInPort: 1,
       status: 0
      },
      {
      
       ticketNumber: "ALT20210502",
       typeName: "Nhà hát kịch 2022",
       usingDate: {day: 17,month: 7,year: 2022},
       checkInPort: 2,
       status: 0
      },
    ],
  };

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
        <TableList dataTable={dataList} type={1} />
        <Pagination />
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
              onChecked={handleCheckTicket}
              isChecked={check === "all" ? true : false}
            />
            <Radio
              id="check"
              name="filter"
              text="Đã đối soát"
              value={"check"}
              onChecked={handleCheckTicket}
              isChecked={check === "check" ? true : false}
            />
            <Radio
              id="uncheck"
              name="filter"
              text="Chưa đối soát"
              value={"uncheck"}
              onChecked={handleCheckTicket}
              isChecked={check === "uncheck" ? true : false}
            />
          </div>
          <p>Loại vé</p>
          <span>Vé cổng</span>
          <p className="f">Từ ngày</p>
          <div className="filter__date__pic filter--gray">
            <span>01/05/2022</span> <i className="bx bx-calendar"></i>
          </div>
          <p className="f">Đến ngày</p>
          <div className="filter__date__pic filter--orange">
            <span>dd/mm/yy</span> <i className="bx bx-calendar"></i>
          </div>
        </div>
        <button className="button filter__btn">Lọc</button>
      </div>
    </div>
  );
};

export default CheckTicket;
