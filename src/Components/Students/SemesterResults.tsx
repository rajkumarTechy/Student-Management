import AssignmentTable from "../Resuable/AssignmentTable ";


const SemesterResults = () => {
  const firstSem = [
    { subject: "(CS345) Theory of Computation",  grade: "A+" },
    { subject: "(CS345) Theory of Computation",  grade: "B+" },
    { subject: "(CS345) Theory of Computation",  grade: "B" },
    { subject: "(CS345) Theory of Computation",  grade: "O" },
  ];

  const LastSem = [
    { subject: "(CS3452) Theory of Computation",  grade: "A" },
    { subject: "(CS3751) Data Structures", grade: "A+" },
    { subject: "(CS3453) Cryptography and Cyber Security",  grade: "B+" },
    { subject: "(CS3852) Database Management System",  grade: "A+" },
  ];

  return (
    <div className="bg-background h-[calc(100vh-5rem)] py-6 overflow-y-scroll">
      <AssignmentTable title="First Semester" rows={firstSem} />
      <AssignmentTable title="Second Semester" rows={LastSem} />
    </div>
  );
};

export default SemesterResults;
