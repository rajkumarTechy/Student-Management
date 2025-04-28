import Notestable from "../Resuable/Notestable"


const InternalMarks = () => {

    const IntMarksData = [
        {
          name: "John",
          subject: "Theory of Computation",
          code: "CS3462",
          pass: "ok",
          mark: "96",
          download: "edit",
        },
        {
          name: "John",
          subject: "Theory of Computation",
          code: "CS3462",
          pass: "notok",
          mark: "-",
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
  )
}

export default InternalMarks