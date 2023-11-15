import Navigation from "../components/ui/navigation/Navigation.tsx";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
