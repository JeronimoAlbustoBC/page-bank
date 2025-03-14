import Image from "next/image";
import styles from "./main.module.scss";
import { Typography } from "@/components/Atoms/Typography";
import { Breadcrumb } from "@/components/Molecules/Breadcrumb";
import { useTranslations } from "next-intl";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import classNames from "classnames";

interface Props {
  page: string;
  titleMaxWidth: string;
  className?: string;
}

export const HeroSection: React.FC<Props> = ({
  page,
  titleMaxWidth,
  className = "",
}) => {
  const { t, tRich } = useRichTranslations(`Content.${page}`);

  return (
    <div className={classNames(styles.hero, className)}>
      <div className={styles.gradient}></div>
      <Image
        src={t("hero.background")}
        fill
        alt={t("hero.backgroundAlt")}
        className={styles.background}
      ></Image>
      <div className={styles.content}>
        <div className={styles.breadcrumb}>
          <Breadcrumb />
        </div>
        <div style={{ maxWidth: titleMaxWidth || "100%" }}>
          <Typography
            variant="h2"
            textAlign="left"
            color="color-white"
            weight="bold"
          >
            {tRich("hero.title")}
          </Typography>
        </div>
      </div>
    </div>
  );
};
