import { createBrowserRouter } from "react-router-dom";

import RootPage from "../Pages/RootPage";
import OtherPage from "../Pages/OtherPages";
import LeadDetails from "../Components/LeadDetails/LeadDetails";

import {
  LEAD_DETAILS_PATH,
  ACTIVITIES_PATH,
  REMARK_PATH,
  DOCS_PATH,
  CALL_LOG_PATH,
  HISTORY_PATH,
} from "../Constants";

const Router = () => {
  return createBrowserRouter([
    {
      path: LEAD_DETAILS_PATH,
      element: <RootPage />,
      children: [
        { index: true, element: <LeadDetails /> },
        { path: ACTIVITIES_PATH, element: <OtherPage /> },
        { path: REMARK_PATH, element: <OtherPage /> },
        { path: DOCS_PATH, element: <OtherPage /> },
        { path: CALL_LOG_PATH, element: <OtherPage /> },
        { path: HISTORY_PATH, element: <OtherPage /> },
      ],
    },
  ]);
};

export default Router;
