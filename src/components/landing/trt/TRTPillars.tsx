import imgDoctor from "@/assets/lp/provider-headshot.webp";
import imgLobby from "@/assets/lp/onsite-labs-centrifuge.webp";
import imgGymConfident from "@/assets/lp/man-gym-confident.webp";
import imgTeam from "@/assets/lp/mwc-team.webp";

const pillars = [
  {
    title: "LICENSED PROVIDERS",
    desc: "Licensed Virginia physicians and nurse practitioners. A real provider, every visit.",
    image: imgDoctor,
  },
  {
    title: "ON-SITE LABS",
    desc: "Full labs done in-center, with results back before you walk out.",
    image: imgLobby,
  },
  {
    title: "BUILT FOR MEN",
    desc: "TRT, ED, and weight loss is all we do. Not a side service at a general practice.",
    image: imgGymConfident,
  },
  {
    title: "ONGOING MONITORING",
    desc: "Regular check-ins, labs, and protocol adjustments. We don't write a script and disappear.",
    image: imgTeam,
  },
];

export const TRTPillars = () => (
  <section className="py-14 md:py-20" style={{ background: "var(--bg-warm-grey)" }}>
    <div className="max-w-[1200px] mx-auto px-6">
      <h2
        className="font-bold uppercase text-center mb-12"
        style={{
          fontFamily: "Oswald, sans-serif",
          fontSize: "clamp(28px, 4vw, 40px)",
          color: "var(--bg-black)",
          fontWeight: 700,
        }}
      >
        EVERYTHING YOU NEED FOR TRT, ED,<br />
        AND WEIGHT LOSS, UNDER ONE ROOF.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="rounded-xl overflow-hidden text-center transition-all duration-300"
            style={{
              background: "var(--bg-white)",
              border: "1px solid var(--border-light)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-orange)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-light)";
            }}
          >
            <div className="flex justify-center mt-6">
              <img
                src={p.image}
                alt={p.title}
                className="w-[140px] h-[140px] rounded-full object-cover"
                style={{ border: "3px solid var(--border-light)" }}
                width={140}
                height={140}
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3
              className="font-bold text-base uppercase mt-4 tracking-wide"
              style={{ fontFamily: "Oswald, sans-serif", color: "var(--bg-black)", fontWeight: 700 }}
            >
              {p.title}
            </h3>
            <p
              className="text-sm px-5 pb-6 mt-2 leading-relaxed"
              style={{ color: "var(--text-dark-grey)", fontFamily: "Inter, sans-serif" }}
            >
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
