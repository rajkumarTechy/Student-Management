import Notestable from "../Resuable/Notestable";

const CircularsAdmin = () => {
  const Circulars = [
    {
      Name: "John",
      Year: "II",
      Date: "10.11.2024",
      download: "downloads",
    },
    {
      Name: "Ben",
      Year: "IV",
      Date: "12.12.2025",
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
  );
};

export default CircularsAdmin;
