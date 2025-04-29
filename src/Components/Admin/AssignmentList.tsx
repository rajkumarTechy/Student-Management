import Notestable from "../Resuable/Notestable";

const AssignmentList = () => {
  const AssignmentData = [
    {
      Name: "John",
      Subject: "Theory of Computation",
      Code: "CS3462",
      Status: "ok",
      Mark: "96",
      download: "edit",
    },
    {
      Name: "John",
      Subject: "Theory of Computation",
      Code: "CS3462",
      Status: "notok",
      Mark: "-",
      download: "edit",
    },
  ];

  return (
    <>
      <Notestable
        title="Assignments"
        headers={["Name", "Subject", "Code", "Status", "Mark", "Edit"]}
        data={AssignmentData}
        CoutsName="Assignments"
      />
    </>
  );
};

export default AssignmentList;
