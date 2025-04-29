import Notestable from "../Resuable/Notestable";

const TeachersList = () => {
  const TeachersData = [
    {
      Name: "John",
      Role: "Professor",
      "Total Subjects": "6",
      "Total Classes": "II, I",
      download: "view",
    },
    {
      Name: "Ben",
      Role: "HOD",
      "Total Subjects": "9",
      "Total Classes": "III, IV",
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
