const Timetable = () => {
  return (
    <div className="containerTop animate-fade-up animate-ease-in-out bg-white mx-5 mt-8 h-auto pb-4 rounded-2xl shadow-[0px_1px_15px_-6px_rgba(0,_0,_0,_1)] flex flex-col">
      <div className="flex justify-between mx-4.5 py-3.5">
        <h1 className="text-fontPrimary font-semibold text-xl">Time Table</h1>
      </div>
      <div className="table mx-10 mt-4 rounded-2xl border border-black">
        <thead className="text-center font-semibold bg-tableheading text-fontPrimary">
          <tr>
            <td className="p-2 rounded-tl-2xl border-b border-r border-fontSecondary">
              Day/Period
            </td>
            <td className="p-2 border-b border-r border-fontSecondary">
              I<br />
              9:30-10:30
            </td>
            <td className="border-b border-r border-fontSecondary">
              <br />
              10:30-10:45
            </td>
            <td className="border-b border-r border-fontSecondary">
              II
              <br />
              10:45-11:45
            </td>
            <td className="border-b border-r border-fontSecondary">
              III
              <br />
              11:45-12:45
            </td>
            <td className="border-b border-r border-fontSecondary">
              <br />
              12:45-1:15
            </td>
            <td className="border-b border-r border-fontSecondary">
              IV
              <br />
              1:15-2:15
            </td>
            <td className="border-b border-r border-fontSecondary">
              V<br />
              2:15-3:15
            </td>
            <td className="border-b border-r border-fontSecondary">
              <br />
              3:15-3:30
            </td>
            <td className="rounded-tr-2xl border-b  border-fontSecondary">
              VI
              <br />
              3:30-4:00
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center border-b border-r border-fontSecondary font-semibold bg-tableheading text-fontPrimary p-2">
              Monday
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS4562
            </td>
            <td
              rowSpan={5}
              className="text-center font-semibold border-r border-l border-fontSecondary bg-tableheading text-fontPrimary p-2"
            >
              Break
            </td>
            <td className="text-center border-b border-r border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS6578
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS4411
            </td>
            <td
              rowSpan={5}
              className="text-center font-semibold border-r border-l border-fontSecondary bg-tableheading text-fontPrimary p-2"
            >
              Lunch
            </td>
            <td className="text-center border-b border-r border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS3654
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS9635
            </td>
            <td
              rowSpan={5}
              className="text-center font-semibold border-r border-l border-fontSecondary bg-tableheading text-fontPrimary p-2"
            >
              Break
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS8795
            </td>
          </tr>
          <tr className="">
            <td className="text-center border-b border-r border-fontSecondary font-semibold bg-tableheading text-fontPrimary p-2">
              Tuesday
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS4562
            </td>
            <td className="text-center border-b border-r border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS6578
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS4411
            </td>
            <td className="text-center border-b border-r border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS3654
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS9635
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS8795
            </td>
          </tr>
          <tr className="">
            <td className="text-center border-b border-r border-fontSecondary font-semibold bg-tableheading text-fontPrimary p-2">
              Wednesday
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS4562
            </td>
            <td className="text-center border-b border-r border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS6578
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS4411
            </td>
            <td className="text-center border-b border-r border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS3654
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS9635
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS8795
            </td>
          </tr>
          <tr className="">
            <td className="text-center  border-b border-r border-fontSecondary font-semibold bg-tableheading text-fontPrimary p-2">
              Thursday
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS4562
            </td>
            <td className="text-center border-b border-r border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS6578
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS4411
            </td>
            <td className="text-center border-b border-r border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS3654
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS9635
            </td>
            <td className="text-center border-b border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS8795
            </td>
          </tr>
          <tr className="">
            <td className="text-center border-r border-fontSecondary font-semibold bg-tableheading text-fontPrimary p-2 rounded-bl-2xl">
              Friday
            </td>
            <td className="text-center font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS4562
            </td>
            <td className="text-center border-r border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS6578
            </td>
            <td className="text-center font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS4411
            </td>
            <td className="text-center border-r border-fontSecondary font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS3654
            </td>
            <td className="text-center font-semibold bg-tableheading/30 text-fontPrimary p-2">
              CS9635
            </td>
            <td className="text-center font-semibold bg-tableheading/30 text-fontPrimary p-2 rounded-br-2xl">
              CS8795
            </td>
          </tr>
        </tbody>
      </div>
      <div className="pb-16 pt-4 mx-12" >
        <h1 className="text-lg font-semibold text-fontPrimary">Details : </h1>
        <ul className="pl-6">
          <li className="font-medium text-fontPrimary py-1">1. Theory of Computation (CS3452) - Mr. Smith</li>
          <li className="font-medium text-fontPrimary py-1">2. Data Structures (CS3751) - Ms. Priya</li>
          <li className="font-medium text-fontPrimary py-1">3. Cryptography and Cyber Security (CS3453) - Mr. Rajesh</li>
          <li className="font-medium text-fontPrimary py-1">4. Database Management System(CS3852) - Ms. Jenifer</li>
        </ul>
      </div>
    </div>
  );
};

export default Timetable;
