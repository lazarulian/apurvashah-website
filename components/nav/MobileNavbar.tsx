"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { routes } from "@/lib/data/routes";
import useDelayedRender from "use-delayed-render";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "" : "hidden";
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <nav>
      <div
        className={`w-full justify-between flex items-center ${
          isMenuRendered && "bg-bg"
        } p-5`}
        style={{ zIndex: 101 }}
      >
        <li className="list-none font-bold text-lg">
          <Link href="/" className="hover:opacity-50 duration-200">
            AS.
          </Link>
        </li>
        <button
          className="burger visible md:hidden"
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <CrossIcon /> : <MenuIcon />}
        </button>
      </div>
      {isMenuMounted && (
        <ul
          className={`menu flex flex-col absolute bg-bg ${
            isMenuRendered && "menuRendered"
          }`}
        >
          {routes.map((item, index) => (
            <li
              key={item.path || index}
              className="border-b border-gray-900 text-gray-100 text-sm font-semibold"
              style={{ transitionDelay: `${150 + index * 25}ms` }}
            >
              <Link href={item.path} className="flex w-auto pb-4">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

function MenuIcon() {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
