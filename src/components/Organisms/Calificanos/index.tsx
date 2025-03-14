import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./main.module.scss";
import { Typography } from "@/components/Atoms/Typography";
import { Button } from "@/components/Atoms/Button";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import classNames from "classnames";

interface Props {
  page: string;
  className?: string;
}
export const Calificanos: React.FC<PropsWithChildren<Props>> = ({
  page,
  className,
}) => {
  const { t, exists } = useRichTranslations(`Content.${page}`);
  const router = useRouter();
  return (
    <div
      className={classNames(styles.container, className)}
      style={{
        backgroundColor: `${exists("backgroundColor") ? `var(--${t("backgroundColor")})` : ""}`,
      }}
    >
      <div className={styles.content}>
        <div className={styles.left}>
          <Typography
            variant={exists("titleVariant") ? (t("titleVariant") as any) : "h1"}
            textAlign="left"
            color="color-white"
            weight="bold"
            className={styles.title}
          >
            {t("title")}
          </Typography>
          <Typography
            variant={
              exists("textVariant") ? (t("textVariant") as any) : "subtitle3"
            }
            textAlign="left"
            color="color-white"
            weight="600"
            className={styles.text}
          >
            {t("text")}
          </Typography>
          <Button
            className="btn_whatsapp"
            variant={
              exists("buttonVariant") ? (t("buttonVariant") as any) : "primary"
            }
            onClick={() => router.push(t("ctaLink"))}
          >
            {t("ctaText")}
          </Button>
        </div>
        <div className={styles.image}>
          <Image src={t("image")} alt={t("imageAlt")} fill />
          <div
            className={styles.imageDecoration}
            style={{
              borderColor: exists("imageDecorationColor")
                ? `var(--${t("imageDecorationColor")})`
                : "var(--color-green-300)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
