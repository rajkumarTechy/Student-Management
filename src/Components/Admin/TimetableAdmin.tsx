import Notestable from "../Resuable/Notestable";

const TimetableAdmin = () => {
  const TimetableData = [
    {
      Day: "Monday",
      I:"CS345",
      II: "CS698",
      III: "CS358",
      IV: "CS658",
      V: "CS897",
      VI: "CS9874",
      download: "edit",
    },
    {
      Day: "Tuesday",
      I: "CS345",
      II: "CS698",
      III: "CS358",
      IV: "CS658",
      V: "CS897",
      VI: "CS9874",
      download: "edit",
    },
  ];

  return (
    <>
      <Notestable
        title="Time Table"
        headers={["Day", "I", "II", "III", "IV", "V", "VI", "Edit"]}
        isTimetable={true}
        data={TimetableData}
      />
    </>
  );
};

export default TimetableAdmin;
