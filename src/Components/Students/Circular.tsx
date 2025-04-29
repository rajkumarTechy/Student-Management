import Notestable from "../Resuable/Notestable";

const Circular = () => {
  const CircularData = [
    {
      Name: "Internal Examination",
      Year: "I,II",
      Date: "10.11.2024",
      download: "Download",
    },
    {
      Name: "Semester Examination Timetable",
      Year: "ALL",
      Date: "24.03.2024",
      download: "Download",
    },
  ];

  return (
    <>
      <Notestable
        title="Circulars"
        headers={["Name", "Year", "Date", "Download"]}
        data={CircularData}
        CoutsName="Circulars"
      />
    </>
  );
};

export default Circular;
