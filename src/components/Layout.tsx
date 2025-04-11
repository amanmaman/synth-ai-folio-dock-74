
import { Outlet } from "react-router-dom";
import DockNavbar from "./DockNavbar";
import ParticleBackground from "./ParticleBackground";

const Layout = () => {
  return (
    <div className="min-h-screen text-gray-800 font-light">
      <ParticleBackground />
      <main className="container mx-auto p-6 pt-12 pb-24">
        <Outlet />
      </main>
      <DockNavbar />
    </div>
  );
};

export default Layout;
