"use client";

import { animatePageIn } from "./utils/animations";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <div
        id="banner-1"
        style={{ display: "none" }}
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-0 w-1/4 pointer-events-none"
      />
      <div
        id="banner-2"
        style={{ display: "none" }}
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-1/4 w-1/4 pointer-events-none"
      />
      <div
        id="banner-3"
        style={{ display: "none" }}
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-2/4 w-1/4 pointer-events-none"
      />
      <div
        id="banner-4"
        style={{ display: "none" }}
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-3/4 w-1/4 pointer-events-none"
      />
      {children}
    </div>
  );
}
