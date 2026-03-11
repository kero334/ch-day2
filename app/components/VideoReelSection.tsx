"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Play, Sparkles } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    src: "https://drive.google.com/file/d/1zKypSxxhEWSYjWXxuL5G5FDAsYO3Ozf_/preview",
    title: "انت ازاي مش بتجي يوم الخميس؟",
    hook: "😤 مستنى إيه؟",
    orientation: "vertical" as const,
  },
  {
    id: 2,
    src: "https://drive.google.com/file/d/1o67hBh_DneqbuI1q3zlD6Q62QWBdChxa/preview",
    title: "مين اللي ييجي الخميس الجاي؟",
    hook: "👀 الكل مستنيك!",
    orientation: "vertical" as const,
  },
  {
    id: 3,
    src: "https://drive.google.com/file/d/1C5R7QnzOZihCbypVEkLodFB9tbOXXj-k/preview",
    title: "الاجتماع ولا النوم؟",
    hook: "😂 قرار صعب!",
    orientation: "horizontal" as const,
  },
  {
    id: 4,
    src: "https://drive.google.com/file/d/1WOoxpq5rqBs99uUDt1DKKWc0bYrizaCw/preview",
    title: "تيجي ولا اتونس مع غاوري؟",
    hook: "✅ اختار صح!",
    orientation: "horizontal" as const,
  },
];

const REACTIONS = ["😂", "❤️", "🔥", "👏"];

export default function VideoReelSection() {
  const [current, setCurrent] = useState(0);
  const [reactions, setReactions] = useState<Record<number, Record<string, number>>>({});

  const video = VIDEOS[current];
  const isVertical = video.orientation === "vertical";

  const addReaction = (videoId: number, emoji: string) =>
    setReactions((p) => ({
      ...p,
      [videoId]: { ...p[videoId], [emoji]: ((p[videoId]?.[emoji] ?? 0) + 1) },
    }));

  return (
    <section id="videos" className="relative py-20 md:py-28 overflow-hidden bg-[#0B1727]">
      {/* Ambience */}
      <div className="absolute top-[5%] right-[-5%] w-[350px] h-[350px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Section Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10 px-5"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
          <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.25em]">
            مكتبة الفيديوهات
          </span>
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
        </div>
        <h2 className="text-3xl md:text-4xl font-[900] text-white">
          شوف وقرر{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #8B6B38, #E8D2A1, #C5A059)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gold-shimmer 4s linear infinite",
            }}
          >
            بنفسك
          </span>{" "}
          🎥
        </h2>
      </motion.div>

      {/* ── Progress Bar ── */}
      <div className="flex justify-center gap-2 mb-8 px-5">
        {VIDEOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`فيديو ${i + 1}`}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: i === current ? 32 : 12,
              background: i === current ? "#C5A059" : "rgba(197,160,89,0.25)",
            }}
          />
        ))}
      </div>

      {/* ── Player ── */}
      <div className="w-full max-w-2xl mx-auto px-5">
        {/* Title — always above video, well-spaced */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`title-${video.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-4 text-right"
          >
            <span className="text-[#C5A059] text-xs font-bold block mb-1">{video.hook}</span>
            <h3 className="text-xl md:text-2xl font-[900] text-white leading-tight">
              {video.title}
            </h3>
            <div
              className="mt-2 h-0.5 w-14 rounded-full"
              style={{ background: "linear-gradient(90deg,#C5A059,transparent)" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Video Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`video-${video.id}`}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full rounded-3xl overflow-hidden bg-[#060E1C]"
            style={{
              /* always explicit aspect ratio — no overlap issues */
              aspectRatio: isVertical ? "9/16" : "16/9",
              maxHeight: isVertical ? "72svh" : "auto",
              boxShadow: "0 0 0 1px rgba(197,160,89,0.2), 0 24px 48px -12px rgba(0,0,0,0.7)",
            }}
          >
            {/* Mode badge */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/10 text-white/80 text-[10px] uppercase tracking-widest font-bold">
              <Play className="w-2.5 h-2.5 fill-current" />
              {isVertical ? "Story" : "Cinema"}
            </div>

            <iframe
              src={video.src}
              className="w-full h-full border-0"
              allow="autoplay"
              allowFullScreen
              loading="lazy"
              title={video.title}
            />
          </motion.div>
        </AnimatePresence>

        {/* ── Controls Row — always visible, below video ── */}
        <div className="flex items-center justify-between mt-5 gap-3">
          {/* Prev */}
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            aria-label="الفيديو السابق"
            className="flex items-center gap-1.5 px-5 py-3 rounded-2xl font-bold text-sm text-white disabled:opacity-25 transition-all active:scale-90"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
          >
            <ChevronRight className="w-4 h-4" />
            السابق
          </button>

          {/* Counter pill */}
          <span className="text-white/35 text-sm font-mono font-bold select-none">
            {current + 1} / {VIDEOS.length}
          </span>

          {/* Next */}
          {current < VIDEOS.length - 1 ? (
            <button
              onClick={() => setCurrent((c) => Math.min(VIDEOS.length - 1, c + 1))}
              aria-label="الفيديو التالي"
              className="flex items-center gap-1.5 px-5 py-3 rounded-2xl font-black text-sm text-[#0B1727] transition-all active:scale-90"
              style={{ background: "linear-gradient(135deg,#C5A059,#E8D2A1)" }}
            >
              التالي 🔥
              <ChevronLeft className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() =>
                document.getElementById("event-details")?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="رؤية التفاصيل"
              className="flex items-center gap-1.5 px-5 py-3 rounded-2xl font-black text-sm text-[#0B1727] transition-all active:scale-90"
              style={{ background: "linear-gradient(135deg,#C5A059,#E8D2A1)" }}
            >
              التفاصيل ✨
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Reactions */}
        <div className="flex justify-center gap-3 mt-5">
          {REACTIONS.map((emoji) => (
            <button
              key={emoji}
              onClick={() => addReaction(video.id, emoji)}
              className="flex items-center gap-1 px-4 py-2.5 rounded-2xl text-lg font-bold transition-all active:scale-90 hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {emoji}
              {reactions[video.id]?.[emoji] ? (
                <span className="text-white/40 text-xs">{reactions[video.id][emoji]}</span>
              ) : null}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
