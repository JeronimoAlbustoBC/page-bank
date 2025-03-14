import { Button } from "@/components/Atoms/Button";
import styles from "../page.module.scss";
import classNames from "classnames";
import { Typography } from "@/components/Atoms/Typography";
import { getIcon } from "@/components/Atoms/Icons";
import messages from "@/../messages/pages/negociosYProfesionales.json";
import { useRouter } from "next/navigation";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { setDropdownValue } from "@/app/[page]/solicitud-de-servicios/utils";

export const ToolCard = ({ item }: { item: string }) => {
  const { t } = useRichTranslations("Content.negociosYProfesionales");
  const router = useRouter();

  const list =
    // @ts-ignore
    messages.items.list[item].list;

  return (
    <div
      className={styles.card}
      style={{
        backgroundColor: `var(--${t(`items.list.${item}.boxColor`)})`,
      }}
    >
      <div className={styles.center}>
        <div className={styles.icon}>
          {getIcon(t(`items.list.${item}.icon`))}
        </div>
        <div className={styles.title}>
          <Typography
            variant="h4"
            textAlign="left"
            color="color-navy-blue-800"
            weight="bold"
          >
            {t(`items.list.${item}.title`)}
          </Typography>
        </div>
        <ul className={classNames(styles.list)}>
          {Object.keys(list).map((i) => (
            <li key={i}>
              <Typography
                variant="subtitle3"
                textAlign="left"
                color="color-dark-gray-800"
              >
                {t(`items.list.${item}.list.${i}`)}
              </Typography>
            </li>
          ))}
        </ul>
        {t(`items.list.${item}.ctaText`) && (
          <div className={classNames(styles.button)}>
            <Button
              variant="secondary"
              onClick={() => {
                setDropdownValue(t(`items.list.${item}.formDefault`));
                router.push(t(`items.list.${item}.ctaLink`));
              }}
            >
              {t(`items.list.${item}.ctaText`)}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
