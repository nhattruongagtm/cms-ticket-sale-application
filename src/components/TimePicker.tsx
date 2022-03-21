import React, { useState } from "react";

interface Props {}

export interface Time{
  hour: number;
  minute: number;
  second: number;
}


const TimePicker = (props: Props) => {
  const [time,setTime] = useState<string | Time>("hh:mm:ss");
    
  return (
    <div className="home__profit__date home__profit__time">
      <select name="" id="">
          <option value="hh:mm:ss">hh:mm:ss</option>
      </select>
      <i className='bx bx-stopwatch'></i>
  </div>
  );
};

export default TimePicker;
