import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPackages } from "../../api/crudData";
import { TicketPackage } from "../../models/Ticket";
import { editTicket, resetTicket } from "../../slice/EditSlice";
import { displayAddModal, displayUpdateModal } from "../../slice/ModalSlice";
import { AppDispatch } from "../../store";
import { formatDate, formatTime } from "../../utils/dateTime";
import { DateTime } from "../Calendar";
import Pagination from "../Pagination";
import TableList, { DataTable } from "../TableList";
import { Time } from "../TimePicker";

type Props = {};

const PackageList = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();

  const [ticketList, setTicketList] = useState<TicketPackage[]>([]);

  const handleDisplayUpdateModal = (newData : TicketPackage) => {
    console.log(newData)
    dispatch(editTicket(newData));
    dispatch(displayUpdateModal());

  };
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      render: (text: string, record: TicketPackage) =>
        ticketList.indexOf(record) + 1,
    },
    {
      title: "Mã gói",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên gói",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ngày áp dụng",
      dataIndex: "appliedDate",
      key: "appliedDate",
      render: (date: DateTime, item: TicketPackage) => (
        <div className="tb__datetime">
          <p>
            <span>{formatDate(date)}</span>
            <span>{formatTime(item.appliedTime)}</span>
          </p>
        </div>
      ),
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "expireDate",
      key: "expireDate",
      render: (date: DateTime, item: TicketPackage) => (
        <div className="tb__datetime">
          <p>
            <span>{formatDate(date)}</span>
            <span>{formatTime(item.appliedTime)}</span>
          </p>
        </div>
      ),
    },
    {
      title: "Giá vé (VNĐ/Vé)",
      dataIndex: "simplePrice",
      key: "simplePrice",
      render: (price: number) => <>{price > 0 ? <>{price} VNĐ</> : <></>}</>,
    },
    {
      title: "Giá Combo (VNĐ/Combo)",
      dataIndex: "comboPrice",
      key: "comboPrice",
      render: (price: number, item: TicketPackage) => (
        <>
          {price > 0 ? (
            <>
              {price} VNĐ/{item.quantityForCombo} vé
            </>
          ) : (
            <></>
          )}
        </>
      ),
    },
    {
      title: "Tình trạng",
      dataIndex: "status",
      key: "status",
      render: (status: number) => (
        <p
          className={`tb__status ${
            status === 0 ? "tb__status--unused" : "tb__status--expire"
          }`}
        >
          <span></span>
          {status === 0 ? "Đang áp dụng" : "Tắt"}
        </p>
      ),
    },
    {
      title: "",
      dataIndex: "update",
      key: "update",
      render: (status: number, item: TicketPackage) => (
        <div className="tb__edit" onClick={()=>handleDisplayUpdateModal(item)}>
          <p>
            <i className="bx bx-edit"></i>
            Cập nhật   
          </p>
        </div>
      ),
    },
  ];

  const handleDisplayAddModal = () => {
    dispatch(resetTicket());
    dispatch(displayAddModal());  
  };

  useEffect(() => {
    getAllPackages()
      .then((res) => {
        setTicketList(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
        <Table
          columns={columns}
          dataSource={ticketList}
          pagination={{
            defaultPageSize: 5,
            showSizeChanger: false,
            pageSizeOptions: ["10", "20", "30"],
          }}
        />
      </div>
    </div>
  );
};

export default PackageList;
