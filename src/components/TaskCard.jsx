import platIcon from "../assets/play-icon.svg";
import stopIcon from "../assets/stop-icon.svg";
import crossIcon from "../assets/cross-icon.svg";

const TaskCard = () => {
  return (
    <div className="drop-shadow-card flex cursor-pointer mt-8 bg-white rounded-[25px] px-6 pt-3 pb-7">
      <div className="w-3/5">
        <h2 className="text-heading font-medium py-3">Add Animations to the Website</h2>
        <h3 className="font-medium mb-1">History</h3>
        <p className="text-[15px] mb-1">Started the timer at 3/5/2022 12:20:34 (Active)</p>
        <p className="text-[15px]">Started the timer at 3/5/2022 10:30:34 & Stopped at 3/5/2022 11:20:23</p>
      </div>
      <div className="w-2/5">
        <div className="border-solid border-l-2 pl-5 border-slate-300 flex justify-between items-center">
          <span className="text-primary font-medium text-[17px]">00 : 00 : 00</span>
          <div className="flex">
            <button className="bg-primary text-white flex items-center justify-center px-3 w-32 rounded-full h-[40px]">
              Start <img src={platIcon} alt="play-icon" className="w-[12px] ml-3 -mr-3" />
            </button>
            {/* <button className="bg-tertiary text-white flex items-center px-3 w-32 rounded-full h-[40px]">
              Stop <img src={stopIcon} alt="play-icon" className="w-[17px] ml-2 -mr-3" />
            </button> */}
            <div className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-full flex justify-center items-center ml-2">
              <img src={crossIcon} alt="cross-icon" className="w-[30%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
