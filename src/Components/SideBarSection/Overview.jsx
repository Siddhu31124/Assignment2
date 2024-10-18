import { useState } from "react";
import FelidStyles from "../../utils/FeildStyle/FelidStyle";

import data from "../../Sample1.json";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import {
  contentTypeStyles,
  assignOverviewContainer,
  showMoreStyles,
  arrowStyles,
} from "./SidebarStyles";

const Overview = () => {
  const [isShowMore, setIsShowMore] = useState(true);
  const { overviewFields } = data;
  function handelShowMore() {
    setIsShowMore((preVal) => !preVal);
  }

  const showMore = () => {
    if (isShowMore) {
      return (
        <li onClick={handelShowMore} className={showMoreStyles}>
          See more
          <IoIosArrowDown className={arrowStyles} />
        </li>
      );
    }
    return (
      <>
        {overviewFields.map((overviewDetails) => (
          <li
            key={overviewDetails.fieldId}
            className="flex flex-row justify-between"
          >
            <p className={contentTypeStyles}>{overviewDetails.name}</p>
            <FelidStyles
              type={overviewDetails.fieldType}
              value={overviewDetails.value}
            />
          </li>
        ))}
        <li onClick={handelShowMore} className={showMoreStyles}>
          See less
          <IoIosArrowUp className={arrowStyles} />
        </li>
      </>
    );
  };

  return (
    <ul className={`${assignOverviewContainer} max-w-[500px] overflow-y-auto `}>
      <li className="flex flex-row ">
        <p className="text-[#344054] text-head">Overview</p>
      </li>
      {showMore()}
    </ul>
  );
};

export default Overview;
