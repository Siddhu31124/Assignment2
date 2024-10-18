import { useState } from "react";
import FelidStyles from "../../utils/FeildStyle/FelidStyle";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const LeadInfoBlock = ({ name, fieldType }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  function handelShowMore() {
    setIsShowMore((preVal) => !preVal);
  }

  const closeMoreDetails = () => {
    if (!isShowMore) {
      return (
        <div className="w-[746px] h-[56px] bg-white rounded-2xl flex flex-row justify-between items-center ">
          <div className="flex flex-row gap-3">
            <div className="h-24px w-[4px] bg-blue-700 rounded-r-3xl "></div>
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
        <div className="w-[746px]  bg-white rounded-2xl pt-4 ">
          <div className=" flex flex-row justify-between items-center ">
            <div className="flex flex-row gap-3">
              <div className="h-24px w-[4px] bg-blue-700 rounded-r-3xl "></div>
              <p className="text-basic">{name}</p>
            </div>
            <p onClick={handelShowMore}>
              <IoIosArrowUp className="mr-6" />
            </p>
          </div>
          <ul className="pb-4 px-4 flex flex-row flex-wrap">
            {fieldType.map((fieldDetails) => (
              <li className="w-[196px] flex flex-col gap-1 pl-5 p-3 border-r-2 border-r-[#b6b8bc9e] last:border-none">
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
      {closeMoreDetails()} {openMoreDetails()}
    </>
  );
};
export default LeadInfoBlock;
