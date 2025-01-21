import { createBrowserRouter } from "react-router-dom";
import { Layout, Header } from "@/layout";
import { HomePage, CreateMapPage, AboutUsPage, MyAccountPage } from "@/pages";
import { unLoginLoader } from "./loaders";

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
        path: "/create-map",
        element: (
          <Header>
            <CreateMapPage />
          </Header>
        ),
        loader: unLoginLoader,
      },
      {
        path: "/about-us",
        element: (
          <Header>
            <AboutUsPage />
          </Header>
        ),
        loader: unLoginLoader,
      },
      {
        path: "/my-account",
        element: (
          <Header>
            <MyAccountPage />
          </Header>
        ),
        loader: unLoginLoader,
      },
    ],
  },
]);

export default router;
