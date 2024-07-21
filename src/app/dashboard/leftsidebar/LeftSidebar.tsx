"use client";

import Link from "next/link";
import { HomeIcon, TrendingUpIcon, MailsIcon, MessagesSquareIcon, BookmarkIcon, ListIcon, UsersIcon, ExpandIcon } from "lucide-react";
import styles from '../dashboard.module.css';  // Import the CSS module
import { useTheme } from 'next-themes';  // or the theme provider you are using

const LeftSidebar = () => {
  const { theme } = useTheme();
  const resolvedTheme = theme || 'light';

  return (
    <div className="hidden lg:block w-1/5 p-6 dark:bg-[#222]">
      <div className="sticky top-[64px] flex flex-col gap-6">
        <nav className="grid gap-2">
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
            prefetch={false}
          >
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
            prefetch={false}
          >
            <TrendingUpIcon className="h-5 w-5" />
            Trending
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
            prefetch={false}
          >
            <MailsIcon className="h-5 w-5" />
            Notifications
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
            prefetch={false}
          >
            <MessagesSquareIcon className="h-5 w-5" />
            Messages
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
            prefetch={false}
          >
            <BookmarkIcon className="h-5 w-5" />
            Bookmarks
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
            prefetch={false}
          >
            <ListIcon className="h-5 w-5" />
            Lists
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
            prefetch={false}
          >
            <UsersIcon className="h-5 w-5" />
            Profile
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md transition-all duration-500 ease-in-out px-3 py-2 text-[#222] dark:text-white hover:bg-primary hover:text-[#ffffff] ${styles.halftone}`}
            prefetch={false}
          >
            <ExpandIcon className="h-5 w-5" />
            More
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default LeftSidebar;
