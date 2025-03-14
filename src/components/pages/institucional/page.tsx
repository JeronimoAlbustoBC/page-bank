"use client";
import { HeroSection } from "@/components/Organisms/HeroSection";
import messages from "@/../messages/pages/institucional.json";
import styles from "./page.module.scss";
import { InfoSection } from "@/components/Organisms/InfoSection";
import { Typography } from "@/components/Atoms/Typography";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { Card } from "@/components/Atoms/Card";
import { getIcon } from "@/components/Atoms/Icons";
import { Calificanos } from "@/components/Organisms/Calificanos";
import { Sucursales } from "@/components/sucursales";

export default function InstitucionalPage() {
  const { t } = useRichTranslations("Content.institucional");
  const heroList = messages.hero.list;
  const valores = messages.valores.cards;

  return (
    <main className={styles.main}>
      <HeroSection
        variant="three"
        list={heroList}
        page="institucional.hero"
        colorShade="navy-blue"
        titleMaxWidth="600px"
      />
      <div className={styles.infoSection1}>
        <InfoSection variant="one" page="institucional.subhero">
          <div className={styles.sectionsContainer}>
            <div className={styles.section}>
              <Typography
                variant="subtitle1"
                textAlign="left"
                color="color-navy-blue-900"
                weight="800"
                className={styles.uppercase}
              >
                {t("subhero.items.one.title")}
              </Typography>
              <Typography
                variant="h5"
                textAlign="left"
                color="color-navy-blue-900"
              >
                {t("subhero.items.one.text")}
              </Typography>
            </div>
            <div className={styles.section}>
              <Typography
                variant="subtitle1"
                textAlign="left"
                color="color-navy-blue-900"
                weight="800"
                className={styles.uppercase}
              >
                {t("subhero.items.two.title")}
              </Typography>
              <Typography
                variant="h5"
                textAlign="left"
                color="color-navy-blue-900"
              >
                {t("subhero.items.two.text")}
              </Typography>
            </div>
          </div>
        </InfoSection>
      </div>
      <div className={styles.valores}>
        <Typography variant="h3" textAlign="left" color="color-navy-blue-900">
          {t("valores.title")}
        </Typography>
        <div className={styles.cards}>
          {Object.keys(valores).map((key) => (
            <Card padding="sm" key={key} className={styles.card}>
              {getIcon(t(`valores.cards.${key}.icon`))}
              <Typography
                variant="subtitle3"
                textAlign="center"
                color="color-navy-blue-900"
                className={styles.title}
              >
                {t(`valores.cards.${key}.title`)}
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                color="color-navy-blue-900"
              >
                {t(`valores.cards.${key}.text`)}
              </Typography>
            </Card>
          ))}
        </div>
      </div>
      <div className={styles.sumate}>
        <Calificanos page="institucional.sumate" className={styles.sumateBox} />
      </div>
      <Sucursales />
    </main>
  );
}
