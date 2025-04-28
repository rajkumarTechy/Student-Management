import Notestable from "../Resuable/Notestable";

const CircularsAdmin = () => {

    const Circulars = [
        {
          name: "John",
          year: "II",
          date: "10.11.2024",
          download: "downloads",
    
        },
        {
          name: "Ben",
          year: "IV",
          date: "12.12.2025",
          download: "downloads",
    
        },
      ];

  return (
    <Notestable
        title="Circulars"
        headers={["Name", "Year", "Date", "Downloads"]}
        data={Circulars}
        CoutsName="Circulars"
      />
  )
}

export default CircularsAdmin