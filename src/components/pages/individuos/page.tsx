"use client";
import { HeroSection } from "@/components/Organisms/HeroSection";
import styles from "./page.module.scss";
import messages from "@/../messages/pages/individuos.json";
import { useRouter } from "next/navigation";
import { useRichTranslations } from "@/hooks/useRichTranslation";
import { Calificanos } from "@/components/Organisms/Calificanos";
import { Button } from "@/components/Atoms/Button";
import { Typography } from "@/components/Atoms/Typography";
import { Card } from "@/components/Atoms/Card";
import { getIcon } from "@/components/Atoms/Icons";
import { setDropdownValue } from "@/app/[page]/solicitud-de-servicios/utils";

export function IndividuosPage() {
  const heroList = messages.hero.list;
  const featureList = messages.features;
  const conocenosCards = messages.conocenos.list;
  const router = useRouter();
  const { t, tRich } = useRichTranslations("Content.individuos");
  const ofrecemosCards = messages.ofrecemos.list;
  return (
    <main className={styles.main}>
      <HeroSection
        variant="three"
        page="individuos.hero"
        titleMaxWidth="600px"
        colorShade="agro"
        list={heroList}
        className={styles.hero}
      />
      <div className={styles.features}>
        {Object.keys(featureList).map((key) => (
          <Card padding="sm" key={key} className={styles.card}>
            {getIcon(t(`features.${key}.icon`), {
              width: 75,
              className: styles.icon,
            })}
            <Typography
              variant="h5"
              textAlign="center"
              color="color-navy-blue-900"
              className={styles.text}
            >
              {tRich(`features.${key}.text`)}
            </Typography>
          </Card>
        ))}
      </div>
      <Calificanos page="individuos.calificamos" />

      <div className={styles.conocenos}>
        <div className={styles.content}>
          <div className={styles.cards}>
            {Object.keys(conocenosCards).map((card, index) => {
              return (
                <Card key={index} padding="md" className={styles.card}>
                  <div className={styles.icon}>
                    {getIcon(t(`conocenos.list.${card}.icon`), {
                      width: 66,
                      className: styles.icon,
                    })}
                  </div>
                  <Typography
                    variant="h4"
                    color={"navy-blue-800"}
                    textAlign="left"
                    weight="bold"
                  >
                    {tRich(`conocenos.list.${card}.title`)}
                  </Typography>
                  <Button
                    variant="secondary"
                    className={styles.cta}
                    onClick={() => {
                      setDropdownValue(t(`conocenos.list.${card}.title`));
                      router.push(t(`conocenos.list.${card}.ctaLink`));
                    }}
                  >
                    {t(`conocenos.list.${card}.ctaText`)}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.offering}>
        <Typography
          variant="h3"
          textAlign="center"
          className={styles.offeringTitle}
          weight="bold"
        >
          {t("ofrecemos.title")}
        </Typography>
        <div className={styles.cards}>
          {Object.keys(ofrecemosCards).map((card, index) => {
            const color = `var(--${t(`ofrecemos.list.${card}.color`)})`;
            return (
              <Card key={index} padding="md" className={styles.card}>
                <div className={styles.icon}>
                  {getIcon(t(`ofrecemos.list.${card}.icon`))}
                </div>
                <Typography
                  variant="h4"
                  color={color}
                  textAlign="center"
                  weight="bold"
                >
                  {t(`ofrecemos.list.${card}.title`)}
                </Typography>
                <div
                  className={styles.separator}
                  style={{
                    backgroundColor: color,
                  }}
                ></div>
                <Typography variant="body1" color={color} textAlign="center">
                  {tRich(`ofrecemos.list.${card}.text`)}
                </Typography>
                <Button
                  variant="secondary"
                  onClick={() =>
                    router.push(t(`ofrecemos.list.${card}.ctaLink`))
                  }
                >
                  {t(`ofrecemos.list.${card}.ctaText`)}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}
