import Balancer from "react-wrap-balancer";

import { Button } from "../ui/button";
import { Container, Section } from "@/components/craft";

const Header = () => {
  return (
    <Section>
      <Container className="flex flex-col">
        <h1 className="!mb-0">Your Ultimate Real Estate Form Builder</h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Capture and nurture leads with ease using our drag-and-drop form
            builder and automated follow-ups.
          </Balancer>
        </h3>
        <div className="!mt-8 flex items-center gap-2">
          <Button>Get Started</Button>
          <Button variant={"outline"}>Learn More</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Header;
