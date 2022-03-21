import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hiddenModal, ModalStatus } from "../../slice/ModalSlice";
import { RootState } from "../../store";
import Calendar, { DateTime } from "../Calendar";
import Checkbox from "../Checkbox";
import DatePicker from "../DatePicker";
import Radio from "../Radio";

type Props = {};

type CheckItem = "c__c1" | "c__c2" | "c__c3" | "c__c4" | "c__c5";

type CheckAll = "c__all";

type CheckType = CheckAll | CheckItem[];

const Filter = (props: Props) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modal.modalState);
  const [checkList, setCheckList] = useState<CheckType>("c__all");
  const [radioValue, setRadioValue] = useState<string>("all");

  const [dateFrom, setDateFrom] = useState<DateTime>({
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const handleFilter = () => {
    console.log(checkList);
    dispatch(hiddenModal());
  };

  const handleGetChecked = (value: string) => {
    if (value === "c__all") {
      if (checkList === "c__all") {
        setCheckList([]);
      } else {
        setCheckList(value);
      }
    } else {
      let newCheckList = [...(checkList as CheckItem[])];
      const isChecked = checkList.includes(value as CheckItem);

      if (checkList === "c__all") {
        newCheckList = [];
      }
      if (newCheckList.length === 4) {
        setCheckList("c__all");
      } else {
        if (isChecked) {
          setCheckList([...newCheckList.filter((item) => item !== value)]);
        } else {
          setCheckList([...(newCheckList as CheckItem[]), value as CheckItem]);
        }
      }
    }
  };

  const handleGetRadioValue = (value: string) => {
    setRadioValue(value);
  };

  const handleGetDateTo = (date: DateTime) => {
    setDateFrom(date);
  };
  return (
    <div
      className={
        modalState === ModalStatus.FILTER_MODAL
          ? "filter filter--display"
          : "filter"
      }
    >
      <p className="filter__title">Lọc vé</p>
      <div className="filter__date">
        <div className="filter__from">
          <p className="filter__sub__title">Từ ngày</p>
          <DatePicker />
        </div>
        <div className="filter__from">
          <p className="filter__sub__title">Đến ngày</p>
          <DatePicker/>
        </div>
      </div>
      <div className="filter__status">
        <p className="filter__sub__title">Tình trạng sử dụng</p>
        <div className="filter__radio">
          <Radio
            id="all"
            name="filter__status"
            value={"all"}
            isChecked={radioValue === "all" ? true : false}
            onChecked={handleGetRadioValue}
            text="Tất cả"
          />
          <Radio
            id="used"
            name="filter__status"
            value={"used"}
            isChecked={radioValue === "used" ? true : false}
            onChecked={handleGetRadioValue}
            text="Đã sử dụng"
          />
          <Radio
            id="unused"
            name="filter__status"
            value={"unused"}
            isChecked={radioValue === "unused" ? true : false}
            onChecked={handleGetRadioValue}
            text="Chưa sử dụng"
          />
          <Radio
            id="expire"
            name="filter__status"
            value={"expire"}
            isChecked={radioValue === "expire" ? true : false}
            onChecked={handleGetRadioValue}
            text="Hết hạn"
          />
        </div>
      </div>
      <div className="filter__checking">
        <p className="filter__sub__title">Cổng Check - in</p>
        <div className="filter__checking__checkboxs">
          <Checkbox
            id="c__all"
            isChecked={checkList === "c__all" ? true : false}
            text="Tất cả"
            value="c__all"
            onChecked={handleGetChecked}
          />
          <Checkbox
            id="c__c1"
            isChecked={checkList.includes("c__c1")}
            text="Cổng 1"
            value="c__c1"
            onChecked={handleGetChecked}
          />
          <Checkbox
            id="c__c2"
            isChecked={checkList.includes("c__c2")}
            text="Cổng 2"
            value="c__c2"
            onChecked={handleGetChecked}
          />
          <Checkbox
            id="c__c3"
            isChecked={checkList.includes("c__c3")}
            text="Cổng 3"
            value="c__c3"
            onChecked={handleGetChecked}
          />
          <Checkbox
            id="c__c4"
            isChecked={checkList.includes("c__c4")}
            text="Cổng 4"
            value="c__c4"
            onChecked={handleGetChecked}
          />
          <Checkbox
            id="c__c5"
            isChecked={checkList.includes("c__c5")}
            text="Cổng 5"
            value="c__c5"
            onChecked={handleGetChecked}
          />
        </div>
      </div>
      <button className="filter__btn" onClick={handleFilter}>
        Lọc
      </button>
    </div>
  );
};

export default Filter;
