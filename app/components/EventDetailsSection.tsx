"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Calendar, Navigation, Sparkles } from "lucide-react";

function useCountdown(target: Date) {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return setT({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setT({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return { ...t, mounted };
}

const EVENT_DATE = new Date("2026-03-13T18:00:00");

const EXCUSES: [string, string][] = [
  ["عندي شغل", "الشغل هيتعمل بكره.. الفرحة لأ! ✨"],
  ["مش فارق معايا", "إنت فارق معانا جداً 🥺"],
  ["مش عارف الطريق", "Google Maps موجود يا بطل 📍"],
  ["تعبان وعايز أنام", "الاجتماع هيديك طاقة مش نوم ⚡"],
  ["هروح المرة الجاية", "قالها كل واحد فاته يوم عظيم 😪"],
  ["مش عارف الناس", "ده أنسب وقت تتعرف فيه! 🤝"],
];

export default function EventDetailsSection() {
  const cd = useCountdown(EVENT_DATE);
  const [excuse, setExcuse] = useState<string | null>(null);

  const randomExcuse = () => {
    const [, refutation] = EXCUSES[Math.floor(Math.random() * EXCUSES.length)];
    setExcuse(refutation);
  };

  return (
    <section id="event-details" className="relative px-5 py-20 overflow-hidden bg-[#0B1727]">
      {/* Ambience */}
      <div className="absolute top-[20%] left-[-5%] w-[380px] h-[380px] bg-[#C5A059]/5 rounded-full blur-[110px] pointer-events-none" />

      {/* ── Countdown ── */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
          <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.28em]">العد التنازلي</span>
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-[900] text-white mb-10">
          وقتنا على{" "}
          <span
            style={{
              background: "linear-gradient(90deg,#8B6B38,#E8D2A1,#C5A059)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gold-shimmer 4s linear infinite",
            }}
          >
            اليوم المنتظر
          </span>
        </h2>

        <div className="flex justify-center gap-3 flex-wrap">
          {[
            { v: cd.days, l: "يوم" },
            { v: cd.hours, l: "ساعة" },
            { v: cd.minutes, l: "دقيقة" },
            { v: cd.seconds, l: "ثانية" },
          ].map(({ v, l }) => (
            <div key={l} className="flex flex-col items-center gap-2">
              <div
                className="w-[72px] h-[72px] md:w-[88px] md:h-[88px] rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-[900]"
                style={{
                  background: "rgba(16,33,56,0.7)",
                  border: "1px solid rgba(197,160,89,0.2)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                  color: "#E8D2A1",
                }}
              >
                {cd.mounted ? String(v).padStart(2, "0") : "00"}
              </div>
              <span className="text-white/35 text-[11px] font-bold uppercase tracking-widest">
                {l}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Details Card + Excuse generator — stacked on mobile, grid on desktop ── */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: fun copy + excuse generator */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5"
        >
          <div>
            <p className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.28em] mb-2">
              بيانات اليوم
            </p>
            <h3 className="text-3xl font-[900] text-white leading-tight">
              متتأخرش..
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg,#8B6B38,#E8D2A1,#C5A059)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gold-shimmer 4s linear infinite",
                }}
              >
                المكان محجوز باسمك
              </span>
              .
            </h3>
          </div>

          <p className="text-white/45 text-base leading-relaxed">
            كل التفاصيل اللي هتحتاجها عشان تشرفنا يوم الخميس في اجتماع مار يوحنا الحبيب.
          </p>

          <button
            onClick={randomExcuse}
            className="self-start flex items-center gap-3 px-6 py-4 rounded-2xl font-black text-sm text-white transition-all active:scale-95 hover:scale-[1.02]"
            style={{
              background: "rgba(16,33,56,0.8)",
              border: "1px solid rgba(197,160,89,0.25)",
            }}
          >
            <span className="text-xl">🎲</span> جيبلي عذر مقنع 😂
          </button>

          <AnimatePresence>
            {excuse && (
              <motion.div
                key={excuse}
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                className="p-5 rounded-2xl font-bold text-[#E8D2A1] text-base"
                style={{ background: "rgba(197,160,89,0.12)", border: "1px solid rgba(197,160,89,0.3)" }}
              >
                {excuse}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right: event info card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[2rem] p-7 relative flex flex-col gap-7"
          style={{
            background: "rgba(16,33,56,0.65)",
            border: "1px solid rgba(197,160,89,0.18)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Sparkles className="absolute top-5 right-5 w-4 h-4 text-[#C5A059] opacity-25" />

          {[
            { Icon: Calendar, label: "المعاد", value: "الخميس القادم" },
            { Icon: Clock, label: "التوقيت", value: "٦ مساءً — ٨ مساءً" },
            { Icon: MapPin, label: "المكان", value: "كنيسة العذراء والشهيد أبانوب" },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex items-start gap-5 group">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors group-hover:border-[#C5A059]/50"
                style={{
                  background: "rgba(197,160,89,0.08)",
                  border: "1px solid rgba(197,160,89,0.15)",
                }}
              >
                <Icon className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <p className="text-white/35 text-xs font-bold uppercase tracking-widest mb-1">
                  {label}
                </p>
                <p className="text-white font-black text-lg leading-tight">{value}</p>
              </div>
            </div>
          ))}

          <button
            className="w-full mt-2 py-4 rounded-2xl font-black text-sm text-[#0B1727] flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-xl shadow-[#C5A059]/15"
            style={{ background: "linear-gradient(135deg,#C5A059,#E8D2A1)" }}
          >
            <Navigation className="w-4 h-4" /> افتح الخريطة
          </button>
        </motion.div>
      </div>
    </section>
  );
}
