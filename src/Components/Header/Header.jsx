import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { RiLink } from "react-icons/ri";

import data from "../../Sample1.json";
import ActionButtons from "./ActionButtons";
import {
  profileCircleStyle,
  mainNavbarStyle,
  leadTypeStyle,
  copyStyle,
  leadContainerStyle,
} from "./HeadersStyles";

const Header = () => {
  const { name, stage } = data;

  function extractInitials(name) {
    let words = name.split(" ");
    let initials = words.map((word) => word[0]).join("");
    return initials.toUpperCase();
  }

  const Logo = () => {
    return (
      <div className="flex flex-row gap-3">
        <BsFillRocketTakeoffFill className="text-xl text-blue-800" />
        <p className="text-[14px] text-[#344054]">Academy CGA</p>
        <div className="flex flex-row gap-4 ml-auto">
          <LuRefreshCcw className="text-[20px]" />
          <RxCross2 className="text-[20px] text-gray-400" />
        </div>
      </div>
    );
  };

  const leadDetails = () => {
    return (
      <div className={leadContainerStyle}>
        <div className="flex flex-row gap-4 items-center">
          <div
            className={`${profileCircleStyle}`}
            style={{
              backgroundColor: stage.color,
              fontSize: "24px",
            }}
          >
            <p>{extractInitials(name)}</p>
          </div>
          <p className="text-[24px]">{name}</p>
          <p className={leadTypeStyle}>
            {stage.name}
            <FaChevronDown className="inline text-black text-[8px] ml-1" />
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className={copyStyle}>
            <RiLink className="mr-2 text-[16px]  inline" />
            Copy
          </p>
          <ActionButtons />
        </div>
      </div>
    );
  };

  return (
    <div className={mainNavbarStyle}>
      {Logo()}
      {leadDetails()}
    </div>
  );
};

export default Header;
