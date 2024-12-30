import { ArrowRight } from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

interface GetStartedButtonProps {
  text: string;
  href: string;
}

export default function GetStartedButton({
  text,
  href,
}: GetStartedButtonProps) {
  return (
    <HoverBorderGradient>
      <a className="no-underline flex items-center" href={href}>
        {text} <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </HoverBorderGradient>
  );
}
