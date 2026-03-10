
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="p-[2%]  lg:pl-20  flex-1">
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}