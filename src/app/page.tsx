import "@/components/craft/craft.css";
import { Main } from "@/components/craft";
import Hero from "@/components/hero";
import CTA from "@/components/landing/cta";
import Footer from "@/components/footer";
import Feature from "@/components/landing/feature";

export default function Home() {
  return (
    <>
      <Main>
        <Hero />
        <CTA />
        <Feature />
      </Main>
      <Footer />
    </>
  );
}
