import type { Viewport } from "next";
import MobileNavbar from "@/components/nav/MobileNavbar";
import Navbar from "@/components/nav/Navbar";

export const viewport: Viewport = {
  themeColor: "#0F0F0F",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 py-10 md:p-12 bg">
      <div className="hidden sm:block z-100">
        <Navbar />
      </div>
      <div className="-m-5 block sm:hidden z-100">
        <MobileNavbar />
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
};
export default Layout;
