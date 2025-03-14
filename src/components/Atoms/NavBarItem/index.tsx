import React, { useState } from "react";
import classnames from "classnames";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import classes from "./main.module.scss";

interface Props {
  id: string;
  label:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  active: boolean;
  showChevron?: boolean;
  subitems?: Props[];
  className?: string;
}

const Item: React.FC<Props> = ({
  id,
  onClick,
  label,
  active = false,
  showChevron = false,
}) => {
  return (
    <button
      id={id}
      className={classnames(classes.item, {
        [classes.active]: active,
        [classes.bold]: showChevron,
      })}
      onClick={onClick}
    >
      {label}
      {showChevron && (active ? <FaChevronUp /> : <FaChevronDown />)}
    </button>
  );
};

export const NavBarItem: React.FC<Props> = ({
  id,
  onClick,
  label,
  active = false,
  subitems,
  className,
}) => {
  const [isOpened, setIsOpened] = useState(active);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    subitems && subitems.length > 0 && setIsOpened(!isOpened);
    onClick(e);
  };

  return (
    <div className={classnames(classes.container, className)}>
      <Item
        id={id}
        onClick={handleClick}
        active={subitems && subitems.length > 0 ? isOpened : active}
        showChevron={subitems && subitems.length > 0}
        label={label}
      />
      <div
        className={classnames(classes.subitems, {
          [classes.opened]: isOpened,
        })}
      >
        {subitems?.map((item) => (
          <NavBarItem
            key={item.id}
            id={item.id}
            onClick={item.onClick}
            active={item.active}
            subitems={item.subitems}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};
