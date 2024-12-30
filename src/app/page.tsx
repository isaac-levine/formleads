import "@/components/craft/craft.css";
import { Main } from "@/components/craft";
// import Hero from "@/components/hero";
import Hero2 from "@/components/hero2";
import CTA from "@/components/landing/cta";
import Footer from "@/components/footer";
// import Feature from "@/components/landing/feature";
import FAQ from "@/components/landing/faq";
// import Header from "@/components/landing/header";
import Hero6 from "@/components/landing/hero6";
import Features from "@/components/landing/features";
// import { TypewriterEffectSmoothDemo } from "@/components/landing/TypewriterEffectSmoothDemo";
// import Pricing from "@/components/landing/pricing";
// import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function Home() {
  return (
    <>
      <Main className="pt-12">
        {/* <TypewriterEffectSmoothDemo /> */}
        {/* <Hero /> */}
        <Hero2 />
        {/* <AnimatedTooltip items={[]} /> */}
        {/* <Header /> */}
        {/* <Feature /> */}
        <Features />
        <Hero6 />
        <FAQ />
        {/* <Pricing /> */}
        <CTA />
      </Main>
      <Footer />
    </>
  );
}
