import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import {
  CheckingTicketData,
  DataListContext,
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
interface TicketListItemProps {
  data: TicketListData;
}
interface CheckingListItemProps {
  data: CheckingTicketData;
}
interface PackageListItemProps {
  data: TicketPackage;
}

const TicketListItem = ({ data, index, type }: Props) => {
  const dispatch = useDispatch();

  const handleDisplayUpdateModal = () => {
    const newData = data as TicketPackage;

    dispatch(editTicket(newData));
    dispatch(displayUpdateModal());
  };
  const TicketListItem = ({ data }: TicketListItemProps) => {
    return (
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
    );
  };
  const CheckingListItem = ({ data }: CheckingListItemProps) => {
    return (
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
    );
  };
  const PackageListItem = ({ data }: PackageListItemProps) => {
    return (
      <tr className="body-list">
        <td className="tb__stt">{index}</td>
        <td className="tb__code">
          <p>{data.id}</p>
        </td>
        <td className="tb__quantity">
          <p>{data.name}</p>
        </td>
        <td className="tb__expire tb__datetime">
          <p>
            <span>{`${data.appliedDate.day}/${data.appliedDate.month}/${data.appliedDate.year}`}</span>
            <span>{`${data.appliedTime.hour}:${data.appliedTime.minute}:${data.appliedTime.second}`}</span>
          </p>
        </td>
        <td className="tb__start tb__datetime">
          <p>
            <span>{`${data.expireDate.day}/${data.expireDate.month}/${data.expireDate.year}`}</span>
            <span>{`${data.expireTime.hour}:${data.expireTime.minute}:${data.expireTime.second}`}</span>
          </p>
        </td>
        <td className="tb__name">
          {data.simplePrice && data.simplePrice > 0 ? (
            <p>{data.simplePrice} VNĐ</p>
          ): <></>}
        </td>
        <td className="port">
          {data.comboPrice && (
            <p>
              {data.comboPrice} VNĐ/{data.quantityForCombo} vé
            </p>
          )}
        </td>
        <td
          className={`tb__status ${
            data.status === 0 ? "tb__status--unused" : "tb__status--expire"
          }`}
        >
          <span></span> {data.status === 0 ? "Đang áp dụng" : "Tắt"}
        </td>
        <td className="tb__edit" onClick={handleDisplayUpdateModal}>
          <p>
            <i className="bx bx-edit"></i>
            Cập nhật
          </p>
        </td>
      </tr>
    );
  };
  return (
    <>
      {type === 0 && <TicketListItem data={data as TicketListData} />}
      {type === 1 && <CheckingListItem data={data as CheckingTicketData} />}
      {type === 2 && <PackageListItem data={data as TicketPackage} />}
    </>
  );
};

export default TicketListItem;
