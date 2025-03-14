import React from "react";
import classnames from "classnames";
import classes from "./main.module.scss";

interface Props {
  id: string;
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  active: boolean;
  className?: string;
}

export const TabItem: React.FC<Props> = ({
  id,
  onClick,
  label,
  active = false,
  className,
}) => {
  return (
    <button
      id={id}
      className={classnames(
        classes.container,
        { [classes.active]: active },
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
