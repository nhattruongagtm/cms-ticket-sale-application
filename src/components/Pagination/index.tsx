import React from "react";

interface Props {}

const Pagination = (props: Props) => {
  return (
    <ul className="pagination">
      <li className="prev">
        <i className="bx bxs-left-arrow"></i>
      </li>
      <li className="paginate__item">1</li>
      <li className="paginate__item">2</li>
      <li className="paginate__item">3</li>
      <li className="paginate__item">...</li>
      <li className="paginate__item">20</li>
      <li className="next">
        <i className="bx bxs-right-arrow"></i>
      </li>
    </ul>
  );
};

export default Pagination;
