
import Notestable from '../Resuable/Notestable'

const Notes = () => {

  const NotesData = [
    {
      name: "Theory of Computation",
      code: "21CS035",
      regulation: "2021 - 2025",
      semester: "08",
      download: "Download",
    },
    {
      name: "Deep learning",
      code: "22CS025",
      regulation: "2021 - 2025",
      semester: "08",
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
