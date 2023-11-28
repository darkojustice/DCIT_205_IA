import { Suspense } from "react";
import { CenterLoader } from "./loaders";
import { RouterProvider } from "react-router-dom";
import router from "./navigation/router-config";

function App() {
  return (
    <Suspense fallback={CenterLoader()}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
