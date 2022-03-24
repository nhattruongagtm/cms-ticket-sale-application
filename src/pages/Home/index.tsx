import { Line, Mix } from "@ant-design/charts";
import React, { useEffect, useState } from "react";
import DatePicker from "../../components/DatePicker";
import { Pie } from "@ant-design/plots";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {

};

interface LineChart {
  day: string;
  revenue: number;
}

const Home = (props: Props) => {
  const [data, setData] = useState<LineChart[]>([]);

  useEffect(() => {
    const data: LineChart[] = [
      { day: "T2", revenue: 8 },
      { day: "T3", revenue: 4 },
      { day: "T4", revenue: 3.5 },
      { day: "T5", revenue: 5 },
      { day: "T6", revenue: 4.9 },
      { day: "T7", revenue: 6 },
      { day: "CN", revenue: 7 },
    ];
    setData(data);
  }, []);

  const config = {
    data,
    xField: "day",
    yField: "revenue",
    seriesField: "name",
    yAxis: {
      label: {
        formatter: (v: any) => `${v}tr`,
      },
    },
    // legend: {
    //   position: 'top',
    // },
    smooth: true,
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
  };
  const onChange = (data: any, dateString: any) => {
    console.log(data);
    console.log(dateString);
  };

  const FamilyPackageData = [12, 19]
  const EventPackageData = [22, 59]

  const dataFamilyPie = {
    datasets: [
      {
        label: '# of Votes',
        data: FamilyPackageData,
        backgroundColor: [
          '#4F75FF',
          '#FF8A48',
        ],
        borderColor: [
          '#4F75FF',
          '#FF8A48',
        ],
        borderWidth: 1,
      },
    ],
  };
  const dataEventPie = {
    datasets: [
      {
        label: '# of Votes',
        data: EventPackageData,   
        backgroundColor: [
          '#4F75FF',
          '#FF8A48',
        ],
        borderColor: [
          '#4F75FF',
          '#FF8A48',
        ],
        borderWidth: 1,
      },
    ],
  };
  

  return (
    <div className="content__main">
      <div className="home">
        <p className="home__title title">Thống kê</p>
        <div className="home__profit">
          <p className="sub__title home__profit__title">Doanh thu</p>
          <DatePicker />
        </div>
        <div className="home__chart">
          <Line {...config} />
        </div>
        <div className="home__revenue">
          <p>Tổng doanh thu theo tuần</p>
          <p>
            525.145.000 <span>đồng</span>
          </p>
        </div>
        <div className="home__package">
          <div className="home__package__date">
            <DatePicker />
          </div>
          <div className="home__package__chart">
            <p className="home__chart__title sub__title">Gói gia đình</p>
            <div className="home__chart__pie">
            <Doughnut data={dataFamilyPie} />
            </div>
          </div>
          <div className="home__package__chart">
            <p className="home__chart__title sub__title">Gói sự kiện</p>
            <div className="home__chart__pie">
            <Doughnut data={dataEventPie} />
            </div>
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
