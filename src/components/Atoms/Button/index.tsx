import React, { PropsWithChildren } from "react";
import classnames from "classnames";
import classes from "./main.module.scss";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant: "primary" | "secondary" | "tertiary";
  fullWidth?: boolean;
  className?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  onClick,
  children,
  variant,
  fullWidth = false,
  className,
  size = "medium",
  disabled = false,
}) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (!disabled) {
      onClick(e);
    }
  };
  return (
    <button
      className={classnames(
        classes.container,
        classes[variant],
        classes[size],
        {
          [classes.fullWidth]: fullWidth,
        },
        className
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
