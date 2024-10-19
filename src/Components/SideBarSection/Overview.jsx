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
  const topThreeData = overviewFields.slice(0, 4);
  function handelShowMore() {
    setIsShowMore((preVal) => !preVal);
  }
  const overviewSection = () => {
    if (isShowMore) {
      return (
        <>
          {topThreeData.map((overviewDetails) => (
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
            See more
            <IoIosArrowDown className={arrowStyles} />
          </li>
        </>
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
              sidebar
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
    <ul className={`${assignOverviewContainer} max-h-[300px] overflow-y-auto `}>
      <li className="flex flex-row ">
        <p className="text-[#344054] text-head">Overview</p>
      </li>
      {overviewSection()}
    </ul>
  );
};

export default Overview;
