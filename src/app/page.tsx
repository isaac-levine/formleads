import "@/components/craft/craft.css";
import { Main } from "@/components/craft";
import CTA from "@/components/landing/cta";
import Footer from "@/components/footer";
import FAQ from "@/components/landing/faq";
import Hero6 from "@/components/landing/hero6";
import Features from "@/components/landing/features";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Main className="pt-12">
        <Hero />
        <Features />
        <Hero6 />
        <FAQ />
        <CTA />
      </Main>
      <Footer />
    </>
  );
}
