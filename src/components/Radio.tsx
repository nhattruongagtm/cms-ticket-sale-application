import React from "react";

type Props = {
  name: string;
  id: string;
  text: string;
  value: string | number
  isChecked: boolean,
};

const Radio = ({ name, id, text,value, isChecked }: Props) => {
  return (
    <label htmlFor={id} className="label__checkbox">
      <input type="radio" className="raxch" value={value} id={id} name={name} hidden/>
      <div className="radio">
          <div className="radio__check">

          </div>
      </div>
      <span className="text__checkhox">{text}</span>
    </label>
  );
};

export default Radio;
