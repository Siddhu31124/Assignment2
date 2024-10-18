import { TfiWrite } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";

import { blueButtonStyles, greenButtonStyles } from "./HeadersStyles";

const HeaderButtons = () => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <button className={blueButtonStyles}>
        <IoCall className="mr-2 text-[16px]  inline" />
        Call
      </button>
      <button className={greenButtonStyles}>
        <IoLogoWhatsapp className="mr-2 text-[16px]  inline" />
        Whatsapp
      </button>
      <button className={blueButtonStyles}>
        <TfiWrite className="mr-2 text-[16px]  inline" />
        Remarks
      </button>
      <button className={blueButtonStyles}>
        <IoIosSend className="mr-2 text-[16px]  inline" />
        Send
      </button>
    </div>
  );
};
export default HeaderButtons;
