import React from "react";
import { Card } from "@/components/Atoms/Card";
import { Cross } from "@/components/Atoms/Icons/Cross";
import { Typography } from "@/components/Atoms/Typography";
import { Button } from "@/components/Atoms/Button";
import { useRouter } from "next/navigation";
import classes from "./main.module.scss";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { ErrorImage } from "./ErrorImage";

export const ErrorCard: React.FC = () => {
  const { t, tRich } = useRichTranslations("ErrorCard");
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/");
  };

  const handleErrorClick = () => {
    router.back();
  };

  return (
    <Card padding="md" className={classes.container}>
      <div>
        <Typography
          variant="h4"
          textAlign="center"
          color="color-navy-blue-800"
          weight="bold"
        >
          {t("title")}
        </Typography>
        <ErrorImage />
        <Typography variant="body3" textAlign="center" color="color-black">
          {tRich("text")}
        </Typography>
      </div>
      <div>
        <Button variant="primary" onClick={handleErrorClick} fullWidth>
          {t("button.primary")}
        </Button>
        <Button variant="secondary" onClick={handleOnClick} fullWidth>
          {t("button.secondary")}
        </Button>
      </div>
    </Card>
  );
};
