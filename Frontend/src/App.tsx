import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./features/DefaultLayout.tsx";
import PageTitle from "./components/ui/PageTitle.tsx";
import VUpdateEvent from "./features/events/views/VUpdateEvent.tsx";
import VCreateEvent from "./features/events/views/VCreateEvent.tsx";
import VEventList from "./features/events/views/VEventList.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import VPayment from "./features/events/views/VPayment.tsx";
import VUserEventsList from "./features/userEvents/views/VUserEventsList.tsx";
import VEventDetails from "./features/userEvents/views/VEventDetails.tsx";
import VJoinEvent from "./features/userEvents/views/VJoinEvent.tsx";
import { UserContextProvider } from "./logic/contexts/userContext.tsx";
import VPaymentAccepted from "./features/events/views/VPaymentAccepted.tsx";
import VPaymentDeclined from "./features/events/views/VPaymentDeclined.tsx";

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
      {
        path: "/platnosc/:eventId/:orderId",
        element: <VPayment />,
      },
      {
        path: "/platnosc/:eventId/:orderId/accepted",
        element: <VPaymentAccepted />,
      },
      {
        path: "/platnosc/:eventId/:orderId/declined",
        element: <VPaymentDeclined />,
      },
      {
        path: "/user/events",
        element: <VUserEventsList />,
      },
      {
        path: "/user/event/:id",
        element: <VEventDetails />,
      },
      {
        path: "/user/event/:id/join",
        element: <VJoinEvent />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </QueryClientProvider>
  );
};

export default App;
