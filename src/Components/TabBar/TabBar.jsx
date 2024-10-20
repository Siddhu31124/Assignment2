import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsActivity } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { IoDocumentText } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { GoHistory } from "react-icons/go";
import { useParams } from "react-router-dom";

import {
  detailsLiStyle,
  detailsNavStyle,
  detailsUlStyle,
  detailsIconStyle,
  activeStyle,
  width,
} from "./TabBarStyles";
import {
  navigateLead,
  navigateActivities,
  navigateRemark,
  navigateDoc,
  navigateCall,
  navigateHistory,
} from "../../Constants";

const TabBar = () => {
  //Use the lead Id from the props
  const { leadId } = useParams();

  const isActivePathStyle = ({ isActive }) =>
    isActive ? activeStyle : detailsLiStyle;

  const tabElements = () => {
    return (
      <ul className={detailsUlStyle}>
        <NavLink to={navigateLead(leadId)} end className={isActivePathStyle}>
          <li className={width}>
            <CgProfile className={detailsIconStyle} />
            Lead Details
          </li>
        </NavLink>
        <NavLink to={navigateActivities(leadId)} className={isActivePathStyle}>
          <li className={width}>
            <BsActivity className={detailsIconStyle} />
            Activities
          </li>
        </NavLink>
        <NavLink to={navigateRemark(leadId)} className={isActivePathStyle}>
          <li className={width}>
            <TfiWrite className={detailsIconStyle} />
            Remarks
          </li>
        </NavLink>
        <NavLink to={navigateDoc(leadId)} className={isActivePathStyle}>
          <li className={width}>
            <IoDocumentText className={detailsIconStyle} />
            Documents
          </li>
        </NavLink>
        <NavLink to={navigateCall(leadId)} className={isActivePathStyle}>
          <li className={width}>
            <IoCallOutline className={detailsIconStyle} />
            Call Log
          </li>
        </NavLink>
        <NavLink to={navigateHistory(leadId)} className={isActivePathStyle}>
          <li className={width}>
            <GoHistory className={detailsIconStyle} />
            History Log
          </li>
        </NavLink>
      </ul>
    );
  };

  return (
    <nav className={detailsNavStyle}>
      {tabElements()}
      <hr />
    </nav>
  );
};

export default TabBar;
