import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayDatePicker } from "../slice/ModalSlice";
import { RootState } from "../store";
import Calendar, { DateTime } from "./Calendar";
interface Props {
  onGetDate: (date: DateTime) => void;
  type: 0 | 1;
  date: DateTime;
}

interface Position {
  x: number;
  y: number;
}

const DatePicker = ({ onGetDate, type, date }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [position, setPosition] = useState<Position>({ x: 0, y: 30 });

  const handleGetDate = (date: DateTime) => {
    setIsOpen(false);
    onGetDate(date);
  };

  const handleOpen = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    // setPosition({
    //   x: 0,
    //   y: 500,
    // });
    setIsOpen(!isOpen);
  };

  return (
    <div className="home__profit__date calendar" id="calender">
      <span onClick={handleOpen}>
        {date.day !== 0 && type !== 0 ? (
          <>
            {date.day < 10 ? `0${date.day}` : date.day}/
            {date.month < 10 ? `0${date.month}` : date.month}/{date.year}
          </>
        ) : (
          <>
            {date.month === 0 ? (
              <>
                Tháng {new Date().getMonth() + 1}, {new Date().getFullYear()}
              </>
            ) : (
              <>
                Tháng {date.month}, {date.year}
              </>
            )}
          </>
        )}
      </span>
      <i className="bx bx-calendar-alt"></i>
      <Calendar
        top={position.y + 5}
        left={position.x}
        onGetDate={handleGetDate}
        isOpen={isOpen}
      />
    </div>
  );
};

export default DatePicker;
