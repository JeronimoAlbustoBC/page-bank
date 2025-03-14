import React, { PropsWithChildren } from "react";
import { Card } from "@/components/Atoms/Card";
import { Typography, TypographyVariant } from "@/components/Atoms/Typography";
import { Button } from "@/components/Atoms/Button";
import { useRouter } from "next/navigation";
import classes from "./main.module.scss";
import Image from "next/image";
import classnames from "classnames";

interface Props {
  title: string;
  icon: React.ReactNode;
  className?: string;
}
export const HorizontalInfoCard: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
  className,
  icon: Icon,
}) => {
  return (
    <Card padding="lg" className={classnames(classes.container, className)}>
      <div className={classes.icon}>{Icon}</div>
      <div className={classes.content}>
        <Typography
          variant={"h4"}
          textAlign="left"
          color="color-navy-blue-800"
          weight="bold"
        >
          {title}
        </Typography>
        <div>{children}</div>
      </div>
    </Card>
  );
};
