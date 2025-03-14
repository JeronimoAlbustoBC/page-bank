import React, { PropsWithChildren } from "react";
import classnames from "classnames";
import classes from "./main.module.scss";

interface Props {
  padding: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const Card: React.FC<PropsWithChildren<Props>> = ({
  children,
  padding = "sm",
  className = undefined,
}) => {
  return (
    <div
      className={classnames(
        classes.container,
        classes[`padding-${padding}`],
        className
      )}
    >
      {children}
    </div>
  );
};
