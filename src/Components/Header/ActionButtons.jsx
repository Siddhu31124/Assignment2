import { TfiWrite } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import toast from "react-hot-toast";

import {
  blueButtonStyles,
  greenButtonStyles,
  buttonIconStyle,
} from "./HeadersStyles";

function handelToast(type) {
  toast.success(`Lead Has Selected ${type}`);
}

const ActionButtons = () => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <button className={blueButtonStyles} onClick={() => handelToast("Call")}>
        <IoCall className={buttonIconStyle} />
        Call
      </button>

      <button
        className={greenButtonStyles}
        onClick={() => handelToast("Whatsapp")}
      >
        <IoLogoWhatsapp className={buttonIconStyle} />
        Whatsapp
      </button>

      <button
        className={blueButtonStyles}
        onClick={() => handelToast("Remark")}
      >
        <TfiWrite className={buttonIconStyle} />
        Remarks
      </button>

      <button className={blueButtonStyles} onClick={() => handelToast("Send")}>
        <IoIosSend className={buttonIconStyle} />
        Send
      </button>
    </div>
  );
};
export default ActionButtons;
