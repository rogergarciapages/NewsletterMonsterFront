"use client";

import Link from "next/link";
import { ExpandIcon } from "lucide-react";
import styles from '../dashboard.module.css';
import { useTheme } from 'next-themes'; 
import AccordionItem from "./Accordion";
import { Bookmarkicon, Homeicon, Messageempty, Messagenew, Notificationicon, Listicon, Trendingicon, Usersicon, Cinemamode } from "@/assets/svg";

const LeftSidebar = () => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';

  return (
    <div className="w-full lg:w-1/5 p-6 dark:bg-[#222]">
      <div className="sticky top-[64px] flex flex-col gap-6">
        <nav className="grid gap-2">
          {/* Apply AccordionItem only for medium and smaller screens */}
          <div className="block md:hidden">
            <AccordionItem title="Menu">
              <Link
                href="#"
                className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
                prefetch={false}
              >
                <Homeicon className="h-5 w-5" />
                Home
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
                prefetch={false}
              >
                <Trendingicon className="h-5 w-5" />
                Trending
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
                prefetch={false}
              >
                <Notificationicon className="h-5 w-5" />
                Notifications
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
                prefetch={false}
              >
                <Messageempty className="h-5 w-5" />
                Messages
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
                prefetch={false}
              >
                <Bookmarkicon className="h-5 w-5" />
                Bookmarks
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
                prefetch={false}
              >
                <Listicon className="h-5 w-5" />
                Lists
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
                prefetch={false}
              >
                <Usersicon className="h-5 w-5" />
                Profile
              </Link>
              <Link
                href="#"
                className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
                prefetch={false}
              >
                <Cinemamode className="h-5 w-5" />
                Cinema Mode!
              </Link>
            </AccordionItem>
          </div>

          {/* Regular menu for larger screens */}
          <div className="hidden md:block">
            <Link
              href="#"
              className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
              prefetch={false}
            >
              <Homeicon className="h-8 w-8" />
              Home
            </Link>
            <Link
              href="#"
              className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
              prefetch={false}
            >
              <Trendingicon className="h-8 w-8" />
              Trending
            </Link>
            <Link
              href="#"
              className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
              prefetch={false}
            >
              <Notificationicon className="h-8 w-8" />
              Notifications
            </Link>
            <Link
              href="#"
              className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
              prefetch={false}
            >
              <Messageempty className="h-8 w-8" />
              Messages
            </Link>
            <Link
              href="#"
              className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
              prefetch={false}
            >
              <Bookmarkicon className="h-8 w-8" />
              Bookmarks
            </Link>
            <Link
              href="#"
              className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
              prefetch={false}
            >
              <Listicon className="h-8 w-8" />
              Lists
            </Link>
            <Link
              href="#"
              className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
              prefetch={false}
            >
              <Usersicon className="h-8 w-8" />
              Profile
            </Link>
            <Link
              href="#"
              className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
              prefetch={false}
            >
              <Cinemamode className="h-8 w-8" />
              Cinema Mode!
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default LeftSidebar;
