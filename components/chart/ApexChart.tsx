'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import Playleft from '@/public/assets/playleft';
import Playright from '@/public/assets/playright';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const allMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const randomData = () => Array.from({ length: 12 }, () => Math.ceil(Math.random() * 5) * 10);

const ColumnChart: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(9);

  // 📌 Adapt number of visible bars to screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 360) setVisibleCount(4);
      else if (window.innerWidth <= 480) setVisibleCount(6);
      else setVisibleCount(9);
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

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
      labels: {
        style: { colors: '#919191', fontSize: '10px', fontFamily: 'CustomregularFont, sans-serif' },
      },
    },
    yaxis: {
      min: 0,
      max: 50,
      tickAmount: 5,
      labels: {
        formatter: (val) => val + 'm',
        style: { colors: '#919191', fontSize: '10px' },
      },
      axisBorder: { show: true, color: '#919191', width: 1 },
    },
    tooltip: { enabled: false },
    legend: { show: false },
    grid: { show: false },
    responsive: [
      {
        breakpoint: 1024,
        options: { chart: { height: 300 }, plotOptions: { bar: { columnWidth: '45%' } } },
      },
      {
        breakpoint: 768,
        options: { chart: { height: 250 }, plotOptions: { bar: { columnWidth: '50%' } } },
      },
      {
        breakpoint: 480,
        options: {
          chart: { height: 200 },
          plotOptions: { bar: { columnWidth: '55%' } },
          xaxis: { labels: { style: { fontSize: '9px' } } },
        },
      },
      {
        breakpoint: 360,
        options: {
          chart: { height: 180 },
          plotOptions: { bar: { columnWidth: '60%' } },
          xaxis: { labels: { style: { fontSize: '8px' } } },
          yaxis: { labels: { style: { fontSize: '8px' } } },
        },
      },
    ],
  };

  const handlePrev = () => setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  const handleNext = () =>
    setStartIndex((prev) => Math.min(prev + visibleCount, allMonths.length - visibleCount));

  return (
    <div className="bg-[#FCFCFC] rounded-lg relative p-2">
      <div className="flex items-center">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="z-10 absolute -left-2 sm:-left-3 bg-[#E4E4E4] p-1 sm:p-2 rounded-l hover:bg-gray-300 disabled:opacity-50"
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
          className="z-10 absolute -right-2 sm:-right-3 bg-[#E4E4E4] p-1 sm:p-2 rounded-r hover:bg-gray-300 disabled:opacity-50"
        >
          <Playright />
        </button>
      </div>
    </div>
  );
};

export default ColumnChart;
