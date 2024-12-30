// React and Next.js
import React, { JSX } from "react";

// Layout Components
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Icons
import { Coins } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Always-On Lead Capture",
    description:
      "Your leads are instantly greeted by natural-sounding AI that qualifies interest and books appointments. Never miss another opportunity, day or night, and seamlessly hand off qualified leads to your team.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Smart Text Nurturing",
    description:
      "Automated follow-up that feels personal, with intelligent qualification and instant responses to missed calls. Our AI learns what properties interest each lead and keeps them engaged.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Tailored Neighborhood Reports",
    description:
      "Instantly generate tailored market intelligence reports based on each lead's preferences and interests. Deliver beautiful, data-rich PDFs covering schools, trends, and local insights within seconds of receiving a new lead.",
  },
];

const Feature = () => {
  return (
    // removed border-b from this section
    <Section className="">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Modern Lead Response, Powered by AI</Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              Convert more leads with intelligent automation that never sleeps
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                {icon}
                <h4 className="text-xl text-primary">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
