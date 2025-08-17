'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import Playleft from '@/public/assets/playleft';
import Playright from '@/public/assets/playright';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const allMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const randomData = () => Array.from({ length: 12 }, () => Math.ceil(Math.random() * 5) * 10);

const ColumnChart: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 9;

  const chartSeries = [
    { name: 'Net Profit', data: randomData() },
    { name: 'Revenue', data: randomData() },
    { name: 'Free Cash Flow', data: randomData() },
  ];

  const visibleMonths = allMonths.slice(startIndex, startIndex + visibleCount);
  const visibleSeries = chartSeries.map((s) => ({
    ...s,
    data: s.data.slice(startIndex, startIndex + visibleCount),
  }));

  const chartOptions: ApexOptions = {
    chart: { type: 'bar', height: 200, animations: { enabled: true }, toolbar: { show: false } },
    colors: ['#4545FE', '#12B76A', '#F04438'],
    plotOptions: { bar: { horizontal: false, columnWidth: '47%', borderRadius: 2 } },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ['transparent'] },
    xaxis: {
      categories: visibleMonths,
      axisBorder: { show: false },
      labels: { style: { colors: '#919191', fontSize: '10px',fontFamily:"CustomregularFont, sans-serif" } },
    },
    yaxis: {
      min: 0,
      max: 50,
      tickAmount: 5,
      labels: { 
        formatter: (val) => val + 'm',
        style: { colors: '#919191', fontSize: '10px' } 
      },
      axisBorder: { show: true, color: '#919191', width: 1 },
    },
    tooltip: { enabled: false },
    legend: { show: false },
    grid: { show: false },
    responsive: [
      { breakpoint: 1024, options: { chart: { height: 300 }, plotOptions: { bar: { columnWidth: '45%' } } } },
      { breakpoint: 768, options: { chart: { height: 200 }, plotOptions: { bar: { columnWidth: '55%' } } } },
      { breakpoint: 480, options: { chart: { height: 200 }, plotOptions: { bar: { columnWidth: '75%' } } } },
    ],
  };

  const handlePrev = () => setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  const handleNext = () => setStartIndex((prev) => Math.min(prev + visibleCount, allMonths.length - visibleCount));

  return (
    <div className=" bg-[#FCFCFC] rounded-lg   relative">
      <div className="flex items-center">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="z-10  absolute left-[-10px] cursor-pointer bg-[#E4E4E4] text-gray-700 rounded-l hover:bg-gray-300 disabled:opacity-50"
        >
          <Playleft />
        </button>

        <div className="flex-1">
          <ReactApexChart options={chartOptions} series={visibleSeries} type="bar" height={200} />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= allMonths.length}
          className="z-10 absolute right-[-10px] cursor-pointer bg-[#E4E4E4] text-gray-700  rounded-r hover:bg-gray-300 disabled:opacity-50"
        >
          <Playright />
        </button>
      </div>
    </div>
  );
};

export default ColumnChart;
