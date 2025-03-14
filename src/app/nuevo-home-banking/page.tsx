import { Typography } from "@/components/Atoms/Typography";
import { PageTemplate } from "@/components/PageTemplate";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { Metadata } from "next";
import messages from "@/../messages/pages/NuevoHomeBanking.json";
import styles from "./main.module.scss";

const title = "Nuevo Home Banking|Banco de Comercio";

export const metadata: Metadata = {
  title: title,
  openGraph: { title: title },
};

export default function Page() {
  const { t } = useRichTranslations("Content.NuevoHomeBanking");
  const list = Object.keys(messages.sections);
  return (
    <PageTemplate>
      <main className={styles.main}>
        <Typography variant="h1" textAlign="left">
          {t("title")}
        </Typography>
        <Typography variant="h4" textAlign="left">
          {t("text")}
        </Typography>
        <div className={styles.sections}>
          {list.map((section) => {
            //@ts-ignore
            const sublist = Object.keys(messages.sections[section].list);
            return (
              <div key={section} className={styles.section}>
                <Typography variant="subtitle1" textAlign="left">
                  {t(`sections.${section}.title`)}
                </Typography>
                <div className={styles.list}>
                  {sublist.map((subitem) => (
                    <Typography
                      key={subitem}
                      variant="a"
                      textAlign="left"
                      href={t(`sections.${section}.list.${subitem}.href`)}
                    >
                      {t(`sections.${section}.list.${subitem}.text`)}
                    </Typography>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </PageTemplate>
  );
}
