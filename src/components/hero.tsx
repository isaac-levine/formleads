import Image from "next/image";
// import Link from "next/link";
import Balancer from "react-wrap-balancer";
// import { ArrowRight } from "lucide-react";

// Custom Components
import { Section, Container } from "@/components/craft";

// Assets
import Placeholder from "../../public/placeholder.jpg";
import GetStartedButton from "./landing/GetStartedButton";
// import { HoverBorderGradient } from "./ui/hover-border-gradient";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center no-underline">
          <GetStartedButton text="Get Started" href="/get-started" />
          <h1 className="mt-4 !mb-0">
            {/* <Balancer> */}
            AI powered growth services for modern real estate teams.
            {/* </Balancer> */}
          </h1>
          <h3 className="mt-4 text-muted-foreground">
            <Balancer>
              Create beautiful, conversion-focused forms and landing pages
              without any technical knowledge.
            </Balancer>
          </h3>
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="not-prose h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
