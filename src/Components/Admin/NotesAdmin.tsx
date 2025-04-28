import Notestable from "../Resuable/Notestable";

const NotesAdmin = () => {
  const Notes = [
    {
      name: "John",
      code: "CS3462",
      regulation: "2021 - 2025",
      semester: "06",

    },
    {
      name: "John",
      code: "CS3462",
      regulation: "2022 - 2026",
      semester: "06",

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
