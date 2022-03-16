import { DatePicker } from "antd";
import React from "react";

type Props = {};

const Filter = (props: Props) => {
  return (
    <div className="filter filter--dis play">
      <p className="filter__title">Lọc vé</p>
      <div className="filter__date">
        <div className="filter__from">
          <p className="filter__sub__title">Từ ngày</p>
          <div className="filter__date__picker">
            <DatePicker />
          </div>
        </div>
        <div className="filter__from">
          <p className="filter__sub__title">Đến ngày</p>
          <div className="filter__date__picker">
            <DatePicker />
          </div>
        </div>
      </div>
      <div className="filter__status">
        <p className="filter__sub__title">Tình trạng sử dụng</p>
        <div className="filter__radio">
          <label htmlFor="all">
            <input type="radio" name="filter__status" id="all" value={"all"} />
            Tất cả
          </label>
          <label htmlFor="used">
            <input
              type="radio"
              name="filter__status"
              id="used"
              value={"used"}
            />
            Đã sử dụng
          </label>
          <label htmlFor="unused">
            <input
              type="radio"
              name="filter__status"
              id="unused"
              value={"unused"}
            />
            Chưa sử dụng
          </label>
          <label htmlFor="expire">
            <input
              type="radio"
              name="filter__status"
              id="expire"
              value={"expire"}
            />
            Hết hạn
          </label>
        </div>
      </div>
      <div className="filter__checking">
        <p className="filter__sub__title">Cổng Check - in</p>
        <div className="filter__checking__checkboxs">
          <label htmlFor="c__all">
            <input type="checkbox" name="" id="c__all" />
            Tất cả
          </label>
          <label htmlFor="c__c1">
            <input type="checkbox" name="" id="c__c1" />
            Cổng 1
          </label>
          <label htmlFor="c__c2">
            <input type="checkbox" name="" id="c__c2" />
            Cổng 2
          </label>
          <label htmlFor="c__c3">
            <input type="checkbox" name="" id="c__c3" />
            Cổng 3
          </label>
          <label htmlFor="c__c4">
            <input type="checkbox" name="" id="c__c4" />
            Cổng 4
          </label>
          <label htmlFor="c__c5">
            <input type="checkbox" name="" id="c__c5" />
            Cổng 5
          </label>
        </div>
      </div>
      <button className="filter__btn">Lọc</button>
    </div>
  );
};

export default Filter;
