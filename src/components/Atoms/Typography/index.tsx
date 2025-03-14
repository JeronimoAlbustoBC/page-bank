import React, { PropsWithChildren } from "react";
import classnames from "classnames";
import classes from "./main.module.scss";

interface Props {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body1"
    | "body2"
    | "body3"
    | "subtitle1"
    | "subtitle2"
    | "subtitle3"
    | "caption"
    | "a";
  color?: string;
  weight?: "normal" | "bold" | "lighter" | "500" | "600" | "700" | "800";
  href?: string;
  target?: "_self" | "_black";
  textAlign: "left" | "center" | "right" | "justify";
  className?: string;
}
export type TypographyVariant = Props["variant"];
export const Typography: React.FC<PropsWithChildren<Props>> = ({
  variant = "p",
  children,
  color = "color-black",
  weight = "normal",
  href = "",
  textAlign = "left",
  className,
  target = "_black",
}) => {
  const getColor = () => {
    if (color.startsWith("rgb") || color.startsWith("#")) {
      return color;
    }
    if (color.startsWith("color")) {
      return `var(--${color})`;
    }
    return "#000000";
  };

  let Component: any = "p";
  let typography = variant;
  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
      Component = variant;
      break;
    case "body1":
    case "body2":
    case "body3":
      Component = "p";
      break;
    case "caption":
      Component = "span";
      break;
    case "heading1":
    case "heading2":
    case "heading3":
      Component = "p";
      break;
    case "a":
      Component = "a";
      break;
  }
  return (
    <Component
      style={{
        color: getColor(),
        fontWeight: weight ? weight : "normal",
        textAlign,
      }}
      className={classnames(classes.base, classes[typography], className)}
      {...(variant === "a" ? { href: href, target } : null)}
    >
      {children}
    </Component>
  );
};
