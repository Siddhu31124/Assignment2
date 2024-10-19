import { useState } from "react";
import FelidStyles from "../SideBarSection/FeildStyle/FelidStyle";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import {
  blueIndicatorStyle,
  typeInfoStyle,
  infoBlockStyle,
  typeOfInfoStyle,
  fieldDetailsListStyle,
} from "./TabDetailsStyle";

const TabInfoBlock = ({ name, fieldType }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  function handelShowMore() {
    setIsShowMore((preVal) => !preVal);
  }

  const closeMoreDetails = () => {
    if (!isShowMore) {
      return (
        <div className={typeInfoStyle}>
          <div className="flex flex-row gap-3">
            <div className={blueIndicatorStyle}></div>
            <p className="text-basic">{name}</p>
          </div>
          <p onClick={handelShowMore}>
            <IoIosArrowDown className="mr-6" />
          </p>
        </div>
      );
    }
  };

  const openMoreDetails = () => {
    if (isShowMore) {
      return (
        <div className={infoBlockStyle}>
          <div className={typeOfInfoStyle}>
            <div className="flex flex-row gap-3">
              <div className={blueIndicatorStyle}></div>
              <p className="text-basic">{name}</p>
            </div>
            <p onClick={handelShowMore}>
              <IoIosArrowUp className="mr-6" />
            </p>
          </div>
          <ul className="pb-4 px-4 flex flex-row flex-wrap">
            {fieldType.map((fieldDetails) => (
              <li className={fieldDetailsListStyle}>
                <p className="text-basic text-[#667085]">{fieldDetails.name}</p>
                <FelidStyles
                  type={fieldDetails.fieldType}
                  value={fieldDetails.value}
                  infoBlock
                />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <>
      {closeMoreDetails()}

      {openMoreDetails()}
    </>
  );
};
export default TabInfoBlock;
