import { MdOutlinePushPin } from "react-icons/md";

import Assignees from "./Assignees";
import Overview from "./Overview";
import {
  sidebarMainStyle,
  containerStyles,
  contentTypeStyles,
  contentDetailsStyles,
} from "./SidebarStyles";

const Sidebar = () => {
  const pinnedContainer = () => {
    return (
      <div className={containerStyles}>
        <p className="flex gap-2 items-center">
          <MdOutlinePushPin className="font-medium text-[#475467] text-[16px]" />
          <span className="font-medium text-[#667085] text-[16px]">Pinned</span>
        </p>
        <div className="toggle-switch">
          <input type="checkbox" id="toggle" className="toggle-input" />
          <label htmlFor="toggle" className="toggle-label"></label>
        </div>
      </div>
    );
  };

  const createdOnContainer = () => {
    return (
      <div className={containerStyles}>
        <p className={contentTypeStyles}>Created On</p>
        <p className={contentDetailsStyles}>17 Oct 2024, 7:12 PM</p>
      </div>
    );
  };

  return (
    <aside className={sidebarMainStyle}>
      {pinnedContainer()}
      {createdOnContainer()}
      <Assignees />
      <Overview />
    </aside>
  );
};

export default Sidebar;
