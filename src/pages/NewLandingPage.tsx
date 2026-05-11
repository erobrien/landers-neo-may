import { lazy, Suspense, useEffect } from "react";
import { TRTHeader } from "@/components/landing/trt/TRTHeader";
import { TRTHero } from "@/components/landing/trt/TRTHero";
import { TRTTrustBar } from "@/components/landing/trt/TRTTrustBar";
import { TRTMobileCTA } from "@/components/landing/trt/TRTMobileCTA";
import { SectionReveal } from "@/components/landing/trt/SectionReveal";

// Below-the-fold: code-split so the hero ships in the smallest possible chunk.
const TRTHowItWorks = lazy(() => import("@/components/landing/trt/TRTHowItWorks").then((m) => ({ default: m.TRTHowItWorks })));
const TRTManifesto = lazy(() => import("@/components/landing/trt/TRTManifesto").then((m) => ({ default: m.TRTManifesto })));
const TRTResults = lazy(() => import("@/components/landing/trt/TRTResults").then((m) => ({ default: m.TRTResults })));
const TRTPillars = lazy(() => import("@/components/landing/trt/TRTPillars").then((m) => ({ default: m.TRTPillars })));
const TRTMarquee = lazy(() => import("@/components/landing/trt/TRTMarquee").then((m) => ({ default: m.TRTMarquee })));
const TRTLocations = lazy(() => import("@/components/landing/trt/TRTLocations").then((m) => ({ default: m.TRTLocations })));
const TRTFAQ = lazy(() => import("@/components/landing/trt/TRTFAQ").then((m) => ({ default: m.TRTFAQ })));
const TRTFinalCTA = lazy(() => import("@/components/landing/trt/TRTFinalCTA").then((m) => ({ default: m.TRTFinalCTA })));
const TRTFooter = lazy(() => import("@/components/landing/trt/TRTFooter").then((m) => ({ default: m.TRTFooter })));

const Fallback = () => <div style={{ minHeight: 320 }} aria-hidden="true" />;

const NewLandingPage = () => {
  useEffect(() => {
    document.title = "TRT in Virginia | Men's Wellness Centers";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Provider-supervised testosterone replacement therapy at 3 Virginia centers. Testing and results reviewed in-visit. Walk in today."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "Inter, sans-serif" }}>
      <TRTHeader />
      <main className="flex-1">
        <TRTHero />
        <SectionReveal><TRTTrustBar /></SectionReveal>
        <Suspense fallback={<Fallback />}>
          <SectionReveal><TRTHowItWorks /></SectionReveal>
          <SectionReveal><TRTManifesto /></SectionReveal>
          <SectionReveal><TRTResults /></SectionReveal>
          <SectionReveal><TRTPillars /></SectionReveal>
          <SectionReveal><TRTMarquee /></SectionReveal>
          <SectionReveal><TRTLocations /></SectionReveal>
          <SectionReveal><TRTFAQ /></SectionReveal>
          <SectionReveal><TRTFinalCTA /></SectionReveal>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <TRTFooter />
      </Suspense>
      <TRTMobileCTA />
      <div className="md:hidden" style={{ height: 56 }} aria-hidden="true" />
    </div>
  );
};

export default NewLandingPage;
