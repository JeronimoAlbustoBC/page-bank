import { useState } from "react";
import classNames from "classnames";
import { ArrowTop } from "@/components/Atoms/Icons/svgs/ArrowTop";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import styles from "../page.module.scss";
import { Typography } from "@/components/Atoms/Typography";

export const ToolCard = ({ item }: { item: string }) => {
  const { t } = useRichTranslations("Content.faqs");
  const [isOpened, setOpened] = useState(false);

  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: `var(--${t(`questions.list.${item}.boxColor`)})`,
      }}
    >
      <div className={styles.title}>
        <Typography
          variant="h4"
          textAlign="left"
          color="color-navy-blue-800"
          weight="bold"
        >
          {t(`questions.list.${item}.title`)}
        </Typography>
        <button
          className={classNames(styles.icon, { [styles.rotate]: !isOpened })}
          onClick={() => setOpened(!isOpened)}
        >
          <ArrowTop />
        </button>
      </div>
      <div className={classNames(styles.text, { [styles.hide]: !isOpened })}>
        <Typography
          variant="subtitle3"
          textAlign="left"
          color="color-dark-gray-800"
        >
          {t(`questions.list.${item}.text`)}
        </Typography>
      </div>
    </div>
  );
};
