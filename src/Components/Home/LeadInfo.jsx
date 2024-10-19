import { Link } from "react-router-dom";

import {
  profileCircleStyle,
  leadDataBlockStyle,
  leadNameStyle,
} from "./HomeStyles";

const LeadInfo = ({ leadDetails }) => {
  function extractInitials(name) {
    let words = name.split(" ");
    let initials = words.map((word) => word[0]).join("");
    return initials.toUpperCase();
  }
  const leadInfoBlock = () => {
    return (
      <div className={leadDataBlockStyle}>
        <h2 className={leadNameStyle}>
          <span className={profileCircleStyle}>
            {extractInitials(leadDetails.name)}
          </span>
          {leadDetails.name}
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          <span className="font-bold text-slate-700 ">Email: </span>
          {leadDetails.email}
        </p>
        <p className="text-blue-600 text-sm">
          <span className="font-bold text-slate-700">Phone: </span>
          {leadDetails.phone}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-bold text-slate-700">Company: </span>
          {leadDetails.company}
        </p>
      </div>
    );
  };

  return <Link to={`/lead/${leadDetails.leadId}`}>{leadInfoBlock()}</Link>;
};

export default LeadInfo;
