import { Section, Container } from "@/components/craft";
import { JSX } from "react";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Coins, ArrowRight } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Drag-and-Drop Builder",
    href: "/",
    description:
      "Easily create forms with our intuitive drag-and-drop builder, designed specifically for real estate agents.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Automated Follow-Ups",
    href: "/",
    description:
      "Nurture your leads with automated follow-ups, ensuring no potential client is left behind.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "CRM Integration",
    href: "/",
    description:
      "Seamlessly integrate with popular real estate CRMs to keep your leads organized and accessible.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Mobile-Responsive Design",
    href: "/",
    description:
      "Ensure your forms look great on any device with our mobile-responsive design.",
    cta: "Learn More",
  },
];

const Feature = () => {
  return (
    <Section>
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Core Features</Balancer>
          </h3>
          <h4 className="text-2xl font-light opacity-70">
            <Balancer>
              Discover the powerful features that make frontstep.ai the ultimate
              tool for real estate agents.
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                  key={index}
                >
                  <div className="grid gap-4">
                    {icon}
                    <h4 className="text-xl text-primary">{title}</h4>
                    <p className="text-base opacity-75">{description}</p>
                  </div>
                  {cta && (
                    <div className="flex h-fit items-center text-sm font-semibold">
                      <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  )}
                </Link>
              )
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
