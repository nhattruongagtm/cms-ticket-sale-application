import { Line } from '@ant-design/plots'
import React, { useEffect, useState } from 'react'
import { DateTime } from '../../components/Calendar'
import DatePicker from '../../components/DatePicker'

type Props = {}

interface LineChart {
    day: string;
    revenue: number;
  }

const LineChart = (props: Props) => {
  const [data, setData] = useState<LineChart[]>([]);

  useEffect(() => {
    const data: LineChart[] = [
      { day: "Thứ 2", revenue: 8 },
      { day: "Thứ 3", revenue: 4 },
      { day: "Thứ 4", revenue: 3.5 },
      { day: "Thứ 5", revenue: 5 },
      { day: "Thứ 6", revenue: 4.9 },
      { day: "Thứ 7", revenue: 6 },
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

    const handleGetDate = (date: DateTime) =>{
        
    }
  return (
    <>
    <div className="home__profit">
          <p className="sub__title home__profit__title">Doanh thu</p>
          <DatePicker onGetDate={handleGetDate} type={0} date={{day: 0, month: 0, year: 0}}/>
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
    </>
  )
}

export default LineChart