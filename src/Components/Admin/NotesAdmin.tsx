import Notestable from "../Resuable/Notestable";

const NotesAdmin = () => {
  const Notes = [
    {
      Name: "John",
      Code: "CS3462",
      Regulation: "2021 - 2025",
      Semester: "06",

    },
    {
      Name: "John",
      Code: "CS3462",
      Regulation: "2022 - 2026",
      Semester: "06",
    },
  ];

  return (
    <>
      <Notestable
        title="Notes"
        headers={["Name", "Code", "Regulation", "Semester", "Downloads"]}
        data={Notes}
        CoutsName="Notes"
      />
    </>
  );
};

export default NotesAdmin;
