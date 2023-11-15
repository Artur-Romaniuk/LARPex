import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./features/DefaultLayout.tsx";
import PageTitle from "./components/ui/pageTItle/PageTitle.tsx";
import EventStore, { eventContext } from "./store/EventStore.ts";
import { eventLogic } from "./config/context.ts";
import VUpdateEvent from "./features/UpdateEvent/VUpdateEvent.tsx";
import VEventList from "./features/EventList/VEventList.tsx";

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

const EventStoreProvider = ({ children }: { children: JSX.Element }) => {
  const elems = EventStore({
    eventLogic,
  });

  return (
    <eventContext.Provider value={{ ...elems }}>
      {children}
    </eventContext.Provider>
  );
};

const App = () => {
  return (
    <EventStoreProvider>
      <RouterProvider router={router} />
    </EventStoreProvider>
  );
};

export default App;
