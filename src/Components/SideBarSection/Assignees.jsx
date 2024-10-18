import { GoPencil } from "react-icons/go";

import data from "../../Sample1.json";
import {
  contentTypeStyles,
  contentDetailsStyles,
  editButtonStyle,
} from "./SidebarStyles";

const Assignees = () => {
  const { assignees } = data;
  return (
    <ul className="w-[360px] p-4 rounded-2xl bg-white flex flex-col gap-4">
      <li className="flex flex-row justify-between items-center">
        <p className="text-[#344054] text-head">Assignees</p>
        <p className={editButtonStyle}>
          <GoPencil className="text-[#1507ef] text-[16px]" />
          Edit
        </p>
      </li>
      {assignees.map((assigneesDetails) => (
        <li key={assigneesDetails.id} className="flex flex-row justify-between">
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
    </ul>
  );
};

export default Assignees;
