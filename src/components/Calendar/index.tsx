import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hiddenDatePicker } from "../../slice/ModalSlice";
import { RootState } from "../../store";
import Radio from "../Radio";

interface Props {}
type DateOption = 0 | 1;
// 0 is day and 1 is week
export interface DateTime {
  day: number;
  month: number;
  year: number;
}
interface OtherTime {
  prev: number;
  next: number;
}
export interface Position {
  top: number;
  left: number;
  onGetDate: (date: DateTime) => void;
  isOpen: boolean;
}
const Calendar = ({ top, left, onGetDate, isOpen }: Position) => {
  const [option, setOptions] = useState<DateOption>(0);

  const dispatch = useDispatch();

  const handleGetRadio = (value: number) => {
    option !== value && setOptions(value as DateOption);
  };

  const getDaysOfMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };
  const [dateTime, setDateTime] = useState<DateTime>(() => {
    const dateNow = new Date();

    const monthYear = dateNow.getMonth();

    const monthReferences = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const month = monthReferences[monthYear];

    const year = dateNow.getFullYear();

    const day = dateNow.getDate();

    return {
      day,
      month,
      year,
    };
  });

  const prevDay = getDaysOfMonth(dateTime.year, dateTime.month - 1);

  const [prevDate, setPrevDate] = useState<OtherTime>(() => {
    const prevDate = new Date(
      dateTime.year,
      dateTime.month - 1,
      prevDay
    ).getDay();

    const nextDate = new Date(
      getDaysOfMonth(dateTime.year, dateTime.month)
    ).getDay();

    return {
      prev: prevDate + 1,
      next: 7 - nextDate,
    };
  });

  useEffect(() => {
    const prevClone = { ...dateTime };
    const nextClone = { ...dateTime };
    if (prevClone.month > 1) {
      prevClone.month = prevClone.month - 1;
    } else {
      prevClone.month = 12;
      prevClone.year = prevClone.year - 1;
    }
    // if (nextClone.month > 11) {
    //   nextClone.month = 1;
    //   nextClone.year = nextClone.year + 1;
    // } else {
    //   nextClone.month = nextClone.month + 1;
    // }

    const prevDate =
      new Date(prevClone.year, prevClone.month - 1, prevDay).getDay() + 1;

    const nextDate = new Date(
      nextClone.year,
      nextClone.month - 1,
      getDaysOfMonth(nextClone.year, nextClone.month)
    ).getDay();

    setPrevDate({ prev: prevDate, next: nextDate > 0 ? 7 - nextDate : 0 });
  }, [dateTime]);

  const daysOfMonth = getDaysOfMonth(dateTime.year, dateTime.month);

  const getDateFromPrevDate = () => {
    const rs = [];
    for (let i = prevDay; i > prevDay - prevDate.prev + 1; i--) {
      rs.push(i);
    }

    return rs.reverse();
  };

  const handleChangeMonth = (type: -1 | 1) => {
    switch (type) {
      case -1:
        if (dateTime.month > 1) {
          setDateTime({ ...dateTime, month: dateTime.month - 1 });
        } else {
          setDateTime({ ...dateTime, month: 12, year: dateTime.year - 1 });
        }
        break;
      case 1:
        if (dateTime.month > 11) {
          setDateTime({ ...dateTime, month: 1, year: dateTime.year + 1 });
        } else {
          setDateTime({ ...dateTime, month: dateTime.month + 1 });
        }
        break;
      default:
        return dateTime;
    }
  };

  useEffect(() => {
    const datePicker = document.querySelector("#date__picker") as HTMLElement;
    if (datePicker) {
      // datePicker.style.top = `${top}%`;
      // datePicker.style.left = `${left}px`;
    }
  }, []);

  const handleChooseDate = (index: number) => {
    onGetDate({ ...dateTime, day: index });
    setDateTime({ ...dateTime, day: index });
  };

  return (
    <>
      <div
        className={
          isOpen ? "date__picker date__picker--display" : "date__picker"
        }
        id="date__picker"
      >
        <div className="date__picker__header">
          <i
            className="bx bxs-chevron-left"
            onClick={() => handleChangeMonth(-1)}
          ></i>
          <span>
            Tháng {dateTime.month}, {dateTime.year}
          </span>
          <i
            className="bx bxs-chevron-right"
            onClick={() => handleChangeMonth(1)}
          ></i>
        </div>
        <div className="date__picker__options">
          <Radio
            id="picker__day"
            value={"day"}
            isChecked={option === 0 ? true : false}
            name="a"
            text="Theo ngày"
            onChecked={handleGetRadio}
          />
          <Radio
            id="picker__week"
            value={"week"}
            isChecked={option === 1 ? true : false}
            name="b"
            text="Theo tuần"
            onChecked={handleGetRadio}
          />
        </div>
        <ul className="date__picker__title">
          <li>T2</li>
          <li>T3</li>
          <li>T4</li>
          <li>T5</li>
          <li>T6</li>
          <li>T7</li>
          <li>CN</li>
        </ul>
        <ul className="date__picker__main">
          {getDateFromPrevDate().map((number, index) => (
            <li
              className="date--none"
              key={index}
              onClick={() => setDateTime({ ...dateTime, day: number })}
            >
              {number}
            </li>
          ))}

          {Array.from(new Array(daysOfMonth)).map((number, index) => (
            <li
              key={index}
              onClick={() => handleChooseDate(index + 1)}
              className={`${
                (new Date().getFullYear() === dateTime.year &&
                  new Date().getMonth() + 1 === dateTime.month &&
                  new Date().getDate() === index + 1) 
                  ? "active"
                  : ""
              }`}
            >
              {index + 1}
            </li>
          ))}
          {Array.from(new Array(prevDate.next)).map((number, index) => (
            <li
              className="date--none"
              key={index}
              onClick={() => setDateTime({ ...dateTime, day: index + 1 })}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Calendar;
