"use client";
import HeroSection from "./components/HeroSection";
import TeaserSection from "./components/TeaserSection";
import VideoReelSection from "./components/VideoReelSection";
import SocialProofSection from "./components/SocialProofSection";
import EventDetailsSection from "./components/EventDetailsSection";
import InvitationSection from "./components/InvitationSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1727] overflow-x-hidden">
      <HeroSection />
      <TeaserSection />
      <VideoReelSection />
      <SocialProofSection />
      <EventDetailsSection />
      <InvitationSection />

      <footer className="text-center py-10 px-5 border-t border-white/5">
        <p className="text-white/20 text-xs font-medium">
          ✝️ بركة رب يوحنا الحبيب تكون معكم جميعًا
        </p>
        <p className="text-white/10 text-[10px] mt-1">
          يوم فريق البابا شنوده — اجتماع مار يوحنا الحبيب
        </p>
      </footer>
    </main>
  );
}
