import Notestable from "../Resuable/Notestable";

const AssignmentList = () => {
  const AssignmentData = [
    {
      name: "John",
      subject: "Theory of Computation",
      code: "CS3462",
      status: "ok",
      mark: "96",
      download: "edit",
    },
    {
      name: "John",
      subject: "Theory of Computation",
      code: "CS3462",
      status: "notok",
      mark: "-",
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
