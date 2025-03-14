import React from "react";
import classes from "./main.module.scss";

interface Props {
  width?: number;
}
export const BurgerMenu: React.FC<Props> = ({ width = "185" }) => {
  return (
    <svg
      className={classes.icon}
      width={`${width}`}
      height={`${width}`}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="46" height="46" rx="23" fill="#8CD678" />
      <path
        d="M14 29V27H32V29H14ZM14 24V22H32V24H14ZM14 19V17H32V19H14Z"
        fill="#1E1E1E"
      />
    </svg>
  );
};
