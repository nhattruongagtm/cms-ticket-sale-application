import React, { createContext, useEffect, useState } from "react";
import TicketListItem from "../../pages/TicketList/TicketListItem";
import { TicketPackage } from "../../slice/EditSlice";

interface Date {
  day: number;
  month: number;
  year: number;
}
interface Time {
  hour: number;
  minute: number;
  second: number;
}
export interface TicketListData {
  bookingCode: string;
  status: number;
  ticketNumber: number;
  usingDate: Date;
  exportDate: Date;
  checkInPort: number;
}
export interface CheckingTicketData {
  ticketNumber: string;
  usingDate: Date;
  typeName: string;
  checkInPort: number;
  status: number;
}

export interface PackageListData {
  packageID: string;
  packageName: string;
  applyDate: Date & Time;
  expireDate: Date & Time;
  ticketPrice: number;
  comboPrice: number;
  status: number;
}

type DataListType = TicketListData[] | CheckingTicketData[] | TicketPackage[];
export interface DataTable {
  label: string[];
  data: DataListType;
}

interface Props {
  dataTable: DataTable;
  type: number;
}

export const DataListContext = createContext<DataListType>([]);

const TableList = ({ dataTable, type }: Props) => {
  const [list, setList] = useState<DataListType>([]);
  useEffect(() => {
    switch (type) {
      case 0:
        setList(dataTable.data as TicketListData[]);
        break;
      case 1:
        setList(dataTable.data as CheckingTicketData[]);
        break;
      case 2:
        setList(dataTable.data as TicketPackage[]);
        break;
      default:
        setList([]);
    }
  }, []);
  return (
    <DataListContext.Provider value={list}>
      <div className="table__list">
        <table>
          <thead>
            <tr className="thead-list">
              <td className="tb__stt">STT</td>
              {/* <td className="tb__code">Booking code</td>
            <td className="tb__quantity">Số vé</td>
            <td className="tb__name">Tên sự kiện</td>
            <td className="tb__ status">Tình trạng sử dụng</td>
            <td className="tb__expire">Ngày sử dụng</td>
            <td className="tb__start">Ngày xuất vé</td>
            <td className="port">Cổng Check-in</td> */}
              {dataTable.label.map((item, index) => (
                <td key={index}>{item}</td>
              ))}
              <td></td>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <TicketListItem
                data={item}
                index={index + 1}
                key={index}
                type={type}
              />
            ))}
          </tbody>
        </table>
      </div>
    </DataListContext.Provider>
  );
};

export default TableList;
