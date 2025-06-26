"use client";

import { Introducing } from "@/components/indroducing";
import Landing from "@/components/landing";
import { NavBar } from "@/components/nav";

export default function Home() {
  return (
    <div className="bg-black">
      <NavBar />
      <Landing />
      <Introducing />
    </div>
  );
}
