import "@/components/craft/craft.css";
import { Main } from "@/components/craft";
import Hero from "@/components/hero";
import CTA from "@/components/landing/cta";
import Footer from "@/components/footer";
import Feature from "@/components/landing/feature";
import FAQ from "@/components/landing/faq";
import Header from "@/components/landing/header";
// import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export default function Home() {
  return (
    <>
      <Main className="pt-12">
        <Hero />
        {/* <AnimatedTooltip items={[]} /> */}
        <Header />
        <Feature />
        <FAQ />
        <CTA />
      </Main>
      <Footer />
    </>
  );
}
