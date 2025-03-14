import { HeroSection as One } from "./TemplateOne";
import { HeroSection as Two } from "./TemplateTwo";
import { HeroSection as Three } from "./TemplateThree";
import { HeroSection as Four } from "./TemplateFour";

interface Props {
  variant: "one" | "two" | "three" | "four";
  [key: string]: any;
}
export const HeroSection: React.FC<Props> = ({ variant, ...props }) => {
  switch (variant) {
    case "one":
      return <One {...(props as any)} />;
    case "two":
      return <Two {...(props as any)} />;
    case "three":
      return <Three {...(props as any)} />;
    case "four":
      return <Four {...(props as any)} />;

    default:
      return <One {...(props as any)} />;
  }
};
