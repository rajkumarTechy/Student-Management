import Notestable from "../Resuable/Notestable"

const Circular = () => {

  const CircularData = [
    {
      name: "Internal Examination",
      year: "I,II",
      date: "10.11.2024",
      download: "Download",
    },
    {
      name: "Semester Examination Timetable",
      year: "ALL",
      date: "24.03.2024",
      download: "Download",
    },
  ];

  return (
    <>
      <Notestable 
      title='Circulars'
      headers={["Name", "Year", "Date", "Download"]}
      data={CircularData}
      CoutsName="Circulars"
      />
    </>
  )
}

export default Circular
