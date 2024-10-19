import { createBrowserRouter } from "react-router-dom";

import RootPage from "../Pages/RootPage";
import OtherPage from "../Pages/OtherPages";
import Homepage from "../Pages/HomePage";
import TabDetailsPage from "../Pages/TabDetailsPage";
import {
  INITIAL_PATH,
  LEAD_DETAILS_PATH,
  ACTIVITIES_PATH,
  REMARK_PATH,
  DOCS_PATH,
  CALL_LOG_PATH,
  HISTORY_PATH,
} from "../Constants";

const Router = () => {
  return createBrowserRouter([
    { path: INITIAL_PATH, element: <Homepage /> },
    {
      path: LEAD_DETAILS_PATH,
      element: <RootPage />,
      children: [
        { path: LEAD_DETAILS_PATH, element: <TabDetailsPage /> },
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
