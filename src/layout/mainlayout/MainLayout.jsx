
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}