import type { Viewport } from "next";
import MobileNavbar from "@/components/nav/MobileNavbar";
import Navbar from "@/components/nav/Navbar";

export const viewport: Viewport = {
  themeColor: "#0F0F0F",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-10 md:px-12 bg relative">
      <div className="hidden sm:block z-[100]">
        <Navbar />
      </div>
      <div className="absolute top-0 left-0 w-full sm:hidden z-[100]">
        <MobileNavbar />
      </div>
      <div className="mt-5 px-4">{children}</div>
    </div>
  );
};
export default Layout;
