import { Outlet } from "react-router";

import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBarSection/Sidebar";
import TabBar from "../Components/TabBar/TabBar";

//TODO: Check the syntac w-[100]
const RootPage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row bg-slate-100 w-[100]">
        <SideBar />
        <div>
          <TabBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default RootPage;
