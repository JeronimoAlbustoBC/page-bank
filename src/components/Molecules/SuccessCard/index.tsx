import React from "react";
import { Card } from "@/components/Atoms/Card";
import { Typography } from "@/components/Atoms/Typography";
import { useTranslations } from "next-intl";
import { Button } from "@/components/Atoms/Button";
import { useRouter } from "next/navigation";
import classes from "./main.module.scss";
import { SuccessImage } from "./SuccessImage";

export const SuccessCard: React.FC = () => {
  const t = useTranslations("SuccessCard");
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/");
  };

  return (
    <Card padding="md" className={classes.container}>
      <div>
        <Typography
          variant="h4"
          textAlign="center"
          color="color-navy-blue-700"
          weight="bold"
        >
          {t("title")}
        </Typography>
        <SuccessImage />
        <Typography
          variant="body3"
          textAlign="center"
          color="color-dark-gray-800"
        >
          {t("text")}
        </Typography>
      </div>
      <Button variant="primary" onClick={handleOnClick}>
        {t("button")}
      </Button>
    </Card>
  );
};
