"use client";

import { FeaturesSectionWithBentoGrid } from "@/components/blocks/feature-section-with-bento-grid";
import { ContactSection } from "@/components/contact";
import Footer from "@/components/footer";
import { Introducing } from "@/components/indroducing";
import Landing from "@/components/landing";
import { NavBar } from "@/components/nav";
import { Slogen } from "@/components/slogen";
import { ZoodoTeam } from "@/components/zoodo_team";

export default function Home() {
  return (
    <div className="bg-black">
      <NavBar />
      <Landing />
      <Introducing />
      <FeaturesSectionWithBentoGrid />
      <ZoodoTeam />
      <ContactSection />
      <Slogen />
      <Footer />
    </div>
  );
}
