import { useDispatch, useSelector } from "react-redux";
import crossIcon from "../assets/cross-icon.svg";
import { setShowModal } from "../store/reducers/taskSlice";
import errorIcon from "../assets/error-icon.svg";
import warningIcon from "../assets/warning-icon.svg";
import successIcon from "../assets/success-icon.svg";

const MessageModal = () => {
  const { modalData } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  return (
    <div className="w-9/12 md:w-4/12 relative bg-white rounded-[25px] flex flex-col px-12 pt-10 md:pt-16 pb-12 md:pb-20">
      {modalData?.isHTML ? (
        <>{modalData?.message}</>
      ) : (
        <>
          {modalData?.type === "success" && <img src={successIcon} alt="auccess-icon" className="h-20 md:h-32" />}
          {modalData?.type === "warning" && <img src={warningIcon} alt="warning-icon" className="h-20 md:h-32" />}
          {modalData?.type === "error" && <img src={errorIcon} alt="error-icon" className="h-20 md:h-32" />}
          <h3 className="text-center font-semibold text-[1.3rem]">{modalData?.title}</h3>
          <div className="text-center">{modalData?.message}</div>
        </>
      )}
      <img
        src={crossIcon}
        alt="cross-icon"
        className="w-[12px] absolute top-5 right-6 cursor-pointer"
        onClick={() => {
          dispatch(setShowModal(false));
        }}
      />
    </div>
  );
};

export default MessageModal;
