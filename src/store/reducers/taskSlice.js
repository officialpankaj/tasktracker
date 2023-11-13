import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    taskList: [],
    currentTask: "",
    showModal: false,
    modalData: {
      type: null,
      title: "",
      message: "",
      isHTML: false,
    },
  },
  reducers: {
    setTaskList: (state, action) => {
      state.taskList = action.payload;
      localStorage.setItem("taskList", JSON.stringify(state.taskList));
    },
    addTask: (state, action) => {
      state.taskList.unshift(action.payload);
      localStorage.setItem("taskList", JSON.stringify(state.taskList));
    },
    updateTask: (state, action) => {
      if (!state.taskList.some((d) => d?.started && d?.id !== action.payload?.id)) {
        state.taskList = state.taskList?.map((item) => {
          if (item?.id === action.payload?.id) {
            item.started = action.payload.started;
            if (action.payload.started && ((item.history[0]?.startTime && item.history[0]?.endTime) || !item.history[0])) {
              console.warn(item);
              item.history.unshift({ startTime: new Date().getTime() });
            } else {
              item.history[0].endTime = new Date().getTime();
            }
            return item;
          }
          return item;
        });
        localStorage.setItem("taskList", JSON.stringify(state.taskList));
      } else {
        state.showModal = true;
        state.modalData = {
          type: "warning",
          title: "Action Not Allowed",
          message: "Please stop other task before starting a new one",
          isHTML: false,
        };
      }
    },
    removeTask: (state, action) => {
      state.taskList = state.taskList?.filter((item) => item?.id !== action.payload);
      localStorage.setItem("taskList", JSON.stringify(state.taskList));
    },
    setCurrentTask: (state, action) => {
      state.currentTask = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setModalData: (state, action) => {
      state.modalData = action.payload;
    },
  },
});

export const { setTaskList, setCurrentTask, addTask, updateTask, removeTask, setShowModal, setModalData } = taskSlice.actions;

export default taskSlice.reducer;
