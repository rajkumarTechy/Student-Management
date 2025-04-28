import { HiOutlineUserGroup } from "react-icons/hi";
import { TbDeviceIpadCheck } from "react-icons/tb";
import { LiaUserGraduateSolid } from "react-icons/lia";
import ApexChart from "./Chart";

const Overview = () => {
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "pie",
    },
    labels: ["I Year", "II Year", "III Year", "IV Year"],
    colors: ["#3B82F6", "#10B981", "#F59E0B", "#8B5CF6"],
    legend: {
      position: "bottom",
      labels: {
        colors: "#1F2937",
        useSeriesColors: false,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: string) => {
        return `${parseInt(val)}%`;
      },
      style: {
        colors: ["#fff"],
      },
    },
    stroke: {
      show: false,
    },
  };

  const chartSeries = [75, 75, 15, 45];
  const series = [
    {
      name: "CS3524",
      data: [44, 55, 57],
    },
    {
      name: "CS4528",
      data: [76, 85, 47],
    },
    {
      name: "CS6398",
      data: [35, 41, 36],
    },
    {
      name: "CS9632",
      data: [76, 85, 108],
    },
  ];

  const baroptions: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Internal 1", "Internal 2", "Internal 3"],
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <>
      <div className="bg-background h-[1000px] w-full pt-12 ">
        <div className="containerTop animate-fade-up animate-ease-in-out mx-4 bg-white  h-60 rounded-2xl shadow-[0px_1px_15px_-6px_rgba(0,_0,_0,_1)] flex flex-col">
          <h1 className="text-fontPrimary font-semibold px-3.5 py-2 text-lg">
            Welcome John
          </h1>
          <div className="flex gap-x-5 my-auto">
            <div className="container flex gap-x-6 items-center p-3 bg-white border-2 border-primary rounded-2xl mx-12 pl-16 shadow shadow-primary">
              <LiaUserGraduateSolid size={50} className="text-fontPrimary" />
              <h1 className="font-medium text-[18px] text-center text-fontPrimary">
                Total Students <br />
                240
              </h1>
            </div>
            <div className="container flex gap-x-6 items-center p-3 bg-white border-2 border-primary rounded-2xl mx-12 pl-16 shadow shadow-primary">
              <HiOutlineUserGroup size={50} className="text-fontPrimary" />
              <h1 className="font-medium text-[18px] text-center text-fontPrimary">
                Total Staff <br />
                125
              </h1>
            </div>
            <div className="container flex gap-x-6 items-center p-3 bg-white border-2 border-primary rounded-2xl mx-12 pl-16 shadow shadow-primary">
              <TbDeviceIpadCheck size={50} className="text-fontPrimary" />
              <h1 className="font-medium text-[18px] text-center text-fontPrimary">
                Pass Percentage <br />
                90%
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5 h-82 mx-5 mt-5 animate-fade-up animate-delay-400">
          <div className="bg-white rounded-2xl shadow-[0px_1px_15px_-6px_rgba(0,_0,_0,_1)]">
            <h1 className="text-fontPrimary font-semibold p-4 text-lg">
              Batch Overview
            </h1>
            <div className="table mx-8 w-[90%] text-center">
              <thead className="[&>tr>th]:p-2 [&>tr>th]:border-b [&>tr>th]:border-fontSecondary [&>tr>th]:font-medium  [&>tr>th]:text-fontPrimary">
                <tr>
                  <th>Year</th>
                  <th>Batch</th>
                  <th>Pass Percentage</th>
                </tr>
              </thead>
              <tbody className="[&>tr>td]:p-2 [&>tr>td]:border-b [&>tr>td]:border-fontSecondary [&>tr>td]:text-fontPrimary [&>tr>td]:font-medium">
                <tr>
                  <td>I</td>
                  <td>2024 - 2026</td>
                  <td>95%</td>
                </tr>
                <tr>
                  <td>I</td>
                  <td>2024 - 2026</td>
                  <td>95%</td>
                </tr>
                <tr>
                  <td>I</td>
                  <td>2024 - 2026</td>
                  <td>95%</td>
                </tr>
                <tr>
                  <td>I</td>
                  <td>2024 - 2026</td>
                  <td>95%</td>
                </tr>
              </tbody>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-[0px_1px_15px_-6px_rgba(0,_0,_0,_1)]">
            <h1 className="text-fontPrimary font-semibold p-4 text-lg">
              Assignment Submission Status
            </h1>
            <div className="flex justify-center">
              <ApexChart
                type="pie"
                options={chartOptions}
                series={chartSeries}
                width={320}
              />
              ;
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-[0px_1px_15px_-6px_rgba(0,_0,_0,_1)]">
            <h1 className="text-fontPrimary font-semibold p-4 text-lg">
              Semester Status
            </h1>
            <div className="flex justify-center">
              <ApexChart
                type="pie"
                options={chartOptions}
                series={chartSeries}
                width={320}
              />
              ;
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-[0px_1px_15px_-6px_rgba(0,_0,_0,_1)]">
            <h1 className="text-fontPrimary font-semibold p-4 text-lg">
              Internal Performance
            </h1>
            <div className="w-full">
              <ApexChart
                type="bar"
                options={baroptions}
                series={series}
                width="100%"
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
