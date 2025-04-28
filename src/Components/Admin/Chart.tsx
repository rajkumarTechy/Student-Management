// components/ApexChart.tsx
import React from "react";
import ReactApexChart from "react-apexcharts";

type ChartType =
  | "line"
  | "area"
  | "bar"
  | "pie"
  | "donut"
  | "radialBar"
  | "scatter"
  | "bubble"
  | "heatmap"
  | "candlestick"
  | "boxPlot"
  | "radar"
  | "polarArea"
  | "rangeBar"
  | "treemap";

type ApexChartProps = {
  type: ChartType;
  options: ApexCharts.ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  width?: number | string;
  height?: number | string;
};

const ApexChart: React.FC<ApexChartProps> = ({
  type,
  options,
  series,
  width,
  height,
}) => {
  return (
    <ReactApexChart
      type={type}
      options={options}
      series={series}
      width={width}
      height={height}
    />
  );
};

export default ApexChart;
