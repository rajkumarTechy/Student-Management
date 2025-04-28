import userLogo from "../../assets/userLogo.png";
import { GoMortarBoard } from "react-icons/go";
import { LuUserRoundCheck } from "react-icons/lu";
import { LiaRupeeSignSolid } from "react-icons/lia";

const Overview = () => {
  return (
    <>
      <div className="bg-background h-[calc(100vh-5rem)] pt-12 overflow-y-hidden">
        <div className="containerTop animate-fade-up animate-ease-in-out bg-white mx-5 h-60 rounded-2xl shadow-[0px_1px_15px_-6px_rgba(0,_0,_0,_1)] flex flex-col">
          <h1 className="text-fontPrimary font-semibold px-3.5 py-2 text-lg">
            Welcome John
          </h1>
          <div className="flex gap-x-5 my-auto">
            <div className="container flex gap-x-6 items-center p-3 bg-white border-2 border-primary rounded-2xl mx-12 pl-16 shadow shadow-primary">
            <GoMortarBoard size={50} className="text-fontPrimary"/>
            <h1 className="font-medium text-[18px] text-center text-fontPrimary" >CGPA <br/>8.5</h1>
            </div>
            <div className="container flex gap-x-6 items-center p-3 bg-white border-2 border-primary rounded-2xl mx-12 pl-16 shadow shadow-primary">
            <LuUserRoundCheck size={50} className="text-fontPrimary"/>
            <h1 className="font-medium text-[18px] text-center text-fontPrimary" >Attendance <br/>85%</h1>
            </div>
            <div className="container flex gap-x-6 items-center p-3 bg-white border-2 border-primary rounded-2xl mx-12 pl-16 shadow shadow-primary">
            <LiaRupeeSignSolid size={50} className="text-fontPrimary"/>
            <h1 className="font-medium text-[18px] text-center text-fontPrimary" >Dues <br/>35000</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-2.5 h-82 mx-5 mt-5 animate-fade-up animate-delay-400">
          <div className="bg-white rounded-2xl shadow-[0px_1px_15px_-6px_rgba(0,_0,_0,_1)]">
            <h1 className="text-fontPrimary font-semibold p-4 text-lg">Your Profile</h1>
            <div className="flex flex-col gap-y-2 justify-center items-center">
              <img src={userLogo} width={200} alt="logo" />
              <div className="flex flex-col items-center">
                <h2 className="font-semibold text-lg text-fontPrimary">John</h2>
                <h1 className="font-semibold text-lg text-fontPrimary">95192101309</h1>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-[0px_1px_15px_-6px_rgba(0,_0,_0,_1)]">
            <h1 className="text-fontPrimary font-semibold p-4 text-lg">
              Personal Details
            </h1>
            <div className="grid grid-cols-2 px-12 gap-x-12 gap-y-5 mt-2">
              <h1 className="font-medium text-fontPrimary">DOB : </h1>
              <h1 className="font-medium text-fontPrimary">Arrears :</h1>
              <h1 className="font-medium text-fontPrimary">Gender :</h1>
              <h1 className="font-medium text-fontPrimary">Degree :</h1>
              <h1 className="font-medium text-fontPrimary">Department :</h1>
              <h1 className="font-medium text-fontPrimary">Email :</h1>
              <h1 className="font-medium text-fontPrimary">Year/sem :</h1>
              <h1 className="font-medium text-fontPrimary">Mobile :</h1>
              <h1 className="font-medium text-fontPrimary">Batch :</h1>
              <h1 className="font-medium text-fontPrimary">Accomadation :</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
