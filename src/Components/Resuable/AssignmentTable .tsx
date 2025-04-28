import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const AssignmentTable = ({ title, rows }: any) => {
  return (
    <div className="containerTop animate-fade-up animate-ease-in-out bg-white mx-5 mt-8 h-[400px] rounded-2xl shadow-[0px_1px_15px_-6px_rgba(0,_0,_0,_1)] flex flex-col">
      <h1 className="text-fontPrimary font-semibold px-3.5 py-2 text-lg">
        {title}
      </h1>
      <div className="table mx-12 mt-4 text-center rounded-2xl shadow-md border border-black">
        <thead>
          <tr className="bg-[#00B2E2] rounded-t-2xl ">
            <th className="p-3 font-semibold text-[18px] rounded-tl-2xl text-fontPrimary border-b border-r border-fontSecondary w-1/2">
              Subject Name
            </th>
            {rows.some((row: any) => row.status) && (
              <th className="p-3 font-semibold text-[18px] text-fontPrimary border-b border-r border-fontSecondary">
                Status
              </th>
            )}
            {/* {rows.status && (
              <th className="p-3 font-semibold text-[18px] text-fontPrimary border-b border-r border-fontSecondary">
                Status
              </th>
            )} */}
            <th className="p-3 font-semibold text-[18px] rounded-tr-2xl text-fontPrimary border-b  border-fontSecondary">
              {rows.some((row: any) => row.grade) ? 'Grade' : 'Mark'}
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#D9F2FA] text-[16px] font-medium text-gray-800">
          {rows.map((row: any, idx: any) => (
            <tr key={idx}>
              <td
                className={`py-3 px-4 text-left font-medium text-fontPrimary text-lg  border-r border-fontSecondary ${
                  idx === rows.length - 1 ? "rounded-bl-2xl" : "border-b"
                }`}
              >
              </td>
              {row.status && (
                <td
                  className={`flex justify-center items-center py-3 border-r border-fontSecondary h-14 ${
                    idx === rows.length - 1 ? "" : "border-b"
                  }`}
                >
                  {row.status === "done" ? (
                    <FaCheck color="green" />
                  ) : (
                    <IoClose size={24} color="red" />
                  )}
                </td>
              )}
              <td
                className={
                  idx === rows.length - 1
                    ? "rounded-br-2xl text-fontPrimary"
                    : "border-b border-fontSecondary text-fontPrimary"
                }
              >
                {row.mark ? row.mark : row.grade}
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default AssignmentTable;
