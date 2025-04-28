import Notestable from "../Resuable/Notestable";

const SemesterResults = () => {
  const ResultData = [
    {
      name: "John",
      subject: "Theory of Computation",
      code: "CS3462",
      pass: "ok",
      mark: "A+",
      download: "edit",
    },
    {
      name: "John",
      subject: "Theory of Computation",
      code: "CS3462",
      pass: "notok",
      mark: "A",
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
