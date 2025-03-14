import { Button } from "@/components/Atoms/Button";
import styles from "../page.module.scss";
import messages from "@/../messages/pages/solucionesParaEmpresas.json";
import { Typography } from "@/components/Atoms/Typography";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { getIcon } from "@/components/Atoms/Icons";
import { setDropdownValue } from "@/app/[page]/solicitud-de-servicios/utils";
import { Card } from "@/components/Atoms/Card";

export const ToolCard = ({ item }: { item: string }) => {
  const { t } = useRichTranslations("Content.solucionesParaEmpresas");
  const router = useRouter();

  return (
    <Card padding="md" className={styles.card}>
      <div className={styles.center}>
        <div className={styles.image}>
          {getIcon(t(`herramientas.list.${item}.icon`), {
            className: styles.icon,
          })}
        </div>
        <div className={styles.title}>
          <Typography
            variant="h4"
            textAlign="left"
            color="color-navy-blue-800"
            weight="bold"
          >
            {t(`herramientas.list.${item}.title`)}
          </Typography>
        </div>
        <div className={styles.text}>
          <Typography
            variant="subtitle3"
            textAlign="left"
            color="color-dark-gray-800"
            weight="bold"
          >
            {t(`herramientas.list.${item}.text`)}
          </Typography>
        </div>
        <ul className={classNames(styles.list)}>
          {
            // @ts-ignore
            Object.keys(messages.herramientas.list[item].list).map((i) => (
              <li key={i}>
                <Typography
                  variant="subtitle3"
                  textAlign="left"
                  color="color-dark-gray-800"
                >
                  {t(`herramientas.list.${item}.list.${i}`)}
                </Typography>
              </li>
            ))
          }
        </ul>
        <div className={classNames(styles.button)}>
          <Button
            variant="primary"
            onClick={() => {
              setDropdownValue(t(`herramientas.list.${item}.formDefault`));
              router.push(t(`herramientas.list.${item}.ctaLink`));
            }}
          >
            {t(`herramientas.list.${item}.ctaText`)}
          </Button>
        </div>
      </div>
    </Card>
  );
};
