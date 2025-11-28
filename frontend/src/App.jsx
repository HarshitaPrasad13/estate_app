import Navbar from "./components/Navbar";
import "./App.scss";
import ListPage from "./routes/ListPage";
import HomePage from "./routes/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";
import SinglePage from "./routes/SinglePage";
import ProfilePage from "./routes/ProfilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
