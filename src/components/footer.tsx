import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "./craft";
import Logo from "../../public/logo.svg";

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="grid gap-6">
            <Link href="/">
              <h3 className="sr-only">formleads.ai</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              />
            </Link>
            <p>
              <Balancer>
                formleads.ai is a user-friendly form builder specifically
                designed for real estate agents to capture and nurture leads.
              </Balancer>
            </p>
            <p className="text-muted-foreground">
              © <a href="https://formleads.ai">formleads.ai</a>. All rights
              reserved. 2024-present.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Website</h5>
            <Link href="/">Blog</Link>
            <Link href="/">Authors</Link>
            <Link href="/">Categories</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Legal</h5>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
