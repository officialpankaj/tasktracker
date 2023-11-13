import Header from "./components/Header";
import TaskList from "./components/TaskList";
import plusIcon from "./assets/plus-icon.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTaskList } from "./store/reducers/taskSlice";
import AddTaskModal from "./components/AddTaskModal";
import MessageModal from "./components/MessageModal";

const App = () => {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const { showModal } = useSelector((state) => state.task);

  useEffect(() => {
    let tasklist = localStorage.getItem("taskList");
    if (tasklist) {
      dispatch(setTaskList(JSON.parse(tasklist)));
    }
  }, []);

  return (
    <div className="relative h-screen flex flex-col">
      <Header />
      <div className="flex flex-col bg-secondary flex-1 overflow-y-auto pt-8">
        <TaskList />
        <button
          className="w-[60px] h-[60px] bg-primary rounded-full flex items-center justify-center absolute bottom-6 md:bottom-12 right-6 md:right-16 hover:drop-shadow-lg duration-500"
          onClick={() => {
            setModalActive(true);
          }}
        >
          <img src={plusIcon} alt="add-icon" className="" />
        </button>
        {modalActive && (
          <div className="absolute top-0 w-screen h-screen bg-black/30 flex justify-center items-center">
            <AddTaskModal setModalActive={setModalActive} />
          </div>
        )}
        {showModal && (
          <div className="absolute top-0 w-screen h-screen bg-black/30 flex justify-center items-center">
            <MessageModal />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
