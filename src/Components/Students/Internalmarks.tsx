import AssignmentTable from "../Resuable/AssignmentTable ";



const Internalmarks = () => {
  const firstSem = [
    { subject: "(CS345) Theory of Computation",  mark: "80/100" },
    { subject: "(CS345) Theory of Computation",  mark: "75/100" },
    { subject: "(CS345) Theory of Computation",  mark: "98/100" },
    { subject: "(CS345) Theory of Computation",  mark: "92/100" },
  ];

  const LastSem = [
    { subject: "(CS3452) Theory of Computation",  mark: "91/100" },
    { subject: "(CS3751) Data Structures", mark: "86/100" },
    { subject: "(CS3453) Cryptography and Cyber Security",  mark: "82/100" },
    { subject: "(CS3852) Database Management System",  mark: "100/100" },
  ];

  return (
    <div className="bg-background h-[calc(100vh-5rem)] py-6 overflow-y-scroll">
      <AssignmentTable title="First Internal Examination" rows={firstSem} />
      <AssignmentTable title="Second Internal Examination" rows={LastSem} />
    </div>
  );
};

export default Internalmarks;
