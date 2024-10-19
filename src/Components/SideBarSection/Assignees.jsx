import { GoPencil } from "react-icons/go";

import data from "../../Sample1.json";
import {
  contentTypeStyles,
  contentDetailsStyles,
  editButtonStyle,
  assignLiContainer,
  assignUlContainer,
} from "./SidebarStyles";

const Assignees = () => {
  const assigneesTabHeader = () => {
    return (
      <li className={assignLiContainer}>
        <p className="text-[#344054] text-head">Assignees</p>
        <p className={editButtonStyle}>
          <GoPencil className="text-[#1507ef] text-[16px]" />
          Edit
        </p>
      </li>
    );
  };

  const assigneesItemsList = () => {
    return (
      <>
        {assignees.map((assigneesDetails) => (
          <li
            key={assigneesDetails.id}
            className="flex flex-row justify-between"
          >
            <p className={contentTypeStyles}>PRE</p>
            <p className={`${contentDetailsStyles}  flex`}>
              {assigneesDetails.name}
              <img
                src={assigneesDetails.profilePic}
                className="ml-2 w-8 rounded-full"
              />
            </p>
          </li>
        ))}
      </>
    );
  };

  const { assignees } = data;
  return (
    <ul className={assignUlContainer}>
      {assigneesTabHeader()}
      {assigneesItemsList()}
    </ul>
  );
};

export default Assignees;
