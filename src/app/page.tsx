import Hero from "@/components/sections/Hero";
import ResearchOverview from "@/components/sections/ResearchOverview";
import Publications from "@/components/sections/Publications";
import Patents from "@/components/sections/Patents";
import ResearchExperience from "@/components/sections/ResearchExperience";
import UpcomingWork from "@/components/sections/UpcomingWork";
import Experience from "@/components/sections/Experience";
import OpenSource from "@/components/sections/OpenSource";
import Profile from "@/components/sections/Profile";
import ResearchMetrics from "@/components/sections/ResearchMetrics";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <ResearchOverview />
      <Publications />
      <Patents />
      <UpcomingWork />
      <ResearchExperience />
      <Experience />
      <OpenSource />
      <Profile />
      <ResearchMetrics />
      <Contact />
    </main>
  );
}