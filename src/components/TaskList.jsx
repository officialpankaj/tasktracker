import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { taskList } = useSelector((state) => state.task);
  return (
    <div className="base-container max-[640px]:px-6">
      {taskList?.length > 0 &&
        taskList?.map((d) => {
          return <TaskCard key={d?.id} detail={d} />;
        })}
      {taskList?.length === 0 && <p className="text-center my-36 text-black/30">Please add any task to view here.</p>}
    </div>
  );
};

export default TaskList;
