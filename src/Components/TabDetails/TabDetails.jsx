import TabInfoBlock from "./TabInfoBlock";
import data from "../../Sample1.json";
import { tabTypeBorderStyle, gofsListStyle } from "./TabDetailsStyle";
import { useParams } from "react-router";

const TabDetails = () => {
  const { gofs } = data;
  const { leadId } = useParams();

  console.log(leadId);

  const tabName = () => {
    return (
      <div className="flex flex-row items-center gap-3">
        <p className="text-[18px] w-[108px]">Lead Details</p>
        <p className={tabTypeBorderStyle}></p>
      </div>
    );
  };

  const listOfGofs = () => {
    return (
      <ul className={gofsListStyle}>
        {gofs.map((gofsDetails) => (
          <TabInfoBlock
            key={gofsDetails.id}
            name={gofsDetails.name}
            fieldType={gofsDetails.fields}
          />
        ))}
      </ul>
    );
  };

  return (
    <div className="pr-40 pl-4 pt-6">
      {tabName()}
      {listOfGofs()}
    </div>
  );
};
export default TabDetails;
