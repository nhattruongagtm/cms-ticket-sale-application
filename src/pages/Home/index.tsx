import { DatePicker } from "antd";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  const onChange = (data: any, dateString: any) => {
    console.log(data);
    console.log(dateString);
  };
  return (
    <div className="content__main">
      <div className="home">
        <p className="home__title title">Thống kê</p>
        <div className="home__profit">
          <p className="sub__title home__profit__title">Doanh thu</p>
          <div className="home__profit__date">
            <DatePicker onChange={onChange} />
          </div>
        </div>
        <div className="home__chart"></div>
        <div className="home__revenue">
          <p>Tổng doanh thu theo tuần</p>
          <p>
            525.145.000 <span>đồng</span>
          </p>
        </div>
        <div className="home__package">
          <div className="home__package__date">
            <DatePicker onChange={onChange} />
          </div>
          <div className="home__package__chart">
            <p className="home__chart__title sub__title">Gói gia đình</p>
            <div className="home__chart__pie"></div>
          </div>
          <div className="home__package__chart">
            <p className="home__chart__title sub__title">Gói sự kiện</p>
            <div className="home__chart__pie"></div>
          </div>
          <div className="home__package__chart">
            <p className="home__chart__title sub__title"></p>
            <div className="home__chart__note">
              <div className="chart__note__used">
                <span></span>
                <span>Vé đã sử dụng</span>
              </div>
              <div className="chart__note__unused">
                <span></span>
                <span>Vé chưa sử dụng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
