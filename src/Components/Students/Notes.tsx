
import Notestable from '../Resuable/Notestable'

const Notes = () => {

  const NotesData = [
    {
      Name: "Theory of Computation",
      Code: "21CS035",
      Regulation: "2021 - 2025",
      Semester: "08",
      download: "Download",
    },
    {
      Name: "Deep learning",
      Code: "22CS025",
      Regulation: "2021 - 2025",
      Semester: "08",
      download: "Download",
    },
  ];

  return (
    <>
      <Notestable 
      title='Notes'
      headers={["Name", "Code", "Regulation", "Semester", "Download"]}
      data={NotesData}
      CoutsName="Notes"
      />
    </>
  )
}

export default Notes
