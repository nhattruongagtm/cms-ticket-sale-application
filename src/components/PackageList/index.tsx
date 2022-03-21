import React from "react";
import { useDispatch } from "react-redux";
import { resetTicket } from "../../slice/EditSlice";
import { displayAddModal } from "../../slice/ModalSlice";
import { AppDispatch } from "../../store";
import Pagination from "../Pagination";
import TableList, { DataTable } from "../TableList";

type Props = {};

const PackageList = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();

  const dataList: DataTable = {
    label: [
      "Mã gói",
      "Tên gói",
      "Ngày áp dụng",
      "Ngày hết hạn",
      "Giá vé (VNĐ/Vé)",
      "Giá Combo (VNĐ/Combo)",
      "Tình trạng",
    ],
    data: [
      {
        id: "1",
        appliedDate: { day: 0, month: 0, year: 2022 },
        expireDate: { day: 0, month: 0, year: 2022 },
        appliedTime: { hour: 0, minute: 0, second: 0 },
        expireTime: { hour: 0, minute: 0, second: 0 },
        name: "",
        appliedPrice: {
          combo: 0,
          quantity: 1,
          simple: 0,
        },
        status: 0,
      },
    ],
  };

  const handleDisplayAddModal = () =>{
    dispatch(resetTicket())
    dispatch(displayAddModal())
  }

  return (
    <div className="content__main">
      <div className="ticket__list">
        <p className="ticket__list__title title">Danh sách gói vé</p>
        <div className="ticket__features">
          <div className="header__search ticket__list__search">
            <input type="text" placeholder="Tìm bằng số vé" />
            <img src="./imgs/search.svg" alt="" />
          </div>
          <div className="ticket__list__action">
            <button>Xuất file (.csv)</button>
            <button
              className="button button--fill"
              onClick={handleDisplayAddModal}
            >
              Thêm gói vé
            </button>
          </div>
        </div>
        <TableList dataTable={dataList} type={2} />
        <Pagination />
      </div>
    </div>
  );
};

export default PackageList;
