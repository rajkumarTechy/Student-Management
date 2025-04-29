import Notestable from "../Resuable/Notestable";

const InternalMarks = () => {
  const IntMarksData = [
    {
      Name: "John",
      Subject: "Theory of Computation",
      Code: "CS3462",
      Pass: "ok",
      Mark: "96",
      download: "edit",
    },
    {
      Name: "John",
      Subject: "Theory of Computation",
      Code: "CS3462",
      Pass: "notok",
      Mark: "-",
      download: "edit",
    },
  ];

  return (
    <>
      <Notestable
        title="Internal Marks"
        headers={["Name", "Subject", "Code", "Pass", "Mark", "Edit"]}
        data={IntMarksData}
        CoutsName="Students"
      />
    </>
  );
};

export default InternalMarks;
