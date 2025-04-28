import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import eventsLogo from "../../assets/img.png";
import { Link } from "react-router-dom";
import { useRole } from "../../Context/RoleProvider";

const EventsResuable = () => {

  const {role} = useRole()

  return (
    <div>
      <div className="containerTop animate-fade-up animate-ease-in-out bg-white mx-5 mt-8 h-auto pb-4 rounded-2xl shadow-[0px_1px_15px_-6px_rgba(0,_0,_0,_1)] flex flex-col">
        <div className="flex justify-between mx-4.5 py-3.5">
          <h1 className="text-fontPrimary font-semibold text-lg">Events</h1>
          {role === 'admin' && <button className="px-6 py-1.5 text-sm rounded-lg cursor-pointer bg-primary" >Add</button>}
        </div>
        
        <div className="w-full flex justify-center items-center py-8">
          
          <div className="w-[600px] flex flex-col gap-5">
          <h1 className="text-fontPrimary text-lg font-semibold pl-1">Full Stack Workshop</h1>
            <img src={eventsLogo} alt="eventLogo" className="object-contain" />
            <h1 className="text-fontPrimary text-lg font-semibold pl-1">Register Here : <Link to={'https://www.npmjs.com/package/nodemon'} className="text-[#0074FF]">https://www.npmjs.com/package/nodemon</Link></h1>
          </div>
          
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default EventsResuable;
