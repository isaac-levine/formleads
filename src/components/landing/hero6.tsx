// import Link from "next/link";

// import { ArrowRight } from "lucide-react";

import { Section, Container } from "@/components/craft";
// import { Button } from "../ui/button";
// import { Link } from "lucide-react";
import GetStartedButton from "./GetStartedButton";
// import { Badge } from "../ui/badge";

const Hero = () => {
  return (
    <Section className="relative backdrop-blur-sm">
      <Container className="flex flex-col gap-8">
        {/* <Badge className="not-prose w-fit" variant="outline">
          <Link
            className="group flex items-center gap-1"
            href="https://9d8.dev"
          >
            Lorem ipsum dolor sit amet
            <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
          </Link>
        </Badge> */}
        <h1 className="!mb-0">
          What if you could increase your lead conversion by 10%?
        </h1>
        <h3 className="rounded-md border bg-muted/50 p-4 text-muted-foreground">
          Stop losing leads to slow response times. Our AI instantly engages
          your prospects with natural conversation, intelligent qualification,
          and personalized follow-up. Book more appointments and close more
          deals with AI that works 24/7.
        </h3>

        <div className="flex gap-4">
          <GetStartedButton text={"Learn How"} href={"/get-started"} />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
