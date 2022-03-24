import React, { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllTickets } from "../../api/crudData";
import Pagination from "../../components/Pagination";
import TableList, { DataTable } from "../../components/TableList";
import { TicketListData } from "../../models/Ticket";
import { displayAddModal, displayFilterModal } from "../../slice/ModalSlice";

interface Props {}

export const LoadingContext = createContext(false);

const TicketList = (props: Props) => {
  const dispatch = useDispatch();
  const [ticketList, setTicketList] = useState<DataTable>({
    label: [
      "Booking code",
      "Số vé",
      "Tên sự kiện",
      "Tình trạng sử dụng",
      "Ngày sử dụng",
      "Ngày Xuất vé",
      "Cổng check-in",
    ],
    data: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isCancel = false;

    const getTicketList = async () => {
      setIsLoading(true);
      getAllTickets()
        .then((res) => {
          setTimeout(()=>{
            setIsLoading(false);
            !isCancel && setTicketList({ ...ticketList, data: res });
          },500)
        })
        .catch((e) => {
          setIsLoading(false);
          console.log(e);
        });
    };
    getTicketList();

    return () => {
      isCancel = true;
    };
  }, []);
  return (
    <LoadingContext.Provider value={isLoading}>
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
          <TableList dataTable={ticketList} type={0} />
          <Pagination />
        </div>
      </div>
    </LoadingContext.Provider>
  );
};

export default TicketList;
