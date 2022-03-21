import React from "react";
import { useDispatch } from "react-redux";
import {
  CheckingTicketData,
  PackageListData,
  TicketListData,
} from "../../components/TableList";
import { editTicket, TicketPackage } from "../../slice/EditSlice";
import { displayUpdateModal } from "../../slice/ModalSlice";

interface Props {
  data: TicketListData | CheckingTicketData | TicketPackage;
  index: number;
  type: number;
}

const TicketListItem = ({ data , index, type }: Props) => {
  const dispatch = useDispatch();

  const handleDisplayUpdateModal = () =>{
    const newData = data as TicketPackage
    
    dispatch(editTicket(newData))
    dispatch(displayUpdateModal())
  }
  return (
    <>
      {type === 0 && (
        <tr className="body-list">
          <td className="tb__stt">{index}</td>
          <td className="tb__code">
            <p>ALT20210501</p>
          </td>
          <td className="tb__quantity">
            <p>123456789034</p>
          </td>
          <td className="tb__name">
            <p>Hội chợ triển lãm tiêu dùng 2021</p>
          </td>
          <td
            className={`tb__status ${
              data.status === 0
                ? "tb__status--used"
                : data.status === 1
                ? "tb__status--unused"
                : "tb__status--expire"
            }`}
          >
            <span></span>{" "}
            {data.status === 0
              ? "Đã sử dụng"
              : data.status === 1
              ? "Chưa sử dụng"
              : "Hết hạn"}
          </td>
          <td className="tb__expire">
            <p>14/04/2021</p>
          </td>
          <td className="tb__start">
            <p>14/04/2021</p>
          </td>
          <td className="port">
            <p>Cổng 1</p>
          </td>
          <td>
            <i className="bx bx-dots-vertical-rounded"></i>
          </td>
        </tr>
      )}
      {type === 1 && (
        <tr className="body-list">
          <td className="tb__stt">{index}</td>
          <td className="tb__code">
            <p>ALT20210501</p>
          </td>

          <td className="tb__name">
            <p>Hội chợ triển lãm tiêu dùng 2021</p>
          </td>

          <td className="tb__expire">
            <p>14/04/2021</p>
          </td>

          <td className="port">
            <p>Cổng 1</p>
          </td>
          <td></td>
        </tr>
      )}
      {type === 2 && (
        <tr className="body-list">
          <td className="tb__stt">{index}</td>
          <td className="tb__code">
            <p>ALT20210501</p>
          </td>
          <td className="tb__quantity">
            <p>Gói gia đình</p>
          </td>
          <td className="tb__expire tb__datetime">
            <p>
              <span>14/04/2021</span>
              <span>08:00:00</span>
            </p>
          </td>
          <td className="tb__start tb__datetime">
            <p>
              <span>14/04/2021</span>
              <span>08:00:00</span>
            </p>
          </td>
          <td className="tb__name ">
            <p>90.000 VNĐ</p>
          </td>
          <td className="port">
            <p>360.000 VNĐ/4 vé</p>
          </td>
          <td className={`tb__status ${data.status === 0 ? "tb__status--unused" : "tb__status--expire"}`}>
            <span></span> {data.status === 0 ? "Đang áp dụng" : "Tắt"}
          </td>
          <td
            className="tb__edit"
            onClick={handleDisplayUpdateModal}
          >
            <p>
              <i className="bx bx-edit"></i>
              Cập nhật
            </p>
          </td>
        </tr>
      )}
    </>
  );
};

export default TicketListItem;
