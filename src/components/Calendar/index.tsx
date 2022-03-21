import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hiddenDatePicker } from "../../slice/ModalSlice";
import { RootState } from "../../store";
import Radio from "../Radio";

interface Props {}
type DateOption = "day" | "week";
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
  const [option, setOptions] = useState<DateOption>("day");

  const dispatch = useDispatch();

  const handleGetRadio = (value: string) => {
    setOptions(value as DateOption);
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

  const prevMonth = getDaysOfMonth(dateTime.year, dateTime.month - 1);

  const [prevDate, setPrevDate] = useState<OtherTime>(() => {
    const prevDate = new Date(
      dateTime.year,
      dateTime.month - 1,
      prevMonth
    ).getDay();

    const nextDate = new Date(
      getDaysOfMonth(dateTime.year, dateTime.month)
    ).getDay();

    return {
      prev: prevDate + 1,
      next: 7 - nextDate,
    };
  });

  // useEffect(() => {
  //   const prevDate = new Date(
  //     dateTime.year,
  //     dateTime.month - 1,
  //     prevMonth
  //   ).getDay();

  //   const nextDate = new Date(
  //     dateTime.year,
  //     dateTime.month,
  //     getDaysOfMonth(dateTime.year, dateTime.month)
  //   ).getDay();

  //   setPrevDate({ prev: prevDate + 1, next: 7 - nextDate });
  // }, [dateTime]);

  const daysOfMonth = getDaysOfMonth(dateTime.year, dateTime.month);

  const getDateFromPrevDate = () => {
    const rs = [];
    for (let i = prevMonth; i > prevMonth - prevDate.prev + 1; i--) {
      rs.push(i);
    }

    return rs.reverse();
  };


  const handleChangeMonth = (type: -1 | 1) => {
    switch (type) {
      case -1:
        if (dateTime.month > 2) {
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

  // useEffect(() => {
  //   const datePicker = document.querySelector("#date__picker") as HTMLElement;
  //   if (datePicker) {
  //     // datePicker.style.top = `${top}%`;
  //     // datePicker.style.left = `${left}px`;
  //   }
  // }, []);

  const handleChooseDate = (index: number) => {
    onGetDate({ ...dateTime, day: index })
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
            isChecked={option === "day" ? true : false}
            name="date__picker"
            text="Theo ngày"
            onChecked={handleGetRadio}
          />
          <Radio
            id="picker__week"
            value={"week"}
            isChecked={option === "week" ? true : false}
            name="date__picker"
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
                new Date().getFullYear() === dateTime.year &&
                new Date().getMonth() + 1 === dateTime.month &&
                new Date().getDate() === index + 1
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
