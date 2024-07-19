"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import LogoLettersOnlyLight from "@/assets/logo-letters-only-light.svg";
import LogoLettersOnlyDark from "@/assets/logo-letters-only-dark.svg";
import { MonsterIcon } from "./MonsterIcon"; // Ensure the import path is correct

export function Logo() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (mounted) {
      const currentTheme = resolvedTheme || theme;
      document.documentElement.setAttribute("data-theme", currentTheme || "light");

      // Simulate loading time before showing the logo letters
      const timer = setTimeout(() => {
        setLoaded(true);
      }, 2000); // 2 seconds delay

      return () => clearTimeout(timer);
    }
  }, [resolvedTheme, theme, mounted]);

  if (!mounted) return null; // Ensure component doesn't render until mounted

  const currentTheme = resolvedTheme || theme;
  const LogoLetters = currentTheme === "dark" ? LogoLettersOnlyDark : LogoLettersOnlyLight;

  return (
    <div className="flex items-center justify-center">
      <div className="w-[44px] h-[56px] z-80">
        <MonsterIcon />
      </div>
      <div
        className={`w-auto h-[56px] z-80 transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <LogoLetters className="h-full" />
      </div>
    </div>
  );
}
