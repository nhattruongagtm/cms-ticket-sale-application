import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hiddenModal, ModalStatus } from "../../slice/ModalSlice";
import { AppDispatch, RootState } from "../../store";
import Checkbox from "../Checkbox";
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";

type Props = {};

const TicketModal = (props: Props) => {
  const modalState = useSelector((state: RootState) => state.modal.modalState);
  const editData = useSelector((state: RootState) => state.edit);

  const dispatch: AppDispatch = useDispatch();

  const [packageType, setPackageType] = useState<number[]>([]);

  const handleCheckType = (type: number) => {
    if (packageType.length === 0) {
      setPackageType([...packageType, type]);
    } else {
      if (packageType.includes(type)) {
        setPackageType([...packageType.filter((item) => item !== type)]);
      } else {
        setPackageType([...packageType, type]);
      }
    }
  };
  return (
    <div
      className={
        modalState === ModalStatus.ADD_MODAL ||
        modalState === ModalStatus.UPDATE_MODAL
          ? "ticket__modal ticket__modal--display"
          : "ticket__modal"
      }
    >
      <p className="ticket__modal__title title__modal">
        {editData.id !== "" ? "Cập nhật thông tin gói" : "Thêm gói vé"}
      </p>
      <div className="ticket__modal__name">
        {editData.id !== "" && (
          <div className="ticket__modal__name__item item__id">
            <h5 className="sub__title">
              Mã sự kiện <span>*</span>
            </h5>
            <input
              type="text"
              className="name__input"
              placeholder="Nhập mã sự kiện"
            />
          </div>
        )}
        <div className="ticket__modal__name__item">
          <h5 className="sub__title">
            {editData.id !== "" ? "Tên sự kiện" : "Tên gói vé"} <span>*</span>
          </h5>
          <input
            type="text"
            className="name__input"
            placeholder={editData.id !== "" ? "Nhập tên sự kiện" : "Nhập tên gói vé"}
          />
        </div>
      </div>
      <div className="ticket__modal__date">
        <div className="modal__date__item">
          <p className="sub__title">Ngày áp dụng</p>
          <div className="modal__date__main">
            <div className="modal__date">
              <DatePicker />
            </div>
            <div className="modal__date">
              <TimePicker />
            </div>
          </div>
        </div>
        <div className="modal__date__item">
          <p className="sub__title">Ngày hết hạn</p>
          <div className="modal__date__main">
            <div className="modal__date">
              <DatePicker />
            </div>
            <div className="modal__date">
              <TimePicker />
            </div>
          </div>
        </div>
      </div>
      <div className="ticket__modal__price">
        <p className="sub__title modal__price__title">Giá vé sử dụng</p>
        <div className="modal__price__item">
          <label htmlFor="simple__price">
            <div className="price__input__line">
              {/* <input
                type="checkbox"
                name=""
                id="simple__price"
                className="price__input"
              />{" "} */}
              {/* <span>Vé lẻ (vnđ/vé) với giá</span> */}
              <Checkbox
                id="simple__price"
                isChecked={packageType.includes(1) ? true : false}
                value="0"
                text="Vé lẻ (vnđ/vé) với giá"
                onChecked={() => handleCheckType(1)}
              />
              <input
                type="text"
                placeholder="Giá vé"
                className="ticket__price"
              />{" "}
              <span>/ vé</span>
            </div>
          </label>
        </div>
        <div className="modal__price__item">
          <label htmlFor="combo__price">
            <div className="price__input__line">
              <Checkbox
                id="combo__price"
                isChecked={packageType.includes(2) ? true : false}
                value="1"
                text="Compo vé với giá"
                onChecked={() => handleCheckType(2)}
              />
              <input
                type="text"
                placeholder="Giá vé"
                className="ticket__price"
              />{" "}
              <span>/</span>
              <input
                type="text"
                placeholder="Giá vé"
                className="ticket__price--short"
              />{" "}
              <span> vé</span>
            </div>
          </label>
        </div>
        <div className="ticket__modal__status">
          <p className="sub__title">Tình trạng</p>
          <select>
            <option value="" key="">
              Đang áp dụng
            </option>
          </select>
        </div>
        <p className="ticket__modal__note">
          <span>*</span> là thông tin bắt buộc
        </p>
        <div className="ticket__modal__actions">
          <button className="button" onClick={() => dispatch(hiddenModal())}>
            Hủy
          </button>
          <button className="button button--fill">Lưu</button>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
