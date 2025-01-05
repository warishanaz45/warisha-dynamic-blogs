"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { clearInterval } from "timers";

export default function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState<string>(``);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentDateTime(
        now.toLocaleDateString("en-US", options) +
          " " +
          now.toLocaleString("en-US", { hour12: true })
      );
    };

    updateDateTime();
    const interValid = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValid);
  }, []);

  return (
    <header className="text-white body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row itms-center">
        <div className="flex-1 text-white">
          <span>{currentDateTime}</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-white justify-center">
          <Link
            href={"http://localhost:3000/"}
            className="mr-5 hover:text-green-400 transition-colors duration-300 transform hover:scale-105"
          >
            Home
          </Link>

          <Link
            href={"http://localhost:3000/#"}
            className="mr-5 hover:text-green-400 transition-colors duration-300 transform hover:scale-105"
          >
            About
          </Link>

          <Link
            href={"http://localhost:3000/#/"}
            className="mr-5 hover:text-green-400 transition-colors duration-300 transform hover:scale-105"
          >
            Blog
          </Link>

          <Link
            href={"http://localhost:3000/#"}
            className="mr-5 hover:text-green-400 transition-colors duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
        </nav>
        <button className="inline-flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-white mt-4 md:mt-0 transition-colors duration-300">
          Github
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
