import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { useSelector } from "react-redux";
import { secondsToFormat } from "../utility";

const Header = () => {
  const { taskList } = useSelector((state) => state.task);
  const [totalTaskDuration, setTotalTaskDuration] = useState(0);
  useEffect(() => {
    let duration = 0;
    taskList?.forEach((detail) => {
      detail?.history?.forEach((element) => {
        if (element?.startTime && element?.endTime) {
          duration += element?.endTime - element?.startTime;
        }
      });
    });
    setTotalTaskDuration(duration / 1000);
  }, [taskList]);
  return (
    <div className="base-container max-[640px]:px-6 flex justify-between bg-white py-3">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="mr-2 w-7 md:w-auto" />
        <h3 className="text-[16px] md:text-[24px] font-bold">TIME TRACKER</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center text-[12px] md:text-[16px]">
        Total Time Spend <span className="ml-3 font-semibold text-[16px]">{secondsToFormat(totalTaskDuration, true)}</span>
      </div>
    </div>
  );
};

export default Header;
