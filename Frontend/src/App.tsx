import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./features/DefaultLayout.tsx";
import PageTitle from "./components/ui/pageTItle/PageTitle.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <PageTitle title={"Home"} />
          </div>
        ),
      },
      {
        path: "/about",
        element: (
          <div>
            <PageTitle title={"About"} />
          </div>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
