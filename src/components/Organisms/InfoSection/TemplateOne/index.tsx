import Image from "next/image";
import styles from "./main.module.scss";
import { useTranslations } from "next-intl";
import { PropsWithChildren } from "react";
import classnames from "classnames";
import { useRichTranslations } from "@/hooks/useRichTranslation";

interface Props {
  page: string;
}

export const InfoSection: React.FC<PropsWithChildren<Props>> = ({
  page,
  children,
}) => {
  const { t, exists } = useRichTranslations(`Content.${page}`);

  return (
    <div className={styles.subhero}>
      <div className={styles.content}>{children}</div>
      <div className={classnames(styles.image, "image")}>
        {exists("imageDecoration") && (
          <div
            className={classnames(styles.imageDecoration, [
              styles[t("imageDecoration")],
            ])}
            style={{
              borderColor: exists("imageDecorationColor")
                ? `var(--${t("imageDecorationColor")})`
                : "var(--color-white)",
            }}
          ></div>
        )}
        {t("image") && <Image src={t("image")} fill alt={t("imageAlt")} />}
      </div>
    </div>
  );
};
