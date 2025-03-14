import React, { PropsWithChildren } from "react";
import { Card } from "@/components/Atoms/Card";
import { Typography, TypographyVariant } from "@/components/Atoms/Typography";
import { Button } from "@/components/Atoms/Button";
import { useRouter } from "next/navigation";
import classes from "./main.module.scss";
import Image from "next/image";
import classnames from "classnames";
import { setDropdownValue } from "@/app/[page]/solicitud-de-servicios/utils";

interface Props {
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  imageHeight: number;
  buttonText: string;
  buttonLink: string;
  alignItems?: "center" | "left";
  titleVariant: TypographyVariant;
  className: string;
  icon?: any;
  buttonVariant?: "primary" | "secondary";
}
export const InfoCard: React.FC<PropsWithChildren<Props>> = ({
  children,
  imageSrc,
  imageAlt,
  imageHeight = 266,
  title,
  buttonText,
  buttonLink,
  alignItems = "",
  titleVariant = "h3",
  className,
  icon: Icon,
  buttonVariant = "secondary",
}) => {
  const router = useRouter();

  const handleOnClick = () => {
    setDropdownValue(title);
    router.push(buttonLink);
  };

  return (
    <Card
      padding="md"
      className={classnames(
        classes.container,
        {
          [classes[alignItems]]: alignItems,
        },
        className
      )}
    >
      {imageSrc && (
        <div style={{ height: `${imageHeight}px` }} className={classes.image}>
          <Image src={imageSrc} alt={imageAlt ?? ""} fill objectFit="cover" />
        </div>
      )}
      {Icon && (
        <div style={{ height: `${imageHeight}px` }} className={classes.icon}>
          {Icon}
        </div>
      )}
      <div
        className={classnames(classes.content, {
          [classes[alignItems]]: alignItems,
        })}
      >
        <Typography
          variant={titleVariant}
          textAlign="center"
          color="color-navy-blue-900"
          weight="bold"
        >
          {title}
        </Typography>
      </div>
      {children}
      {buttonText && (
        <Button variant={buttonVariant} onClick={handleOnClick}>
          {buttonText}
        </Button>
      )}
    </Card>
  );
};
