import { InfoSection as One } from "./TemplateOne";

interface Props {
  variant: "one" | "two";
  [key: string]: any;
}
export const InfoSection: React.FC<Props> = ({ variant, ...props }) => {
  switch (variant) {
    case "one":
      return <One {...(props as any)} />;

    default:
      return <One {...(props as any)} />;
  }
};
