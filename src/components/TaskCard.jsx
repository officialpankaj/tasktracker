import platIcon from "../assets/play-icon.svg";
import stopIcon from "../assets/stop-icon.svg";
import crossIcon from "../assets/cross-icon.svg";
import congratsIcon from "../assets/congrats-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, setCurrentTask, setModalData, setShowModal, updateTask } from "../store/reducers/taskSlice";
import dateFormat from "dateformat";
import { secondsToFormat } from "../utility";
import { useEffect, useState } from "react";

const TaskCard = ({ detail }) => {
  const { currentTask } = useSelector((state) => state.task);
  const [currentDuration, setCurrentDuration] = useState(0);
  const dispatch = useDispatch();

  const calculateTaskDuration = () => {
    let duration = 0;
    detail?.history?.forEach((element) => {
      if (element?.startTime && element?.endTime) {
        duration += element?.endTime - element?.startTime;
      }
    });
    return duration;
  };

  useEffect(() => {
    let interval;
    if (detail?.started) {
      setCurrentDuration(calculateTaskDuration() / 1000);
      interval = setInterval(() => {
        setCurrentDuration((state) => state + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [detail?.started]);

  return (
    <div
      className="drop-shadow-card flex flex-col md:flex-row cursor-pointer mb-8 bg-white rounded-[25px] px-6 pt-6 pb-7"
      onClick={() => {
        if (currentTask === detail?.id) {
          dispatch(setCurrentTask(""));
        } else {
          dispatch(setCurrentTask(detail?.id));
        }
      }}
    >
      <div className="w-full md:w-3/5">
        <h2 className="text-heading font-medium py-1.5">{detail?.taskName}</h2>
        <h3 className="font-medium my-1">History</h3>
        {detail?.history?.length > 0 &&
          detail?.history?.map((d, i) => {
            return (
              (i === 0 || currentTask === detail?.id) && (
                <p key={"task-history" + i + d?.startTime} className="text-[15px] mb-1">
                  Started the timer at {dateFormat(d?.startTime, "d/m/yyyy HH:MM:ss")} {d?.endTime ? "& Stopped at " + dateFormat(d?.endTime, "d/m/yyyy HH:MM:ss") : "(Active)"} {currentTask !== detail?.id && detail?.history?.length > 1 && i === 0 && <span className="text-primary ml-1 text-[10px]">view more</span>}
                </p>
              )
            );
          })}
        {detail?.history?.length === 0 && <p className="text-[15px] mb-1">No History Found, Click on the start button to track the timer</p>}
      </div>
      <div className="w-full md:w-2/5 mt-4 md:mt-0">
        <div className="border-solid border-l-2 pl-5 border-slate-300 flex justify-between items-center">
          <span className="text-primary font-medium text-[17px]">{detail?.started ? secondsToFormat(currentDuration) : secondsToFormat(calculateTaskDuration() / 1000)}</span>
          <div className="flex">
            {!detail?.started && (
              <button
                className="bg-primary text-white flex items-center justify-center px-3 w-32 rounded-full h-[40px]"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(updateTask({ ...detail, started: !detail?.started }));
                }}
              >
                Start <img src={platIcon} alt="play-icon" className="w-[12px] ml-3 -mr-3" />
              </button>
            )}
            {detail?.started && (
              <button
                className="bg-tertiary text-white flex items-center justify-center px-3 w-32 rounded-full h-[40px]"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(updateTask({ ...detail, started: !detail?.started }));
                  dispatch(setShowModal(true));
                  dispatch(
                    setModalData({
                      type: "",
                      title: "",
                      message: (
                        <div className="flex flex-col items-center">
                          <img src={congratsIcon} alt="congrats-icon" className="h-32" />
                          <h3 className="text-center font-semibold text-[1.5rem]">Hooray</h3>
                          <div className="text-center">
                            You have completed the task <strong>{detail?.taskName}</strong>
                          </div>
                        </div>
                      ),
                      isHTML: true,
                    })
                  );
                }}
              >
                Stop
                <img src={stopIcon} alt="play-icon" className="w-[17px] ml-2 -mr-3" />
              </button>
            )}
            <div
              className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-full flex justify-center items-center ml-2"
              onClick={() => {
                dispatch(removeTask(detail?.id));
              }}
            >
              <img src={crossIcon} alt="cross-icon" className="w-[30%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
