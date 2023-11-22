import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./features/DefaultLayout.tsx";
import PageTitle from "./components/ui/pageTItle/PageTitle.tsx";
import VUpdateEvent from "./features/UpdateEvent/VUpdateEvent.tsx";
import VCreateEvent from "./features/CreateEvent/VCreateEvent.tsx";
import VEventList from "./features/EventList/VEventList.tsx";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

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
      {
        path: "/utworz-wydarzenie",
        element: <VCreateEvent />,
      },
      {
        path: "/panel-wydarzen",
        element: <VEventList />,
      },
      {
        path: "/panel-wydarzen/:id",
        element: <VUpdateEvent />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
