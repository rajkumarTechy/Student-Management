import { CiSearch } from "react-icons/ci";
import { HiDownload } from "react-icons/hi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoIosCheckmark } from "react-icons/io";

import { TfiEye } from "react-icons/tfi";
import { LiaEdit } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import { useRole } from "../../Context/RoleProvider";

interface TableProps {
  title: string;
  headers: string[];
  CoutsName: string;
  data: {
    [key: string]: string;
  }[];
}

const Notestable = ({ title, headers, data, CoutsName }: TableProps) => {
  const { role } = useRole();

  return (
    <>
      <div className="containerTop animate-fade-up animate-ease-in-out bg-white mx-5 mt-8 h-auto pb-4 rounded-2xl shadow-[0px_1px_15px_-6px_rgba(0,_0,_0,_1)] flex flex-col">
        <div className="flex justify-between mx-4.5 py-3.5">
          <h1 className="text-fontPrimary font-semibold text-lg">{title}</h1>
          <div className="flex justify-end gap-4">
            {role === "admin" && (
              <>
                <select className="bg-[#D1D5DB] outline-0 rounded-lg px-4">
                  <option value="Iyear">I Year</option>
                  <option value="Iyear">II Year</option>
                  <option value="IIIyear">III Year</option>
                  <option value="IVyear">IV Year</option>
                </select>

                <select className="bg-[#D1D5DB] outline-0 rounded-lg px-4">
                  <option value="">Status</option>
                  <option value="ok">Submitted</option>
                  <option value="notok">Not Submitted</option>
                </select>

                <select className="bg-[#D1D5DB] outline-0 rounded-lg px-4">
                  <option value="">Assignment</option>
                  <option value="ass1">Assignment 1</option>
                  <option value="ass2">Assignment 2</option>
                  <option value="ass3">Assignment 3</option>
                </select>
              </>
            )}

            <div className="relative">
              <input
                type="text"
                className="bg-[#D1D5DB] py-2 px-8 rounded-lg outline-0 placeholder:text-fontPrimary text-xs font-medium"
                placeholder="Search"
              />
              <CiSearch size={18} className="absolute top-2 left-3" />
            </div>
            {role === "admin" && (
              <button className="px-6 py-1.5 text-sm rounded-lg cursor-pointer bg-primary">
                Add
              </button>
            )}
          </div>
        </div>
        <table className="table mx-12 mt-8">
          <thead className="font-semibold text-lg text-fontPrimary border-b border-fontSecondary">
            <tr>
              {headers.map((head, idx) => (
                <td
                  key={idx}
                  className={` ${
                    idx === 0 ? "text-left" : "text-center"
                  } px-2 py-3 w-96 border-b border-fontSecondary font-semibold text-lg`}
                >
                  {head}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`font-medium px-2 py-3 border-b border-fontSecondary text-fontPrimary ${
                      cellIndex === 0 ? "text-left" : "text-center"
                    }`}
                  >
                    {header.toLowerCase() === "status" ||
                    header.toLowerCase() === "pass" ? (
                      <div className="flex justify-center">
                        {row[header.toLowerCase()] === "ok" ? (
                          <IoIosCheckmark size={28} color="green" />
                        ) : (
                          <IoMdClose size={22} color="red" />
                        )}
                      </div>
                    ) : header.toLowerCase() === "download" ||
                      header.toLowerCase() === "downloads" ? (
                      <div className="flex justify-center gap-1.5">
                        {header.toLowerCase() === "downloads" && (
                          <LiaEdit size={26} className="text-fontPrimary" />
                        )}
                        <HiDownload size={26} className="text-fontPrimary" />
                        {header.toLowerCase() === "downloads" && (
                          <MdDeleteOutline
                            size={26}
                            className="text-fontPrimary"
                          />
                        )}
                      </div>
                    ) : header.toLowerCase() === "view" ||
                      header.toLowerCase() === "edit" ? (
                      <div className="flex justify-center gap-1.5">
                        <TfiEye size={26} className="text-fontPrimary" />
                        <LiaEdit size={26} className="text-fontPrimary" />
                        {header.toLowerCase() === "view" && (
                          <MdDeleteOutline
                            size={26}
                            className="text-fontPrimary"
                          />
                        )}
                      </div>
                    ) : (
                      row[header.toLowerCase()]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mx-11 py-3.5 pt-16">
          <div className="flex gap-x-2.5">
            <div className="bg-[#D9D9D9] px-2 py-0.5 rounded-md">
              <MdKeyboardArrowLeft size={22} />
            </div>
            <h1 className="font-medium text-sm text-fontPrimary">
              Page 1 of 2
            </h1>
            <div className="bg-[#D9D9D9] px-2 py-0.5 rounded-md">
              <MdKeyboardArrowRight size={22} />
            </div>
          </div>
          <h1 className="text-fontPrimary font-medium">
            Total {CoutsName} : <span>{data.length}</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Notestable;
