import Notestable from "../Resuable/Notestable";

const StudentsList = () => {
  const StudentData = [
    {
      Name: "John",
      "Roll Number": "961321104000",
      Year: "III",
      Semester: "06",
      Batch: "2020-2024",
      download: "view",
    },
    {
      Name: "Ben",
      "Roll Number": "961321104033",
      Year: "II",
      Semester: "08",
      Batch: "2020-2024",
      download: "view",
    },
  ];
  

  return (
    <>
      <Notestable
        title="Students"
        headers={["Name", "Roll Number", "Year", "Semester", "Batch", "View"]}
        data={StudentData}
        CoutsName="Students"
      />
    </>
  );
};

export default StudentsList;
