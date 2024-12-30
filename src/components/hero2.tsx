// React and Next.js imports
// import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
// import { Camera } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
// import { Button } from "@/components/ui/button";

// Asset imports
import Logo from "../../public/logo.svg";
import GetStartedButton from "./landing/GetStartedButton";
// import { Spotlight } from "./ui/Spotlight";
// import { SpotlightPreview } from "./landing/SpotlightPreview";

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
          <GetStartedButton text="Get Started" href="/get-started" />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
