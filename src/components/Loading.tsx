import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return <div className="loading">
      <span><i className='bx bxs-circle'></i></span>
      <span><i className='bx bxs-circle'></i></span>
      <span><i className='bx bxs-circle'></i></span>
  </div>
};

export default Loading;
