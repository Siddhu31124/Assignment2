import leadSummary from "../../LeadSummary.json";
import HomeHeader from "./HomeHeader";
import LeadInfo from "./LeadInfo";

const Home = () => {
  return (
    <div className="h-[100%] bg-slate-100">
      <HomeHeader />
      <div className="px-40 py-6 flex flex-row flex-wrap gap-8">
        {leadSummary.map((lead) => (
          <LeadInfo key={lead.leadId} leadDetails={lead} />
        ))}
      </div>
    </div>
  );
};

export default Home;
