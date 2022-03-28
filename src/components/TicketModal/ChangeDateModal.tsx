import React from "react";
import { DateTime } from "../Calendar";
import DatePicker from "../DatePicker";

type Props = {};

const ChangeDateModal = (props: Props) => {
    const handleGetDate = (date: DateTime) =>{

    }
  return <div className="change__modal change__modal--display">
      <p className="change__modal__title">
          Đổi ngày sử dụng vé
      </p>
      <div className="change__modal__main">
          <div className="change__main__title">
              <span>Số vé</span>
              <span>Loại vé</span>
              <span>Tên sự kiện</span>
              <span>Hạn sử dụng</span>
          </div>
          <div className="change__main__content">
              <span>PKG20210502</span>
              <span>Vé cổng - Gói sự kiện</span>
              <span>Hội trợ triển lãm hàng tiêu dùng 2021</span>
              <DatePicker onGetDate={handleGetDate} type={1} date={{day: 0, month: 0, year: 0}}/>

          </div>
      </div>
          <div className="change__main__actions">
                <button className="button">
                    Hủy
                </button>
                <button className="button button--fill">
                    Lưu
                </button>
          </div>
  </div>;
};

export default ChangeDateModal;
