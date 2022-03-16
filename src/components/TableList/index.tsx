import React from "react";

interface Props {}

const TableList = (props: Props) => {
  return (
    <div className="table__list">
      <table>
        <thead>
          <tr className="thead-list">
            <td className="tb__stt">STT</td>
            <td className="tb__code">Booking code</td>
            <td className="tb__quantity">Số vé</td>
            <td className="tb__name">Tên sự kiện</td>
            <td className="tb__ status">Tình trạng sử dụng</td>
            <td className="tb__expire">Ngày sử dụng</td>
            <td className="tb__start">Ngày xuất vé</td>
            <td className="port">Cổng Check-in</td>
            <td className="port"></td>
          </tr>
        </thead>
        <tbody>
          <tr className="body-list">
            <td className="tb__stt">1</td>
            <td className="tb__code">
              <p>ALT20210501</p>
            </td>
            <td className="tb__quantity">
              <p>123456789034</p>
            </td>
            <td className="tb__name">
              <p>Hội chợ triển lãm tiêu dùng 2021</p>
            </td>
            <td className="tb__status tb__status--expire">
              <span></span> Hết hạn
            </td>
            <td className="tb__expire">
              <p>14/04/2021</p>
            </td>
            <td className="tb__start">
              <p>14/04/2021</p>
            </td>
            <td className="port">
              <p>Cổng 1</p>
            </td>
            <td><i className='bx bx-dots-vertical-rounded'></i></td>
          </tr>
          <tr className="body-list">
            <td className="tb__stt">1</td>
            <td className="tb__code">
              <p>ALT20210501</p>
            </td>
            <td className="tb__quantity">
              <p>123456789034</p>
            </td>
            <td className="tb__name">
              <p>Hội chợ triển lãm tiêu dùng 2021</p>
            </td>
            <td className="tb__status tb__status--unused">
              <span></span> Chưa sử dụng
            </td>
            <td className="tb__expire">
              <p>14/04/2021</p>
            </td>
            <td className="tb__start">
              <p>14/04/2021</p>
            </td>
            <td className="port">
              <p>Cổng 1</p>
            </td>
            <td><i className='bx bx-dots-vertical-rounded'></i></td>
          </tr>
          <tr className="body-list">
            <td className="tb__stt">1</td>
            <td className="tb__code">
              <p>ALT20210501</p>
            </td>
            <td className="tb__quantity">
              <p>123456789034</p>
            </td>
            <td className="tb__name">
              <p>Hội chợ triển lãm tiêu dùng 2021</p>
            </td>
            <td className="tb__status tb__status--used">
              <span></span> Đã sử dụng
            </td>
            <td className="tb__expire">
              <p>14/04/2021</p>
            </td>
            <td className="tb__start">
              <p>14/04/2021</p>
            </td>
            <td className="port">
              <p>Cổng 1</p>
            </td>
            <td><i className='bx bx-dots-vertical-rounded'></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
