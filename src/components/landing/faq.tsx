import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, Container } from "@/components/craft";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "What exactly does frontstep.ai do?",
    answer:
      "frontstep.ai provides AI-powered lead response services for real estate teams. We handle 24/7 phone calls, text follow-up, and automated reporting so you never miss an opportunity to connect with potential clients.",
  },
  {
    question: "How does the AI phone system work?",
    answer:
      "Our AI answers calls instantly in natural conversation, qualifying leads and booking appointments. The system understands your listings and market, and seamlessly hands off qualified leads to your team with full conversation context.",
  },
  {
    question: "Can I integrate this with my existing CRM and tools?",
    answer:
      "Yes! We integrate with all major real estate CRMs and tools. Our team handles the entire setup process, configuring the integrations to work with your existing workflow.",
  },
  {
    question: "What makes frontstep.ai different from other AI solutions?",
    answer:
      "Unlike generic AI tools, we're built specifically for real estate. Our AI understands property details, market trends, and the nuances of real estate conversations. Plus, we offer full-service setup and management - no technical expertise required.",
  },
];

const FAQ = () => {
  return (
    <Section>
      <Container>
        <h3 className="!mt-0">Frequently Asked Questions</h3>
        {/* <h4 className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          customer support team.
        </h4> */}
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
