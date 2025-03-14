import React from "react";
import styles from "./main.module.scss";
import { Card } from "../Atoms/Card";
import { Typography } from "../Atoms/Typography";
import messages from "@/../messages/components/Sucursales.json";
import { useRichTranslations } from "@/hooks/useRichTranslation";

export const Sucursales = () => {
  const { t } = useRichTranslations("Shared.Sucursales");
  const list = Object.keys(messages);
  return (
    <div className={styles.list}>
      {list.map((item) => (
        <Card key={item} padding="lg" className={styles.card}>
          <Typography variant="h5" textAlign="left" weight="bold">
            {t(`${item}.title`)}
          </Typography>
          <div>
            <Typography variant="body1" textAlign="left">
              {t(`${item}.address`)}
            </Typography>
            <Typography variant="body1" textAlign="left">
              {t(`${item}.phone`)}
            </Typography>
            <Typography variant="body1" textAlign="left">
              {t(`${item}.time`)}
            </Typography>
          </div>
        </Card>
      ))}
    </div>
  );
};
