import dayjs from "dayjs";
import { IoCallOutline } from "react-icons/io5";
import { DATE_FORMAT } from "../../Constants";

import { commonFelidStyle, linkStyle, phoneNumberStyle } from "./Styles";
import {
  FILED_CHECKBOX_GROUP,
  FILED_DATE,
  FILED_DROPDOWN,
  FILED_EMAIL,
  FILED_LONG_TEXT,
  FILED_MULTI_SELECT,
  FILED_NUMBER,
  FILED_PHONE,
  FILED_SMALL_TEXT,
  IDENTIFY_URL,
} from "../../Constants";

const FelidStyles = ({ type, value, sidebar }) => {
  const sidebarSelectStyle = sidebar
    ? `${commonFelidStyle} text-right`
    : commonFelidStyle;
  switch (type) {
    case FILED_EMAIL: {
      return <li className={`${sidebarSelectStyle} truncate`}>{value}</li>;
    }

    case FILED_PHONE: {
      return (
        <li className={phoneNumberStyle}>
          <IoCallOutline className="mr-1" /> {value.phoneNumber}
        </li>
      );
    }

    case FILED_SMALL_TEXT: {
      if (value.startsWith(IDENTIFY_URL)) {
        return (
          <a className={linkStyle} href={value}>
            {value}
          </a>
        );
      }
      return <li className={`max-w-[140px] ${sidebarSelectStyle}`}>{value}</li>;
    }

    case FILED_LONG_TEXT:
    case FILED_DROPDOWN:
    case FILED_NUMBER: {
      return <li className={`max-w-[140px] ${sidebarSelectStyle}`}>{value}</li>;
    }

    case FILED_DATE: {
      return (
        <li className={commonFelidStyle}>{dayjs(value).format(DATE_FORMAT)}</li>
      );
    }

    case FILED_MULTI_SELECT: {
      return (
        <li className={`max-w-[140px] ${sidebarSelectStyle}`}>
          {value[0]} {value[1]}
          {value.length - 2 > 0 ? `+${value.length - 2}` : ""}
        </li>
      );
    }

    case FILED_CHECKBOX_GROUP: {
      if (value.length > 0) {
        return (
          <li className={`max-w-[140px] ${sidebarSelectStyle}`}>
            {value.join(" ,")}
          </li>
        );
      }
      return <li className={`max-w-[140px] ${sidebarSelectStyle}`}>{value}</li>;
    }

    default: {
      return (
        <li className={`max-w-[140px] ${sidebarSelectStyle}`}>
          {value ? value : "Not Data"}
        </li>
      );
    }
  }
};

export default FelidStyles;
