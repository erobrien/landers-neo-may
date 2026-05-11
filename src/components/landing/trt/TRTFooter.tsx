export const TRTFooter = () => (
  <footer style={{ background: "#000033", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
    <div className="max-w-[1200px] mx-auto px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Logo + intro */}
        <div>
          <img src="/logos/Text_Logo_white.png" alt="Men's Wellness Centers" className="h-7 w-auto" />
          <p className="mt-5 text-sm leading-relaxed max-w-[480px]" style={{ color: "rgba(255,255,255,0.78)", fontFamily: "Inter, sans-serif" }}>
            Virginia's trusted men's health centers since 2015. Physician-supervised TRT at our Richmond, Newport News, and Virginia Beach locations.
          </p>
        </div>

        {/* Right: Contact */}
        <div>
          <div className="text-xs font-semibold uppercase mb-4" style={{ color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", fontFamily: "Inter, sans-serif" }}>
            Contact
          </div>
          <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Inter, sans-serif" }}>
            <li>Richmond: <a href="tel:8043464636" className="hover:text-white">804-346-4636</a></li>
            <li>Newport News: <a href="tel:7578066263" className="hover:text-white">757-806-6263</a></li>
            <li>Virginia Beach: <a href="tel:7578066263" className="hover:text-white">757-806-6263</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Inter, sans-serif" }}>
          The information presented on this website is provided for general informational purposes only and is not intended to constitute medical advice, diagnosis, or treatment. Men's Wellness Centers does not provide medical advice through this website. All content is informational in nature only. Men's Wellness Centers operates physical center locations only. Medical services are provided exclusively in person following an individualized evaluation and are rendered by licensed medical professionals exercising independent clinical judgment. Testimonials and reviews reflect individual experiences only and are not intended to represent typical outcomes.
        </p>
      </div>

      <div className="mt-8 pt-6 border-t text-xs uppercase" style={{ borderColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", fontFamily: "Inter, sans-serif" }}>
        <div>© {new Date().getFullYear()} Men's Wellness Centers. All rights reserved.</div>
      </div>

      <div className="mt-10 flex justify-center">
        <img src="/images/badges/legitscript.png" alt="LegitScript Certified" className="h-20 w-auto" loading="lazy" />
      </div>
    </div>
  </footer>
);
