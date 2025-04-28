import Notestable from "../Resuable/Notestable";

const TeachersList = () => {
  const TeachersData = [
    {
      name: "John",
      role: "Professor",
      "total subjects": "6",
      "total classes": "II, I",
      download: "view",
    },
    {
      name: "Ben",
      role: "HOD",
      "total subjects": "9",
      "total classes": "III, IV",
      download: "view",
    },
  ];

  return (
    <>
        <Notestable
          title="Teachers"
          headers={["Name", "Role", "Total Subjects", "Total Classes", "View"]}
          data={TeachersData}
          CoutsName="Teachers"
        />
    </>
  );
};

export default TeachersList;
