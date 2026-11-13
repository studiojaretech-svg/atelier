import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { BrowserMockupHero } from "@/components/sections/BrowserMockupHero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#233126] text-[#D8D0C2]">
      <GlassNavbar />
      <main>
        <BrowserMockupHero />
      </main>
    </div>
  );
}
