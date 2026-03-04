import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ScanDetail from "./pages/ScanDetail";
import AppLayout from "./components/layout/AppLayout";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/dashboard",
    element: (
      <AppLayout>
        <Dashboard />
      </AppLayout>
    ),
  },
  {
    path: "/scan/:id",
    element: (
      <AppLayout>
        <ScanDetail />
      </AppLayout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
