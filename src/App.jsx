import { RouterProvider } from "react-router-dom";

import Router from "./utils/Routers";
import { Toaster } from "react-hot-toast";

function App() {
  const router = Router();
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </>
  );
}

export default App;
