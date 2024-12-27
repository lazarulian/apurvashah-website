import Link from "next/link";
import React from "react";
import { routes } from "@/lib/data/routes";

function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center">
            <span className="hover:text-accent transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim">
              AS.
            </span>
          </span>
        </Link>
      </li>
      <ul className="flex items-center space-x-5">
        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none text-white hover:bg-accent hover:text-black fade-in duration-500 p-2`}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
