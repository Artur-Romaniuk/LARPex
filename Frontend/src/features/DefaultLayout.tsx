import Navigation from "../components/ui/Navigation.tsx";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="main d-flex flex-column">
      <Navigation />
      <main className="d-flex flex-column flex-grow-1">
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
