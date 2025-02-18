// React and Next.js imports
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import Logo from "../../public/logo.svg";
import GetStartedButton from "./landing/GetStartedButton";

const Hero = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
        <Image
          src={Logo}
          width={172}
          height={72}
          alt="Company Logo"
          className="not-prose mb-6 dark:invert md:mb-8 border-none"
        />
        <h1 className="!mb-0">
          <Balancer>
            AI powered growth services for modern real estate teams.
          </Balancer>
        </h1>
        {/* <SpotlightPreview /> */}
        <h3 className="text-muted-foreground mt-6">
          <Balancer>
            Empowering real estate professionals with cutting-edge AI solutions
            to drive growth and efficiency.
          </Balancer>
        </h3>
        <div className="mt-6">
          <GetStartedButton text="Get Started" href="/dashboard" />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
