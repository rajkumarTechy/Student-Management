import AssignmentTable from "../Resuable/AssignmentTable ";



const Assignments = () => {
  
  const firstAssignmentRows = [
    { subject: "(CS345) Theory of Computation", status: "done", mark: "9/10" },
    { subject: "(CS345) Theory of Computation", status: "done", mark: "-" },
    { subject: "(CS345) Theory of Computation", status: "not_done", mark: "9/10" },
    { subject: "(CS345) Theory of Computation", status: "done", mark: "9/10" },
  ];

  const secondAssignmentRows = [
    { subject: "(CS3452) Theory of Computation", status: "done", mark: "9/10" },
    { subject: "(CS3751) Data Structures", status: "not_done", mark: "-" },
    { subject: "(CS3453) Cryptography and Cyber Security", status: "done", mark: "8/10" },
    { subject: "(CS3852) Database Management System", status: "done", mark: "10/10" },
  ];

  return (
    <div className="bg-background h-[calc(100vh-5rem)] py-6 overflow-y-scroll">
      <AssignmentTable title="First Assignment" rows={firstAssignmentRows} />
      <AssignmentTable title="Second Assignment" rows={secondAssignmentRows} />
    </div>
  );
};

export default Assignments;
