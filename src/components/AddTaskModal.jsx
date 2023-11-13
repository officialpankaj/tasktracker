import { useDispatch } from "react-redux";
import crossIcon from "../assets/cross-icon.svg";
import { addTask } from "../store/reducers/taskSlice";

const AddTaskModal = ({ setModalActive }) => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTask({ id: new Date().getTime(), taskName: e.target.taskname.value, started: false, history: [] }));
    setModalActive(false);
  }
  return (
    <form className="w-5/6 md:w-3/6 relative bg-white rounded-[25px] flex flex-col px-8 md:px-12 py-12" onSubmit={handleSubmit}>
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
  );
};

export default AddTaskModal;
