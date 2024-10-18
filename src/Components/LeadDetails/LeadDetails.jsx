import LeadInfoBlock from "./LeadInfoBlock";

import data from "../../Sample1.json";

const LeadDetails = () => {
  const { gofs } = data;
  return (
    <div className="pr-40 pl-4 pt-6">
      <div className="flex flex-row items-center gap-3">
        <p className="text-[18px] w-[108px]">Lead Details</p>
        <p className="h-[1px] w-[624px] border-b-2 border-b-slate-300"></p>
      </div>
      <ul className="mt-4 flex flex-col gap-4">
        {gofs.map((gofsDetails) => (
          <LeadInfoBlock
            key={gofsDetails.id}
            name={gofsDetails.name}
            fieldType={gofsDetails.fields}
          />
        ))}
      </ul>
    </div>
  );
};
export default LeadDetails;
