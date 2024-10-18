import dayjs from "dayjs";
import { IoCallOutline } from "react-icons/io5";
import { DATE_FORMAT } from "../../Constants";

const FelidStyles = ({ type, value }) => {
  switch (type) {
    case "EMAIL": {
      return (
        <li className="text-[#1D2039]  text-basic font-medium">{value}</li>
      );
    }

    case "PHONE_NUMBER": {
      return (
        <li className="text-blue-700 text-basic flex items-center">
          <IoCallOutline className="mr-1" /> {value.phoneNumber}
        </li>
      );
    }

    case "SMALL_TEXT": {
      if (value.startsWith("htt")) {
        return (
          <a
            className="max-w-[120px] text-blue-700 text-basic font-medium text-right truncate"
            href={value}
          >
            {value}
          </a>
        );
      }
      return (
        <li className="max-w-[140px] text-[#1D2039] text-basic font-medium">
          {value}
        </li>
      );
    }

    case "LONG_TEXT":
    case "DROPDOWN":
    case "NUMBER": {
      return (
        <li className="max-w-[140px] text-[#1D2039] text-basic font-medium ">
          {value}
        </li>
      );
    }

    case "DATE": {
      return (
        <li className="text-basic text-[#1D2039] font-medium">
          {dayjs(value).format(DATE_FORMAT)}
        </li>
      );
    }

    case "MULTI_SELECT": {
      return (
        <li className="text-basic text-[#1D2039] font-medium">
          {value[0]} {value[1]}
          {value.length - 2 > 0 ? `+${value.length - 2}` : ""}
        </li>
      );
    }

    case "CHECKBOX_GROUP": {
      if (value.length > 0) {
        return (
          <li className="text-basic text-[#1D2039] font-medium max-w-[120px]">
            {value.join(" ,")}
          </li>
        );
      }
      return (
        <li className="text-basic text-[#1D2039] font-medium max-w-[120px]">
          {value}
        </li>
      );
    }

    default: {
      return (
        <li className="text-basic text-[#1D2039] font-medium max-w-[120px]">
          {value}
        </li>
      );
    }
  }
};

export default FelidStyles;
