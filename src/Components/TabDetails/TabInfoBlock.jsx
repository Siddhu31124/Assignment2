import { useState } from "react";

import FieldList from "../FeildStyle/FieldList";
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

  const tabInfoBlockClose = () => {
    if (!isShowMore) {
      return (
        <div className={typeInfoStyle} onClick={handelShowMore}>
          <div className="flex flex-row gap-3">
            <div className={blueIndicatorStyle}></div>
            <p className="text-basic">{name}</p>
          </div>
          <p>
            <IoIosArrowDown className="mr-6" />
          </p>
        </div>
      );
    }
  };

  const tabInfoBlockOpen = () => {
    if (isShowMore) {
      return (
        <div className={infoBlockStyle} onClick={handelShowMore}>
          <div className={typeOfInfoStyle}>
            <div className="flex flex-row gap-3">
              <div className={blueIndicatorStyle}></div>
              <p className="text-basic">{name}</p>
            </div>
            <p>
              <IoIosArrowUp className="mr-6" />
            </p>
          </div>
          <ul className="pb-4 px-4 flex flex-row flex-wrap">
            {fieldType.map((fieldDetails) => (
              <li className={`${fieldDetailsListStyle} item`}>
                <p className="text-basic text-[#667085]">{fieldDetails.name}</p>
                <FieldList
                  type={fieldDetails.fieldType}
                  value={fieldDetails.value}
                  textAlignment={"text-left"}
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
      {tabInfoBlockClose()}

      {tabInfoBlockOpen()}
    </>
  );
};
export default TabInfoBlock;
