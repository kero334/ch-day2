"use client";
import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

const TESTIMONIALS = [
  { quote: "والله كنت مش ناوي أجي، بس الإعلان عمل فيّا حاجة مش طبيعية 😂", author: "مش ميخائيل" },
  { quote: "أنا شايل قهوة بالساعة ٦ تمام — مستني من النهارده", author: "حد جاهز ☕" },
  { quote: "الفيديو الرابع خلاني أضغط مشاركة فورًا من غير تفكير!", author: "شخص كان بيفكر 📲" },
  { quote: "قلت هروح تلت ساعة وفضلت لآخر اليوم 😅", author: "كل واحد فينا" },
  { quote: "أحسن اجتماع في حياتي — والسنة دي هيبقى أحسن مرتين بإذن الله", author: "مصدر موثوق 😌" },
  { quote: "الساعة ٦ أنا على الباب — كنت واقف من الساعة ٥!", author: " مش لوحدك 😅" },
];

export default function SocialProofSection() {
  return (
    <section className="py-20 overflow-hidden bg-[#0B1727]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-5"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
          <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.28em]">
            مجتمعنا بيقول
          </span>
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
        </div>
        <h2 className="text-3xl font-[900] text-white">
          كلام من القلب{" "}
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
            (تقريبًا 😄)
          </span>
        </h2>
      </motion.div>

      {/* Scrolling Ticker */}
      <div className="relative">
        <div className="flex gap-5 overflow-hidden py-4">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex gap-5 flex-shrink-0"
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[290px] md:w-[340px] rounded-3xl p-7 flex flex-col gap-4"
                style={{
                  background: "rgba(16,33,56,0.65)",
                  border: "1px solid rgba(197,160,89,0.10)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Quote className="w-7 h-7 text-[#C5A059]/20" />
                <p className="text-white font-[500] text-base leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div
                    className="w-7 h-7 rounded-full flex-shrink-0"
                    style={{ background: "linear-gradient(135deg,#C5A059,#E8D2A1)", opacity: 0.55 }}
                  />
                  <p className="text-[#C5A059] text-xs font-black uppercase tracking-wide">
                    {t.author}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-52 bg-gradient-to-r from-[#0B1727] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-52 bg-gradient-to-l from-[#0B1727] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
