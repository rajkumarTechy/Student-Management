import Notestable from "../Resuable/Notestable";

const SemesterResults = () => {
  const ResultData = [
    {
      Name: "John",
      Subject: "Theory of Computation",
      Code: "CS3462",
      Pass: "ok",
      Mark: "A+",
      download: "edit", // keep this for icon rendering in the "Edit" column
    },
    {
      Name: "John",
      Subject: "Theory of Computation",
      Code: "CS3462",
      Pass: "notok",
      Mark: "A",
      download: "edit",
    },
  ];
  

  return (
    <>
      <Notestable
        title="Semester Result"
        headers={["Name", "Subject", "Code", "Pass", "Mark", "Edit"]}
        data={ResultData}
        CoutsName="Students"
      />
    </>
  );
};

export default SemesterResults;
