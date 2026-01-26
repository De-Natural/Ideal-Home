import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import Exprience from "../UI/Exprience";
import Footer from "../UI/Footer";

export default function MainLayout() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Navbar />
      <main className="flex-1">
        <Outlet /> {/* Render matched child route here */}
      </main>
      <Exprience />
      <Footer />
    </div>
  );
}