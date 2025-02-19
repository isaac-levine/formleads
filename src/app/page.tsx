import "@/components/craft/craft.css";
import { Main } from "@/components/craft";
import CTA from "@/components/landing/cta";
import Footer from "@/components/footer";
import FAQ from "@/components/landing/faq";
import Hero6 from "@/components/landing/hero6";
import Features from "@/components/landing/features";
import Hero from "@/components/hero";
import { NavBar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <NavBar />

      <Main className="pt-24">
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
