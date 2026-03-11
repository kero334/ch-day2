"use client";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown, Eye, Mic, Camera } from "lucide-react";

const MYSTERY_CARDS = [
  {
    icon: Camera,
    label: "المفاجأة الأولى 🤫",
    hint: "حاجة مش هتتوقعها خالص",
    color: "#7C3AED",
  },
  {
    icon: Eye,
    label: "اللحظة دي 😂",
    hint: "هتتكلم عنها الناس أسابيع",
    color: "#DC2626",
  },
  {
    icon: Mic,
    label: "الشخص ده 🎤",
    hint: "اللي إنت مش متخيله يعمل كده",
    color: "#059669",
  },
];

export default function TeaserSection() {
  return (
    <section
      id="teaser"
      className="relative flex flex-col items-center justify-center min-h-screen px-5 py-20 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-[20%] right-[-5%] w-[280px] h-[280px] bg-[#C5A059]/6 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 px-4"
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
          <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.28em]">
            يوم الخميس القادم
          </span>
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
        </div>
        <h2 className="text-[2rem] md:text-4xl font-[900] text-white leading-tight">
          في حاجة{" "}
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
            هتحصل
          </span>{" "}
          😳
          <br />
          <span className="text-2xl font-[700] text-white/70">
            مش هتتحمل إنك تفوتها
          </span>
        </h2>
      </motion.div>

      {/* Cards — NO lock icon, explained with a hover reveal */}
      <div className="grid gap-4 w-full max-w-md">
        {MYSTERY_CARDS.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20, y: 10 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="glass-card rounded-3xl p-5 flex items-center gap-5 group cursor-default select-none border border-white/5 hover:border-[#C5A059]/30 transition-all"
          >
            {/* Icon badge */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
              style={{ background: `${card.color}22`, border: `1px solid ${card.color}44` }}
            >
              <card.icon className="w-6 h-6" style={{ color: card.color }} />
            </div>

            {/* Text */}
            <div className="text-right flex-1 min-w-0">
              <h4 className="font-extrabold text-white text-lg leading-tight">
                {card.label}
              </h4>
              <p className="text-white/40 text-sm mt-1 font-medium truncate">
                {card.hint}
              </p>
            </div>

            {/* Arrow indicator */}
            <div className="text-white/15 group-hover:text-[#C5A059]/50 transition-colors flex-shrink-0">
              <ChevronDown className="w-5 h-5 -rotate-90" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-14 text-center flex flex-col items-center gap-5"
      >
        <p className="text-white/30 text-sm font-semibold italic">
          مقدرش تعرف أكتر من كده غير لو شوفت...
        </p>
        <button
          onClick={() =>
            document.getElementById("videos")?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm text-[#C5A059] transition-all active:scale-95 border border-[#C5A059]/30 bg-[#C5A059]/8 hover:bg-[#C5A059]/16"
        >
          اتفرج على الفيديوهات
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
