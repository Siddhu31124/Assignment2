import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Router from "./utils/Routers";

function App() {
  const router = Router();
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
