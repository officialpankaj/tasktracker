import Header from "./components/Header";
import TaskList from "./components/TaskList";
import plusIcon from "./assets/plus-icon.svg";
import crossIcon from "./assets/cross-icon.svg";
import { useState } from "react";

function App() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="relative bg-secondary h-screen">
      <Header />
      <TaskList />
      <button
        className="w-[60px] h-[60px] bg-primary rounded-full flex items-center justify-center absolute bottom-12 right-16 hover:drop-shadow-lg duration-500"
        onClick={() => {
          setModalActive(true);
        }}
      >
        <img src={plusIcon} alt="add-icon" className="" />
      </button>
      {modalActive && (
        <div className="absolute top-0 w-screen h-screen bg-black/30 flex justify-center items-center">
          <form className="w-3/6 relative bg-white rounded-[25px] flex flex-col px-12 py-12">
            <p>Enter the Task Name</p>
            <input className="h-[40px] border mb-7 mt-1 rounded-md px-4" name="taskname" />
            <button type="submit" className="bg-primary text-white flex items-center justify-center px-3 w-32 rounded-full h-[40px]">
              Save
            </button>
            <img
              src={crossIcon}
              alt="cross-icon"
              className="w-[10px] absolute top-5 right-6 cursor-pointer"
              onClick={() => {
                setModalActive(false);
              }}
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
