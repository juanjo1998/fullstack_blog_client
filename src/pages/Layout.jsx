import { Outlet } from "react-router-dom";
import { Header } from "../components";

export const Layout = () => {
  return (
    <main>
      {/* header */}
      <Header />

      <Outlet />

      {/* footer */}
    </main>
  );
};
