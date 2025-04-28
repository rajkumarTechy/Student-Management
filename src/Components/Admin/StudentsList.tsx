import Notestable from "../Resuable/Notestable";

const StudentsList = () => {
  const StudentData = [
    {
      name: "John",
      "roll number": "961321104000",
      year: "III",
      semester: "06",
      batch: "2020-2024",
      download: "view",
    },
    {
      name: "Ben",
      "roll number": "961321104033",
      year: "II",
      semester: "08",
      batch: "2020-2024",
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
