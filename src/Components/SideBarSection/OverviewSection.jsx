import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import FieldList from "../FeildStyle/FieldList";
import leadInfo from "../../LeadsData/LeadDetails.json";
import {
  contentTypeStyles,
  assignOverviewContainer,
  showMoreStyles,
  arrowStyles,
  betweenStyle,
} from "./SidebarStyles";

const Overview = ({ leadId }) => {
  const [isShowMore, setIsShowMore] = useState(true);

  const leadData = leadInfo.filter((each) => leadId === each.leadId);
  const { overviewFields } = leadData[0];
  const topThreeData = overviewFields.slice(0, 2);

  function handelShowMore() {
    setIsShowMore((preVal) => !preVal);
  }

  const overviewSection = () => {
    if (isShowMore) {
      return (
        <>
          {topThreeData.map((overviewDetails) => (
            <li key={overviewDetails.fieldId} className={betweenStyle}>
              <p className={contentTypeStyles}>{overviewDetails.name}</p>
              <FieldList
                type={overviewDetails.fieldType}
                value={overviewDetails.value}
                textAlignment={"text-right"}
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
          <li key={overviewDetails.fieldId} className={betweenStyle}>
            <p className={contentTypeStyles}>{overviewDetails.name}</p>
            <FieldList
              type={overviewDetails.fieldType}
              value={overviewDetails.value}
              textAlignment={"text-right"}
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
    <ul className={`${assignOverviewContainer} max-h-[240px] overflow-y-auto `}>
      <li className="flex flex-row ">
        <p className="text-[#344054] text-head">Overview</p>
      </li>
      {overviewSection()}
    </ul>
  );
};

export default Overview;
